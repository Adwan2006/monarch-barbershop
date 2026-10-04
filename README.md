# MONARCH — Barber & Supply

A complete, buildless luxury barbershop website concept for **Yousef's portfolio**. Designed to demonstrate how a thoughtful business website can turn visitors into booking inquiries.

**Monarch is fictional.** Staff, testimonials, location, opening hours, and pricing are illustrative. Photography is AI-generated. This project does not represent an operating business and does not accept appointments, payments, or messages.

## Preview in seconds

Open `index.html` in any modern browser. All styles, scripts, and imagery are local; no installation or build is needed.

For an HTTP preview, open a terminal in this folder and run:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Visit **http://localhost:8000**. Press Ctrl+C to stop the server. Python is optional if you open the HTML file directly.

## What's included

- A bespoke wordmark, warm ivory/charcoal/brass palette, and editorial typography.
- Split hero, four services with pricing, brand story, three fictional barber profiles, image gallery, sample review carousel, booking call to action, illustrated location, hours, and FAQs.
- Responsive navigation and a persistent booking link on phones.
- Booking dialog that preserves service/barber choices, updates price and duration, and shows an explicitly unconfirmed demo preview.
- Gallery lightbox, keyboard-dismissable dialogs, focus restoration, skip link, visible focus states, native form labels, and reduced-motion support.
- Subtle scroll reveals and hover transitions; no autoplay or heavy animation framework.
- Locally served responsive WebP images, lazy loading below the hero, system fonts, and no runtime dependencies or tracking.
- Clear demo and privacy information; no personal data collection.

## Project structure

```text
monarch-barbershop/
├── index.html
├── README.md
├── ASSETS.md
├── QA.md
├── .gitignore
├── .nojekyll
└── assets/
    ├── favicon.svg
    ├── css/style.css
    ├── js/config.js
    ├── js/main.js
    └── images/            # 640px and 1440px WebP variants
```

## Optional integrations

Edit `assets/js/config.js`:

```js
window.MONARCH_CONFIG = Object.freeze({
  bookingUrl: 'https://your-public-booking-page.example',
  contactUrl: 'https://your-hosted-contact-form.example'
});
```

Replace the example URLs with your actual public URLs. Keep them empty to retain the local demo. Only HTTPS destinations are accepted.

- **Booksy / Square Appointments / Calendly:** paste the public booking page URL into `bookingUrl`. All booking actions then navigate to that provider. Date, time, availability, payment, and confirmation are handled there. The generic redirect does not forward the local service or barber selection; configure provider-specific deep links if desired.
- **Contact:** paste a hosted contact page or hosted form URL into `contactUrl`.
- **Formspree:** for an embedded form, create your own Formspree endpoint and replace the contact dialog's explanatory content with a labeled HTML form using `method="POST"` and the endpoint as `action`. Include name/email/message fields, required validation, privacy copy, and success/error handling. A raw Formspree submission endpoint is not a hosted contact page and should not be pasted into `contactUrl`.

No provider accounts or endpoints have been created. Never add private API keys to this static project. Before converting this to a real business website, replace all fictional content, obtain real testimonial permissions, update the demo/booking/privacy copy, and verify the provider flow end-to-end.

## Deploy

This folder is the deployable site root. There is no build command and no `dist` step.

### GitHub Pages

1. Create a GitHub repository and upload this folder's **contents** so `index.html` is at the repository root, including `assets` and `.nojekyll`.
2. In the repository's Pages settings, choose deployment from the main branch and the root folder.
3. Open the URL GitHub provides once deployment finishes.

All asset links are relative, so the site works under a repository subpath as well as a custom domain.

### Netlify

Upload this project folder using manual deployment. Alternatively, connect its repository, leave the build command empty, and use the repository root as the publish directory.

### Cloudflare Pages / other static hosts

Choose a static/no-framework project, no build command, and the project root as the output directory. Upload the same HTML, CSS, JavaScript, and asset files.

Once a public domain is known, set an absolute `og:image` URL and add canonical/`og:url` metadata in `index.html`. Test share previews after deployment. The bundled image is used as a relative placeholder until then. Do not add real-business structured data to this fictional portfolio demo.

## Customize

- Copy and sections: `index.html`.
- Colors, spacing, and breakpoints: CSS variables and media queries in `assets/css/style.css`.
- Booking prices/durations and sample reviews: `assets/js/main.js`; keep these synchronized with the visible menu.
- Business integrations: `assets/js/config.js`.
- Artwork provenance and generation prompts: `ASSETS.md`.

## Portfolio presentation

**Monarch — Luxury Barbershop Website**

A fictional business website designed to help prospective clients see how strong visual branding, clear service pricing, and prominent booking paths work together. Built with semantic HTML, responsive CSS, and vanilla JavaScript, with original AI-generated imagery and a complete local demo booking experience.

Suggested case-study structure: the client need → brand and design decisions → responsive experience → booking journey → implementation and performance. Describe this as a concept project; do not imply a paid engagement, real customers, measured conversion gains, or live booking integration.

## Verification

See `QA.md` for completed checks and the browser verification limitation. No published deployment or GitHub repository was created by this delivery.
