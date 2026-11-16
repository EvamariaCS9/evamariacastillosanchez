# Evamaria Castillo — portfolio

This repository contains the static portfolio website for Evamaria Castillo.
The CV content is sourced from `doc/Resume_CastilloEvamaria.pdf`.

## Local preview

Because the site is static, it can be opened directly in a browser. For a more
realistic local preview, serve the repository root with any static file server,
then open the local address it provides.

## Updating the website

- Update the relevant content in `index.html`.
- Adjust visual tokens and layout rules in `css/styles.css`.
- Keep `doc/Resume_CastilloEvamaria.pdf` in place so both download links continue
  to work.
- Use `js/script.js` only for progressive enhancement and small interactions.

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` deploys the repository root to
GitHub Pages after every push to `main`.

To enable it:

1. Push this project to `https://github.com/EvamariaCS9/evamariacastillosanchez`.
2. In the repository, open **Settings → Pages**.
3. Set the source to **GitHub Actions**.
4. Push to `main` and monitor the workflow under the **Actions** tab.

The custom domain is intentionally not configured yet. Once the domain is
available, add it under **Settings → Pages**, configure its DNS records with
the domain provider, and add a `CNAME` file containing the exact domain.

The email address, phone number, and downloadable CV are public website content.
