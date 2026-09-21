# Kanishka Singh portfolio (V1)

Static site. No build step, no dependencies, no JavaScript framework. Drop it in a GitHub Pages repo
and it works.

```
index.html                                  homepage
projects/relay.html                         deep project page
projects/multimodal-video-search.html       deep project page
styles/main.css                             the entire visual system
scripts/theme.js                            light/dark toggle (light is the default)
assets/favicon.svg
assets/kanishka.jpg                         ← you need to add this
Kanishka_Resume.pdf                         ← you need to add this
```

## Two files you must add before publishing

| File | What it is | Notes |
| --- | --- | --- |
| `assets/kanishka.jpg` | Homepage portrait | Roughly 4:5 portrait crop, ~600×750px, under 200 KB. Until it exists the page silently drops the portrait rather than showing a broken image. |
| `Kanishka_Resume.pdf` | Current resume, at the repo root | **Always keep this exact filename.** The resume link is defined once, in the intro of `index.html`, and carries the `download` attribute so clicking it saves the file rather than opening a viewer. To update your resume later, replace this file and change nothing else. |

## Deploying to GitHub Pages

This replaces the contents of `https://github.com/up-the-ladder/kanishka-portfolio`.

1. Copy these files into the repo root, replacing what is there now.
2. Add `Kanishka_Resume.pdf` at the root and `assets/kanishka.jpg`.
3. Commit and push to the default branch.
4. Settings, Pages, deploy from that branch, root folder.

The site is then live at `https://up-the-ladder.github.io/kanishka-portfolio/`, which is the URL set
in every canonical and Open Graph tag. Internal links are all relative, so they work from a
subdirectory without changes.

If you later move to a user site (`up-the-ladder.github.io`) or a custom domain, the only edits are
the absolute URLs in the three HTML files: `rel="canonical"`, `og:url`, `og:image`, and the `url`
field in the JSON-LD block.

## Editing

Content lives directly in the HTML rather than in a data file. For a site with this many entries that
is the faster thing to maintain: one file to open, no render step, and the page is fully crawlable
and readable with JavaScript off. If the project list grows past roughly fifteen entries, or once
there are many project pages sharing a header, it's worth moving to a small data file plus a build
step. Not yet.

**To add a project:** copy an existing `<article class="entry">` block inside the right `.group` and
edit it. Keep the shape: title, one-line positioning, one paragraph, `.stack` line, `.links` list.

**To add a project page:** copy `projects/relay.html`, replace the head metadata and the body. The
stylesheet already covers every element used there.

**Only list links that exist.** Every `.links` item points at a real URL; add `Demo`, `Report`, or
`Poster` entries as those artifacts appear.

## Design notes

- Layout is a two-column index: section label on the left, content on the right, collapsing to a
  single column below 46rem. Content creates the hierarchy; there are no cards.
- Background is white by default. Dark mode is opt-in through the toggle at the top of every page
  and is remembered in localStorage; the OS setting is deliberately not followed, so the site looks
  the same for everyone on first load.
- Type is a system serif for reading and a system sans for structure, with no web fonts, so the site
  renders instantly with no layout shift and no third-party requests.
- Palette is cool paper, slate ink, one deep blue for links. Dark mode follows the OS setting.
- Accessibility: skip link, semantic landmarks and heading order, visible focus rings, reduced-motion
  honoured, tap targets padded on mobile, descriptive link text.
- There is deliberately no navigation bar, no hero, no animation, and no Writing or News section.

## Not claimed on this site

Several performance numbers on the resume (Relay's throughput, worker count, p95 scheduling latency
and recovery time; IndexForge's corpus size, p95 latency, and throughput improvement) describe systems
the project descriptions call in-development. They're left off the site until they come from a
benchmark you can re-run. See `PORTFOLIO_SOURCE_OF_TRUTH.md` for the full list and where to reinstate
them.
