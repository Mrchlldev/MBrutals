# MBrutals v1.5.0

MBrutals is a modern Neo Brutalist CSS framework for plain HTML. It focuses on tactile interfaces, bold typography, custom controls, expressive surfaces, and small vanilla-JS interactions.

## Quick start

```html
<link rel="stylesheet" href="mbrutals.min.css">
<script src="mbrutals.min.js"></script>
```

The stylesheet can also be used by itself. JavaScript is only needed for interactive components such as modal, sidebar, offcanvas, dropdown, tabs, accordion, toast, carousel, and navbar behavior.

## Font styles

Default: Archivo Black for headings and Space Grotesk for body text.

Alternative:

```html
<html data-mb-font="syne">
```

This switches headings to Syne and body text to Poppins.

## Theme

```html
<html data-mb-theme="dark">
```

## Included

- Responsive containers, grid, row/columns and utilities
- Neo Brutalist buttons with tactile hover/press states
- Cards, grid cards and list cards
- Fully custom input, select, textarea, checkbox, radio, switch and range controls
- Navbar and responsive mobile navigation
- Left/right sidebars and top/bottom offcanvas panels
- Modal
- Dropdown
- Tabs
- Accordion
- Toast API
- Carousel
- Alerts, badges, progress, avatar, spinner and skeleton
- Breadcrumb, pagination, steps, pricing and table primitives
- Motion utilities and reduced-motion support
- CDN-friendly `dist/` build

## JS API

```js
MBrutals.toast('Saved!', { type: 'success', title: 'Done' });
MBrutals.openModal(document.querySelector('#myModal'));
MBrutals.closeModal(document.querySelector('#myModal'));
MBrutals.openPanel(document.querySelector('#mySidebar'));
MBrutals.closePanel(document.querySelector('#mySidebar'));
```

## License

MIT

## Documentation

Run `npm install` then `npm start`. The demo is available at `/`, documentation at `/docs`, and each component at `/components/<name>`.
