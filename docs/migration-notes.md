# Migration Notes

## Current Pages Detected

- `legacy-site/index.html`
  - Single-page marketing site using anchor navigation for `#home`, `#about`, `#products`, `#services`, and `#contact`
  - Additional content sections present without top-level nav entries: testimonials and footer

## Current Assets Detected

- Local files
  - `legacy-site/css/style.css`
  - `legacy-site/js/script.js` (currently empty)
- Directories
  - `legacy-site/assets/`
  - `legacy-site/assets/images/` (currently empty)
- External assets / dependencies
  - Font Awesome CDN stylesheet: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css`
- Embedded assets
  - Inline SVG background used in CSS via `data:image/svg+xml` in the hero section background

## Inline Scripts/Styles Detected

- Inline scripts
  - None detected
- Inline `<style>` blocks
  - None detected
- Inline style attributes
  - Five `style=""` attributes on floating hero icons for positional placement:
    - `top: 15%; left: 10%;`
    - `top: 25%; right: 15%;`
    - `bottom: 30%; left: 8%;`
    - `top: 60%; right: 12%;`
    - `bottom: 20%; right: 20%;`

## Potential Reusable Sections/Components

- `Header` / `Navbar`
- `Hero`
  - badge
  - CTA button group
  - feature badges
  - stats cards
  - floating decorative icons/shapes
- `SectionHeader`
- `About`
  - feature list item
- `Products`
  - reusable product card
- `Services`
  - reusable service card
- `Testimonials`
  - reusable testimonial card
- `Contact`
  - contact info item
  - social links
  - inquiry form
- `Footer`

## SEO-Related Elements Currently Present

- Present
  - `<!DOCTYPE html>`
  - `<html lang="en">`
  - `<meta charset="UTF-8">`
  - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
  - `<title>Ajjoria Shoppe - Premium Corporate Gifting Solutions</title>`
  - Clear visible heading hierarchy with one main `<h1>`
- Missing or weak
  - No meta description
  - No canonical URL
  - No Open Graph or Twitter card tags
  - No favicon references
  - No schema.org structured data
  - No sitemap or robots configuration in repo root
  - Single-page anchor navigation limits page-level SEO targeting

## Broken or Inconsistent Naming Patterns

- Repository/file structure
  - Mixed naming intent: brand uses `Ajjoria Shoppe`, but folders/files are generic (`css`, `js`, `assets`, `style.css`, `script.js`)
- Content/data quality
  - Hero badge text shows encoding corruption: `âœ¨ India's #1 Corporate Gifting Partner`
  - Hero stat values are inconsistent with their `data-target` attributes:
    - `data-target="500"` displays `16B`
    - `data-target="1000"` displays `10000`
    - `data-target="50"` displays `37`
  - Testimonial names/titles appear placeholder or unrealistic for production content
  - `Reliance ltd.` and similar labels mix capitalization styles
- CSS class naming
  - Generally consistent kebab-case, but class naming mixes semantic (`about-content`) and presentation-oriented (`shape-1`, `shape-2`) patterns
- Navigation/content structure
  - Top nav omits the testimonials section even though it is a major homepage block

## Notes For Next.js Migration

- The current site is effectively one landing page and is a good candidate for an App Router homepage at `app/page.tsx`.
- Most sections can become isolated server components with small client-only islands for animation or interactivity if needed.
- External CDN dependencies and inline positioning styles should be reviewed before componentization.
