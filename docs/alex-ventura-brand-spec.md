# Alex Ventura — Brand & Theme Spec

**Logo:** lowercase "av" monogram (B4) · **Palette:** Sunset Ember
**Purpose:** Build the logo, favicon set and web app theme from this single source of truth.

---

## 1. Color palette

### Core brand colors

| Token | Hex | Use |
|---|---|---|
| `ember-900` (Night) | `#1A1210` | Main dark background, icon tile, text on light |
| `ember-50` (Cream) | `#FFF4EC` | Main text and mark on dark |
| `ember-500` (Ember) | `#FF7A45` | Brand accent: the "v", primary buttons, highlights on dark |
| `ember-600` | `#D9531E` | Accent graphics on light backgrounds (icons, borders, large text ≥24px) |
| `ember-700` | `#C2410C` | Accent **text and links** on light backgrounds |

### Full ramp (for hovers, tints, charts)

| Step | Hex |
|---|---|
| 50 | `#FFF4EC` |
| 100 | `#FFE4D3` |
| 200 | `#FFC7A8` |
| 300 | `#FFA67D` |
| 400 | `#FF9466` |
| 500 | `#FF7A45` |
| 600 | `#D9531E` |
| 700 | `#C2410C` |
| 800 | `#7A2A0C` |
| 900 | `#1A1210` |

### Contrast checks (WCAG 2.1)

| Pair | Ratio | Result |
|---|---|---|
| `#FFF4EC` on `#1A1210` | ~17:1 | AAA text |
| `#FF7A45` on `#1A1210` | ~7.1:1 | AAA text |
| `#1A1210` on `#FF7A45` (button label) | ~7.1:1 | AAA text |
| `#C2410C` on `#FFFFFF` | ~5.2:1 | AA text |
| `#D9531E` on `#FFFFFF` | ~4.0:1 | **Graphics / large text only** — never body text or links |

> Rule: on light backgrounds, accent **text** is always `ember-700`. On dark backgrounds, accent text is `ember-500`.

---

## 2. Typography

| Role | Font | Weight | Notes |
|---|---|---|---|
| Wordmark & headings | Space Grotesk | 700 / 500 | Wordmark is always lowercase: `alex ventura` |
| Body | Inter | 400 / 500 | Fallback: `system-ui, sans-serif` |
| Labels, code, tags | JetBrains Mono | 500 | Uppercase labels use `letter-spacing: 0.12em` |

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet">
```

---

## 3. Logo

### 3.1 Construction (120 × 120 grid)

The mark is a geometric lowercase **a** whose stem becomes the left arm of the **v**.

| Part | Shape | Geometry | Color |
|---|---|---|---|
| a — bowl | circle | `cx=38 cy=60 r=22` | main |
| a — stem | line | `(60,38) → (60,82)` | main |
| v | polyline | `(60,38) → (80,82) → (100,38)` | accent |

- Stroke: `10` units at 120 grid (≈ 8.3% of the box), `round` caps and joins.
- The v starts exactly at the top of the a's stem — this shared point is the core idea; never separate them.
- Visual bounds: x 11–105, y 33–87 (stroke included).

### 3.2 Stroke weight by rendered size

Thin strokes vanish at small sizes, so the stroke grows as the icon shrinks:

| Rendered size | Stroke (120 grid) |
|---|---|
| ≥ 96 px | 10 |
| 48–95 px | 11 |
| 32–47 px | 13 |
| 16–31 px | 16 |

### 3.3 Master SVG — mark on dark (`logo-mark-dark.svg`)

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" role="img" aria-label="Alex Ventura">
  <circle cx="38" cy="60" r="22" fill="none" stroke="#FFF4EC" stroke-width="10"/>
  <path d="M60 38 L60 82" fill="none" stroke="#FFF4EC" stroke-width="10" stroke-linecap="round"/>
  <path d="M60 38 L80 82 L100 38" fill="none" stroke="#FF7A45" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

### 3.4 Mark on light (`logo-mark-light.svg`)

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" role="img" aria-label="Alex Ventura">
  <circle cx="38" cy="60" r="22" fill="none" stroke="#1A1210" stroke-width="10"/>
  <path d="M60 38 L60 82" fill="none" stroke="#1A1210" stroke-width="10" stroke-linecap="round"/>
  <path d="M60 38 L80 82 L100 38" fill="none" stroke="#D9531E" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

### 3.5 Theme-aware mark (inline in the web app)

Use `currentColor` for the a and a CSS variable for the v, so the logo follows the theme automatically:

```html
<svg class="logo-mark" viewBox="0 0 120 120" role="img" aria-label="Alex Ventura">
  <circle cx="38" cy="60" r="22" fill="none" stroke="currentColor" stroke-width="10"/>
  <path d="M60 38 L60 82" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
  <path d="M60 38 L80 82 L100 38" fill="none" stroke="var(--color-brand-graphic)" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

```css
.logo-mark { width: 40px; height: 40px; color: var(--color-text); }
```

### 3.6 Lockups

| Lockup | Layout | Specs |
|---|---|---|
| Horizontal (header) | mark + `alex ventura` | Mark height = 1.7 × wordmark cap height; gap = 0.3 × mark height |
| Stacked (hero, OG image) | mark above wordmark, centered | Gap = 0.15 × mark height; optional `SOFTWARE ENGINEER` label in JetBrains Mono 12–14px, `letter-spacing: 0.2em`, muted color |
| Mark only | icon | Favicon, app icon, avatar |

Example header lockup:

```html
<a href="/" class="brand" aria-label="Alex Ventura — home">
  <!-- theme-aware svg from 3.5 -->
  <span class="brand-word">alex ventura</span>
</a>
```

```css
.brand { display: inline-flex; align-items: center; gap: 12px; text-decoration: none; color: var(--color-text); }
.brand-word { font: 700 22px/1 "Space Grotesk", system-ui, sans-serif; letter-spacing: 0.02em; }
```

### 3.7 Clear space & minimum size

- Clear space on all sides: **20 units** of the 120 grid (≈ the width of two strokes).
- Minimum size: mark **16 px**; horizontal lockup **120 px** wide.

### 3.8 Don'ts

- Don't change the v to any color other than the Ember accent (or single-color versions below).
- Don't separate the v from the a's stem, rotate, stretch, outline or add shadows/gradients.
- Don't use `ember-500` for the v on white — use `ember-600`.
- Single-color versions are allowed only when color isn't available: all `#1A1210`, or all `#FFF4EC`.

---

## 4. Favicon & app icons

### 4.1 Icon tile

All app icons use the mark centered on a Night tile:

- Background: `#1A1210`
- Corner radius: 22% of the size (the OS masks native icons; keep square for those)
- Mark scale: mark bounds fill ~75% of the tile (use the 120 grid as-is inside the tile)
- Stroke per table in 3.2

### 4.2 `favicon.svg` (modern browsers)

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
  <rect width="120" height="120" rx="26" fill="#1A1210"/>
  <circle cx="38" cy="60" r="22" fill="none" stroke="#FFF4EC" stroke-width="16"/>
  <path d="M60 38 L60 82" fill="none" stroke="#FFF4EC" stroke-width="16" stroke-linecap="round"/>
  <path d="M60 38 L80 82 L100 38" fill="none" stroke="#FF7A45" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

### 4.3 Files to generate

| File | Size | Source | Notes |
|---|---|---|---|
| `favicon.ico` | 16, 32, 48 (multi-size) | favicon.svg | Stroke 16 |
| `favicon.svg` | vector | 4.2 | Primary favicon |
| `apple-touch-icon.png` | 180 × 180 | tile, **square corners** | iOS rounds it |
| `icon-192.png` | 192 × 192 | tile | PWA |
| `icon-512.png` | 512 × 512 | tile | PWA |
| `icon-maskable-512.png` | 512 × 512 | full-bleed Night bg, mark inside the center 80% safe zone | PWA maskable |
| `og-image.png` | 1200 × 630 | stacked lockup on `#1A1210` | Social sharing |

### 4.4 Generate with the command line

```bash
# requires librsvg + ImageMagick
rsvg-convert -w 180 -h 180 icon-square.svg  > apple-touch-icon.png
rsvg-convert -w 192 -h 192 favicon.svg      > icon-192.png
rsvg-convert -w 512 -h 512 favicon.svg      > icon-512.png
rsvg-convert -w 512 -h 512 icon-maskable.svg > icon-maskable-512.png
for s in 16 32 48; do rsvg-convert -w $s -h $s favicon.svg > fav-$s.png; done
magick fav-16.png fav-32.png fav-48.png favicon.ico
```

`icon-square.svg` = favicon.svg with `rx="0"` and stroke `10`.
`icon-maskable.svg` = `rx="0"`, mark wrapped in `<g transform="translate(12 12) scale(0.8)">`.

### 4.5 HTML `<head>`

```html
<link rel="icon" href="/favicon.ico" sizes="48x48">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="theme-color" content="#1A1210">
<meta property="og:image" content="/og-image.png">
```

### 4.6 `site.webmanifest`

```json
{
  "name": "Alex Ventura — Software Engineer",
  "short_name": "alex ventura",
  "icons": [
    { "src": "/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icon-512.png", "sizes": "512x512", "type": "image/png" },
    { "src": "/icon-maskable-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable" }
  ],
  "theme_color": "#1A1210",
  "background_color": "#1A1210",
  "display": "standalone"
}
```

### 4.7 Android adaptive icon (for your Android apps)

- Canvas 108 × 108 dp; keep the mark inside the center **66 dp** safe zone.
- `ic_launcher_background`: solid `#1A1210`.
- `ic_launcher_foreground`: the mark (vector drawable from the master SVG), stroke 10.
- `ic_launcher_monochrome` (Android 13 themed icons): mark in a single color.

---

## 5. Web app theme

Dark is the default (it matches the logo); light is supported.

### 5.1 Design tokens (CSS variables)

```css
:root,
:root[data-theme="dark"] {
  /* Surfaces */
  --color-bg:            #1A1210;
  --color-surface:       #241915;
  --color-surface-2:     #2E211C;
  --color-border:        #3A2B24;

  /* Text */
  --color-text:          #FFF4EC;
  --color-text-muted:    #A8968A;

  /* Brand */
  --color-brand:         #FF7A45; /* buttons, highlights */
  --color-brand-hover:   #FF9466;
  --color-brand-text:    #FF7A45; /* links, accent text */
  --color-brand-graphic: #FF7A45; /* logo v, icons */
  --color-on-brand:      #1A1210; /* text on brand buttons */
  --color-brand-soft:    rgba(255, 122, 69, 0.14); /* tags, selected rows */

  /* Feedback */
  --color-success: #3DD68C;
  --color-warning: #F5B83D;
  --color-danger:  #FF6369;
  --color-info:    #5EB1EF;

  --color-focus-ring: #FF9466;
}

:root[data-theme="light"] {
  --color-bg:            #FFFAF6;
  --color-surface:       #FFFFFF;
  --color-surface-2:     #FFF4EC;
  --color-border:        #EADBD0;

  --color-text:          #1A1210;
  --color-text-muted:    #6B5A50;

  --color-brand:         #FF7A45;
  --color-brand-hover:   #F0652E;
  --color-brand-text:    #C2410C;
  --color-brand-graphic: #D9531E;
  --color-on-brand:      #1A1210;
  --color-brand-soft:    #FFE4D3;

  --color-success: #18794E;
  --color-warning: #AD5700;
  --color-danger:  #CE2C31;
  --color-info:    #0B68CB;

  --color-focus-ring: #C2410C;
}

@media (prefers-color-scheme: light) {
  :root:not([data-theme="dark"]) {
    /* same values as [data-theme="light"] */
  }
}

:root {
  --font-display: "Space Grotesk", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;

  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-full: 999px;

  --space-1: 4px;  --space-2: 8px;  --space-3: 12px; --space-4: 16px;
  --space-6: 24px; --space-8: 32px; --space-12: 48px; --space-16: 64px;

  --shadow-sm: 0 1px 2px rgba(26, 18, 16, 0.08);
  --shadow-md: 0 8px 24px rgba(26, 18, 16, 0.12);
}

body {
  background: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-body);
}
```

### 5.2 Type scale

| Token | Size / line height | Font | Weight |
|---|---|---|---|
| `display` | 56 / 1.05 | display | 700 |
| `h1` | 40 / 1.1 | display | 700 |
| `h2` | 30 / 1.2 | display | 700 |
| `h3` | 22 / 1.3 | display | 500 |
| `body` | 16 / 1.6 | body | 400 |
| `small` | 14 / 1.5 | body | 400 |
| `label` | 12 / 1.4, uppercase, `0.12em` | mono | 500 |
| `code` | 14 / 1.6 | mono | 500 |

### 5.3 Components

| Component | Spec |
|---|---|
| **Primary button** | bg `--color-brand`, text `--color-on-brand`, radius `--radius-md`, padding `12px 20px`, font 600 15px; hover `--color-brand-hover`; min height 44px |
| **Secondary button** | transparent bg, 1px `--color-border`, text `--color-text`; hover bg `--color-surface-2` |
| **Ghost / text button** | text `--color-brand-text`, no border; hover underline |
| **Link** | `--color-brand-text`, underline offset 3px; hover `#FF9466` (dark) / `#9A3412` (light) |
| **Focus ring** (all interactive) | `outline: 2px solid var(--color-focus-ring); outline-offset: 2px;` |
| **Input / textarea** | bg `--color-surface`, 1px `--color-border`, radius `--radius-md`, height 44px; focus border `--color-brand` + focus ring; label above in `small` muted |
| **Card** (project card) | bg `--color-surface`, 1px `--color-border`, radius `--radius-lg`, padding `--space-6`; hover border `--color-brand` at 50% and `--shadow-md` |
| **Tag / chip** (tech stack: Kotlin, Node, Postgres…) | bg `--color-brand-soft`, text `--color-brand-text`, font `label`, radius `--radius-full`, padding `4px 10px` |
| **Navbar** | bg `--color-bg` at 85% opacity + `backdrop-filter: blur(12px)`, bottom 1px `--color-border`; horizontal lockup left; active link gets a 2px `--color-brand` underline |
| **Section label** | `label` style, color `--color-brand-text`, e.g. `// PROJECTS` |
| **Code block** | bg `--color-surface-2`, radius `--radius-md`, font `code`; keywords `--color-brand-text` |
| **Timeline / experience** | 2px `--color-border` line, dots `--color-brand` |
| **Footer** | bg `--color-surface`, muted text, mark-only logo at 32px |
| **Selection** | `::selection { background: var(--color-brand-soft); color: var(--color-text); }` |

### 5.4 Tailwind config (optional)

```js
// tailwind.config.js
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        ember: {
          50: "#FFF4EC", 100: "#FFE4D3", 200: "#FFC7A8", 300: "#FFA67D", 400: "#FF9466",
          500: "#FF7A45", 600: "#D9531E", 700: "#C2410C", 800: "#7A2A0C", 900: "#1A1210",
        },
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        "surface-2": "var(--color-surface-2)",
        border: "var(--color-border)",
        text: "var(--color-text)",
        muted: "var(--color-text-muted)",
        brand: "var(--color-brand)",
        "brand-text": "var(--color-brand-text)",
        "on-brand": "var(--color-on-brand)",
      },
      fontFamily: {
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      borderRadius: { md: "10px", lg: "16px" },
    },
  },
};
```

### 5.5 Theme switch (minimal)

```js
const root = document.documentElement;
const saved = localStorage.getItem("theme");
if (saved) root.dataset.theme = saved;

function toggleTheme() {
  const next = root.dataset.theme === "light" ? "dark" : "light";
  root.dataset.theme = next;
  localStorage.setItem("theme", next);
  document.querySelector('meta[name="theme-color"]')
    .setAttribute("content", next === "light" ? "#FFFAF6" : "#1A1210");
}
```

---

## 6. Checklist

- [ ] Export `logo-mark-dark.svg`, `logo-mark-light.svg`, horizontal and stacked lockups
- [ ] Generate favicon set (4.3) and add `<head>` tags (4.5)
- [ ] Add `site.webmanifest` (4.6)
- [ ] Add CSS tokens (5.1) and fonts (2)
- [ ] Replace header/footer logo with the theme-aware SVG (3.5)
- [ ] Restyle buttons, links, inputs, cards, tags per 5.3
- [ ] Verify contrast in both themes and focus rings with keyboard navigation
- [ ] Create `og-image.png` and test the link preview
