# MBrutals

MBrutals is a framework-agnostic Neo Brutalism UI library for plain HTML, CSS and optional vanilla JavaScript. It is designed as a Bootstrap-style drop-in framework: one stylesheet, semantic classes, responsive utilities, layout helpers and interactive components.

## Quick start

```html
<link rel="stylesheet" href="https://your-cdn.example.com/mbrutals/0.1.0/mbrutals.min.css">
<script src="https://your-cdn.example.com/mbrutals/0.1.0/mbrutals.min.js" defer></script>
```

JavaScript is optional. CSS-only components such as cards, alerts, buttons, forms, grids and badges work without it. Interactive components such as modal, dropdown, accordion, tabs, toast, offcanvas and carousel use `mbrutals.js`.

## Design language

MBrutals uses thick dark outlines, hard offset shadows, high-contrast pastel surfaces, confident typography and compact rounded geometry. The default palette can be changed through CSS variables.

## Main classes

- Layout: `.mb-container`, `.mb-row`, `.mb-col-*`, `.mb-stack`, `.mb-cluster`, `.mb-grid-*`
- Components: `.mb-btn`, `.mb-card`, `.mb-alert`, `.mb-badge`, `.mb-navbar`, `.mb-hero`, `.mb-input`, `.mb-select`, `.mb-textarea`, `.mb-table`, `.mb-tabs`, `.mb-accordion`, `.mb-modal`, `.mb-dropdown`, `.mb-toast`, `.mb-offcanvas`, `.mb-carousel`
- Utilities: spacing, display, flex, grid, sizing, positioning, typography, colors, borders, shadows and responsive visibility.
- Theme variables: `--mb-primary`, `--mb-secondary`, `--mb-accent`, `--mb-success`, `--mb-warning`, `--mb-danger`, `--mb-info`, `--mb-surface`, `--mb-ink`, `--mb-shadow`.

## Data API

Interactive components use attributes instead of a framework:

```html
<button class="mb-btn mb-btn-primary" data-mb-toggle="modal" data-mb-target="#myModal">Open</button>

<div class="mb-modal" id="myModal" aria-hidden="true">
  <div class="mb-modal-dialog">
    <div class="mb-modal-content">
      <button class="mb-modal-close" data-mb-dismiss="modal" aria-label="Close">×</button>
      <h3>Neo modal</h3>
      <p>Hello from MBrutals.</p>
    </div>
  </div>
</div>
```

## CDN

The `dist/` directory contains the files intended for direct hosting:

- `mbrutals.css`
- `mbrutals.min.css`
- `mbrutals.js`
- `mbrutals.min.js`

## Scope

This first release is intentionally framework-independent. No React, Tailwind, TypeScript, Sass or build step is required for consumers.
