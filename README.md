# ramesh-kathariya.github.io

Personal site, built with Jekyll and hosted on GitHub Pages.

## Structure

```
_config.yml       site settings, nav, social links
_layouts/         default.html — shared page shell
_includes/        nav.html, footer.html
assets/css/       style.css — the whole visual design
index.md          Home
about.md          About
research.md       Publications + in-progress work
field.md          Fieldwork / iNaturalist
```

## Deploying

1. Copy all files in this folder into the root of your
   `ramesh-kathariya.github.io` repo (replacing the old `index.html`,
   `style.css`, `profile.png` — see note on the image below).
2. Commit and push to the `main` branch.
3. In the repo's **Settings → Pages**, make sure the source is set to
   "Deploy from a branch" → `main` → `/ (root)`. GitHub Pages will run
   the Jekyll build automatically — no GitHub Actions workflow needed.
4. The site will be live at `https://ramesh-kathariya.github.io/`
   within a minute or two of pushing.

## Before you push

- **Profile photo**: this build doesn't include an image. Add your
  photo to `assets/img/` and reference it from `index.md` or
  `about.md` (e.g. `![Ramesh Kathariya]({{ '/assets/img/profile.jpg' | relative_url }})`).
- **"In progress" publications** on the Research page use working
  titles from your own notes — check the wording before it goes
  live, since these aren't public/published yet.
- **Canonical URL**: your old `index.html` had a canonical tag
  pointing to `rameshkathariya.github.io` (no hyphen). This build
  assumes `ramesh-kathariya.github.io` (with hyphen) is the real
  domain, matching the repo name you gave me — double check that's
  actually correct before publishing.

## Local preview (optional)

If you have Ruby installed:

```bash
bundle install
bundle exec jekyll serve
```

Then open `http://localhost:4000`.
