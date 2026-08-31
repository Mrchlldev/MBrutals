# MBrutals

**MBrutals** is a framework-agnostic CSS UI library for plain HTML, inspired by modern Neo Brutalist web design.

It is designed around bold typography, thick outlines, offset hard shadows, pastel surfaces, expressive cards, and responsive layouts — without requiring React, Next.js, Tailwind, or any frontend framework.

## Quick start

```html
<link rel="stylesheet" href="mbrutals.css">
<script src="mbrutals.js"></script>

<button class="mb-btn mb-btn-blue">Hello MBrutals</button>
```

For CDN usage, publish the files inside `dist/` and use `mbrutals.min.css` and `mbrutals.min.js`.

## Included

- Responsive containers and grid utilities
- Typography and spacing utilities
- Neo Brutalist buttons, badges, chips, cards and callouts
- Navbar and mobile navigation
- Forms, inputs, select, textarea, checkbox, radio and switch
- Alerts, progress, spinner and skeleton
- Dropdown, modal and offcanvas
- Accordion and tabs
- Tables, breadcrumb and pagination
- Lists, avatars and stats
- Toast notifications
- Tooltips
- Carousel
- Code blocks, empty states and file cards
- Steps and timeline
- Pricing cards
- Marquee
- Dark theme variables
- Reduced-motion support

## JavaScript

MBrutals uses vanilla JavaScript only. Interactive components use `data-mb-*` attributes.

Examples:

```html
<button class="mb-btn" data-mb-toggle="modal" data-mb-target="#demoModal">
  Open Modal
</button>
```

```html
<button class="mb-btn" data-mb-copy="Hello MBrutals">
  Copy
</button>
```

Programmatic API:

```js
MBrutals.toast('Saved successfully', {
  type: 'success',
  title: 'Success'
});
```

## Theme

Add `data-mb-theme="dark"` to the root element to activate the built-in dark theme variables.

## Browser support

MBrutals targets modern browsers with standard CSS and vanilla JavaScript APIs.

## License

MIT
