# EmailJS Template Setup

The template currently saved in EmailJS is the default starter (`{{name}}`, `{{email}}`, `{{title}}`). It does **not** match the fields this website sends, and it omits four of them entirely. Replace its contents with the values below.

**Template:** Contact Us (`oxj8iij`)

---

## Variables the website actually sends

| Variable | Contains |
|---|---|
| `{{from_name}}` | Sender's name |
| `{{from_email}}` | Sender's email address |
| `{{phone}}` | Phone / WhatsApp (may be blank) |
| `{{enquiry_type}}` | Free trial / general / pricing / other |
| `{{year_group}}` | Student's year group (may be blank) |
| `{{subjects_list}}` | Subjects ticked, comma-separated |
| `{{message}}` | The message body |
| `{{time}}` | When the enquiry was submitted |

There is no `{{name}}`, `{{email}}` or `{{title}}` — those were the starter template's names.

> `{{subjects_list}}` is a hidden field the form fills in on submit. The visible checkboxes all share the name `subjects`, and EmailJS does not reliably collect repeated field names, so they are flattened into one value first. Use `subjects_list` in the template, **not** `subjects`.

---

## 1. Subject

Replace `Contact Us: {{title}}` with:

```
New enquiry ({{enquiry_type}}) — {{from_name}}
```

This puts the enquiry type in the inbox list, so trial bookings are visible without opening the email.

## 2. From Name

Replace `{{name}}` with:

```
{{from_name}}
```

## 3. Reply To

Replace `{{email}}` with:

```
{{from_email}}
```

This matters — it means hitting Reply goes straight back to the parent.

## 4. Content

Click **Edit Content**, delete what is there, and paste:

```
New website enquiry

Received:    {{time}}
Enquiry:     {{enquiry_type}}

CONTACT
Name:        {{from_name}}
Email:       {{from_email}}
Phone:       {{phone}}

STUDENT
Year group:  {{year_group}}
Subjects:    {{subjects_list}}

MESSAGE
{{message}}

---
Sent from the enquiry form at testportalva.org
```

## 5. Save

Click **Save**, then use **Test It** to send yourself a sample before testing from the website.

---

## Also worth changing

**To Email** is currently `testportalvab@gmail.com`. That works, but once the Zoho mailboxes are live, change it to `info@testportalva.org` so enquiries land in the Academy's own inbox rather than a personal Gmail.

**Lock the allowed domain.** Go to **Account → Security → Allowed Domains** and add `testportalva.org` (plus `localhost` while developing). The public key is visible in the browser bundle by design; this stops anyone else sending through your 200/month quota.

---

## Testing the form end to end

```bash
npm run dev
```

Then open <http://localhost:3000/contact> and send a real enquiry.

- The amber "form not connected" banner should be **gone** — if it is still showing, the dev server was not restarted after `.env.local` changed.
- Tick two or three subjects so you can confirm `{{subjects_list}}` arrives as a comma-separated list.
- Check the email lands, and that pressing **Reply** addresses the sender, not yourself.
- Try submitting twice in a row — the second should be blocked for 30 seconds. That is the spam throttle working, not a bug.
