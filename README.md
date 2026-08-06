# TestPortal Virtual Academy — Website

Marketing website for TestPortal Virtual Academy, a UK-based online STEM tuition provider teaching Year 7 to A-Level.

Built with **Next.js 16 (App Router) · TypeScript · Tailwind CSS 4**. Every page is statically generated — there is no database, no API routes and no server state. The only interactive element is the contact form, which sends enquiries by email through EmailJS.

**Live domain:** `testportalva.org`

---

## Quick start

```bash
npm install
cp .env.local.example .env.local   # then paste your EmailJS keys in
npm run dev                        # http://localhost:3000
```

Other commands:

```bash
npm run build    # production build — must pass before deploying
npm run start    # serve the production build locally
npm run lint     # ESLint
```

---

## Connecting the contact form (EmailJS)

The form at `/contact` will not send anything until these three values are set. Until then it displays a clear "form not connected" notice rather than failing silently.

1. Create a free account at **[emailjs.com](https://www.emailjs.com)**.
2. **Email Services** → add a service and connect the Academy inbox (`info@testportalva.org`). Copy the **Service ID**.
3. **Email Templates** → create a template. Copy the **Template ID**.
4. **Account → General** → copy the **Public Key**.
5. Paste all three into `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

6. Restart the dev server. Environment variables are read at build time, so a restart is required.

### Template variables

Your EmailJS template must use these exact variable names — they match the `name` attributes on the form fields. **EmailJS's default starter template does not match**; see [`docs/EMAILJS-TEMPLATE.md`](docs/EMAILJS-TEMPLATE.md) for the exact values to paste in.

| Variable | Field |
|---|---|
| `{{from_name}}` | Sender's name |
| `{{from_email}}` | Sender's email |
| `{{phone}}` | Phone / WhatsApp |
| `{{enquiry_type}}` | Trial / general / pricing / other |
| `{{year_group}}` | Student's year group |
| `{{subjects_list}}` | Subjects ticked, comma-separated |
| `{{time}}` | Submission timestamp |
| `{{message}}` | Message body |

> Use `subjects_list`, not `subjects`. The visible checkboxes share the name `subjects`, and EmailJS does not reliably collect repeated field names — the form flattens them into a single hidden `subjects_list` field on submit.

Set the template's **Reply-To** to `{{from_email}}` so replying goes straight back to the parent.

### Protect your sending quota

These keys are `NEXT_PUBLIC_`, so they are visible in the browser bundle. That is how EmailJS is designed to work and is not a leak — but anyone could otherwise send through your quota. In the EmailJS dashboard go to **Account → Security → Allowed Domains** and restrict it to `testportalva.org`.

The free tier allows **200 emails per month**. The form includes a honeypot field and a 30-second submit throttle to blunt bot spam.

---

## Editing content

Nearly all text lives in `src/lib/` — you should rarely need to touch a page component.

| File | Controls |
|---|---|
| `src/lib/site.ts` | Name, tagline, motto, **email addresses, phone, address**, headline stats |
| `src/lib/courses.ts` | The six subjects, their level breakdowns, exam boards, curricula, pathway, "why choose us" |
| `src/lib/team.ts` | Team members shown on About, plus the credentials strip |
| `src/lib/testimonials.ts` | Testimonials and headline results |
| `src/lib/faq.ts` | FAQ on the contact page |

### Adding a team member's photo

1. Put the image in `public/images/team/` — a **square crop** works best.
2. In `src/lib/team.ts`, set `image: "/images/team/their-file.jpg"` and `placeholder: false`.

Members left as placeholders render a neutral monogram tile, so the grid never breaks while photos are outstanding.

### Replacing the testimonials

`src/lib/testimonials.ts` ships with one genuine quote and five placeholders. Each placeholder carries `placeholder: true`, which renders a visible **PLACEHOLDER** badge in development only. Replace the text and set the flag to `false`.

> **Before launch:** all five placeholder testimonials must be replaced with real quotes, and permission obtained — particularly where a student is under eighteen.

### Answers still to confirm

Several FAQ answers in `src/lib/faq.ts` are marked `needsConfirming: true`. These were written from the Academy's marketing material and should be checked with the Director before launch — they cover pricing, group sizes and the cancellation policy.

---

## Deployment (Vercel)

1. Push the repository to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new). Vercel detects Next.js automatically — no build configuration needed.
3. In **Settings → Environment Variables**, add the same three `NEXT_PUBLIC_EMAILJS_*` values. `.env.local` is gitignored and does **not** deploy with the code.
4. In **Settings → Domains**, add `testportalva.org` and `www.testportalva.org`, then set the DNS records Vercel gives you at your registrar.
5. Redeploy after adding the environment variables — they are baked in at build time.

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx          Fonts, metadata, JSON-LD, nav/footer/WhatsApp
│   ├── page.tsx            Home
│   ├── globals.css         Brand tokens (@theme) and base styles
│   ├── courses/            Subject catalogue
│   ├── about/              Story, values, team, credentials
│   ├── testimonials/       Feedback grid
│   ├── contact/            Enquiry form, contact details, map, FAQ
│   ├── privacy/            UK GDPR privacy notice
│   ├── terms/              Terms of use
│   ├── not-found.tsx       Branded 404
│   ├── sitemap.ts          /sitemap.xml
│   └── robots.ts           /robots.txt
├── components/
│   ├── Navbar · Footer · Logo · WhatsAppFab
│   ├── ContactForm · FAQ · TeamCard · CTABand
│   └── ui.tsx              Section, SectionHeading, Button, PageHeader, Stars
└── lib/                    All editable content (see above)
```

---

## Brand

Colours are taken from the Academy crest, not the earlier flyer — the crest is navy, burgundy and gold, with **no green**.

| Token | Hex | Use |
|---|---|---|
| `navy` | `#16244a` | Headers, hero, footer |
| `burgundy` | `#7c1420` | Primary calls to action, accents |
| `gold` | `#c9a227` | Highlights, stars, stats |
| `paper` / `cream` | `#f7f8fb` / `#fdfcf8` | Alternating section backgrounds |

Typography: **Playfair Display** for headings, **Inter** for body text, both self-hosted through `next/font`.

The crest is at `public/logo.png` (transparent) and `public/logo-solid.jpg` (cream background, used for social sharing previews). To replace the logo, swap those two files — nothing else needs changing.

---

## Accessibility and SEO

- Semantic landmarks, a skip-to-content link, and visible keyboard focus rings throughout
- All decorative images marked `aria-hidden`; team photos carry descriptive alt text
- `prefers-reduced-motion` respected — animations disable entirely
- Per-page titles and meta descriptions, canonical URLs, `sitemap.xml`, `robots.txt`
- JSON-LD `EducationalOrganization` structured data with the Academy's address and rating

---

## Pre-launch checklist

- [ ] EmailJS keys added locally **and** in Vercel, with a test enquiry received
- [ ] EmailJS allowed-domains locked to `testportalva.org`
- [ ] Real team photos, names and roles added
- [ ] Five placeholder testimonials replaced with real, permitted quotes
- [ ] FAQ answers marked `needsConfirming` verified with the Director
- [ ] Published claims (300+ students, 95% pass rate, 4.9/5) confirmed accurate
- [ ] Domain connected and HTTPS confirmed
- [ ] Checked on a real phone, not only a resized browser window
