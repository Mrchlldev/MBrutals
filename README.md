# MBrutals

MBrutals is a modern Neo Brutalist CSS framework for plain HTML. It provides layout primitives, utilities, expressive components, animated form controls and small vanilla JavaScript behaviors without requiring React, Vue or Next.js.

## v1.3.0

Highlights:
- Archivo Black + Space Grotesk and Syne + Poppins font modes
- tactile hover/press motion for buttons, cards and controls
- custom inputs, textarea, select, checkbox, radio, toggle and range styles
- left, right and top sidebar panels
- modal, dropdown, toast, tabs, accordion and carousel behavior
- 2-column card grid and horizontal card-list primitives
- responsive layout utilities
- dark theme variables and reduced-motion support
- minified CDN-ready files in `dist/`

## Quick start

```html
<link rel="stylesheet" href="mbrutals.min.css">
<script src="mbrutals.min.js"></script>
```

The font system is intentionally opt-in. Load the fonts you want from your preferred provider, then set `data-mb-font="archivo"` or `data-mb-font="syne"` on `<html>`.

Build distribution files with:

```bash
npm run build
```
