# Advocate Obaidullah Faruq (Sawgat) — Portfolio Website

A bilingual (English/Bengali), responsive React + Vite portfolio website.

## Included
- Home, Biography, Services, Contact, Legal Information, Privacy and Disclaimer views
- English/Bengali language switch
- Responsive mobile navigation
- Contact links for phone, WhatsApp, email, Facebook and Google Maps
- Chamber hours and address
- Basic SEO metadata, Open Graph tags and custom favicon
- Contact form connected to FormSubmit (requires one-time email activation)
- No domain name is required to deploy to Vercel; Vercel provides a free `*.vercel.app` URL.

## Requirements
- Node.js 18.18+ (Node.js 20 LTS recommended)
- Git
- GitHub account
- Vercel account

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite, usually http://localhost:5173.

## Create a production build
```bash
npm run build
npm run preview
```
Vite outputs the production site into `dist/`.

## Publish to GitHub
1. Create a new, empty GitHub repository.
2. Extract this ZIP file on your computer.
3. Open a terminal in the extracted project folder.
4. Run:
```bash
git init
git add .
git commit -m "Initial advocate portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```
Replace the remote URL with your own GitHub repository URL.

## Deploy on Vercel
1. Sign in to Vercel.
2. Select **Add New → Project**.
3. Import the GitHub repository you just created.
4. Vercel should detect Vite automatically.
5. Confirm these settings:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
6. Select **Deploy**.
7. Vercel will provide a live `*.vercel.app` address. You can connect your own domain later; no domain is needed now.
8. Future pushes to the GitHub `main` branch will trigger a new deployment automatically.

## Contact form setup — important
The contact form uses FormSubmit to deliver submissions to `advswagat@gmail.com`.
1. Deploy the website.
2. Open the Contact page on the live website and submit a test inquiry using an email address you can access.
3. FormSubmit will send an activation/confirmation email to `advswagat@gmail.com` the first time.
4. Open that email and activate the form.
5. Submit another test inquiry and confirm that it arrives in the inbox.

FormSubmit is a third-party service. Its delivery, spam filtering and privacy practices are separate from this website. If you prefer not to use a third-party form processor, replace the form integration with a backend or a provider such as EmailJS/Formspree. Do not put private API keys in frontend source code.

## Before publishing — review these items
- Add the advocate's approved professional photograph when available.
- Verify the Bengali and English wording, chamber address and opening hours.
- Confirm the contact form activation email is received.
- Confirm that the listed practice areas are accurate and that all published statements are approved.
- Add the final canonical website URL and matching social preview image when the domain is selected.
- Add a real legal-insights article before promoting the Legal Information section as a blog. The current page is an informational contact prompt, not a populated article archive.

## Important legal and content notes
- The site describes the advocate's stated practice in Bangladesh. It does not claim that he is authorized to practice law in every country.
- The website includes a general-information disclaimer and advises visitors not to submit confidential case details through the initial contact form.
- Graduation years and Bar Council enrollment year/number are intentionally omitted.
- No testimonials, case results, awards or unprovided credentials have been invented.

## Project structure
```text
advocate-obaidullah-faruq-sawgat/
├── index.html
├── package.json
├── README.md
├── public/
│   └── favicon.svg
└── src/
    ├── App.jsx
    ├── main.jsx
    └── styles.css
```
