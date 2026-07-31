# Regenerates the client-facing PDFs from their HTML sources using headless Chrome.
# Run:  powershell -ExecutionPolicy Bypass -File .\docs\build-pdfs.ps1

$ErrorActionPreference = "Stop"

$docs = Split-Path -Parent $MyInvocation.MyCommand.Path

# source html  ->  output pdf name
$jobs = @(
  @{ Src = "contract.html";  Out = "Test-Portal-Academy-Website-Agreement.pdf" },
  @{ Src = "checklist.html"; Out = "Test-Portal-Academy-Content-Checklist.pdf" }
)

$candidates = @(
  "C:\Program Files\Google\Chrome\Application\chrome.exe",
  "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
  "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
  "C:\Program Files\Microsoft\Edge\Application\msedge.exe"
)

$browser = $candidates | Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $browser) { throw "Neither Chrome nor Edge was found. Install one, or add its path to `$candidates." }

foreach ($job in $jobs) {
  $html = Join-Path $docs $job.Src
  $pdf  = Join-Path $docs $job.Out

  if (-not (Test-Path $html)) {
    Write-Warning "Skipped - source not found: $html"
    continue
  }

  if (Test-Path $pdf) { Remove-Item $pdf -Force }

  $profileDir = Join-Path $env:TEMP ("tpva-pdf-" + [guid]::NewGuid().ToString("N"))

  & $browser `
    --headless `
    --disable-gpu `
    --no-sandbox `
    --no-pdf-header-footer `
    --user-data-dir="$profileDir" `
    --print-to-pdf="$pdf" `
    "file:///$($html -replace '\\','/')" | Out-Null

  Start-Sleep -Milliseconds 400
  try { Remove-Item $profileDir -Recurse -Force -ErrorAction Stop } catch {}

  if (Test-Path $pdf) {
    $kb = [math]::Round((Get-Item $pdf).Length / 1KB, 1)
    Write-Output ("OK  {0,-46} {1} KB" -f $job.Out, $kb)
  } else {
    throw "PDF was not produced from $($job.Src). Check that it opens correctly in a browser."
  }
}

Write-Output "Rendered with $(Split-Path $browser -Leaf) into $docs"
