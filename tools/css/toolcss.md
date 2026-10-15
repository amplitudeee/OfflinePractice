# CSS Notes

## Contents

- [Core Web Context](#core-web-context)
- [Language Structure](#language-structure)
- [Connecting CSS to HTML](#connecting-css-to-html)
- [Basic Rule Syntax](#basic-rule-syntax)
- [Background Styles](#background-styles)
- [Borders](#borders)
  - [Border Properties](#border-properties)
  - [Border Styles](#border-styles)
- [Text and Color Styling](#text-and-color-styling)
- [Selectors](#selectors)
  - [Type Selectors](#type-selectors)
  - [Grouping Selectors](#grouping-selectors)
  - [Class Selectors](#class-selectors)
  - [Descendant Selectors](#descendant-selectors)
  - [Adjacent Sibling Selectors](#adjacent-sibling-selectors)
  - [Pseudo-classes](#pseudo-classes)
- [Layout Basics](#layout-basics)
- [Frontend Stack Overview](#frontend-stack-overview)

## Core Web Context

- `CSS` stands for Cascading Style Sheets.
- CSS controls how HTML elements look on the page.
- CSS can define colors, spacing, borders, positioning, and layout.
- The browser reads HTML for structure and CSS for presentation.

## Language Structure

```text
CSS Stylesheet
    Selector
        Property
            Value
```

Example structure:

```css
selector {
  property: value;
}
```

## Connecting CSS to HTML

- Use a `<link>` element inside the HTML `<head>` to attach a stylesheet.
- A stylesheet can be local or loaded from an external URL.

Example syntax:

```html
<link rel="stylesheet" href="./style.css" />
<link rel="stylesheet" href="https://www.w3schools.com/html/styles.css" />
```

## Basic Rule Syntax

- A CSS rule starts with a selector.
- The selector is followed by braces `{}`.
- Inside the braces, each declaration uses `property: value;`.
- End each declaration with a semicolon.

Example syntax:

```css
p {
  color: red;
  font-family: sans-serif;
}
```

## Background Styles

- `background-image` adds an image behind an element.
- `background-repeat` controls whether the image repeats.
- `background-position` sets where the image starts.

Example syntax:

```css
body {
  background-image: url("snow.jpg");
  background-repeat: no-repeat;
  background-position: right top;
}
```

## Borders

### Border Properties

- `border-style` defines the line style.
- `border-width` sets border thickness.
- `border-color` sets the border color.
- `border-top-style`, `border-right-style`, `border-bottom-style`, and `border-left-style` control each side individually.
- `border` is shorthand for width, style, and color.
- `border-radius` rounds the corners.

Example syntax:

```css
p {
  border-style: dotted;
  border-width: 25px 10px 4px 35px;
  border-color: red green blue yellow;
  border: 5px solid red;
  border-radius: 5px;
}
```

Other examples:

```css
p {
  border-width: 25px 10px;
  border-color: #ff0000;
}

p {
  border-color: rgb(255, 0, 0);
}
```

### Border Styles

- `dotted`: dotted border.
- `dashed`: dashed border.
- `solid`: solid border.
- `double`: double border.
- `groove`: 3D grooved effect.
- `ridge`: 3D ridged effect.
- `inset`: 3D inset effect.
- `outset`: 3D outset effect.
- `none`: no border.
- `hidden`: hidden border.

## Text and Color Styling

- `font-family` changes the font.
- `color` changes text color.
- `background-color` changes the background behind an element.

Example syntax:

```css
p {
  font-family: sans-serif;
  color: red;
}

li {
  background-color: greenyellow;
  border: 1px solid black;
  margin-bottom: 5px;
}
```

## Selectors

### Type Selectors

- A type selector targets every HTML element of a given tag name.

Example syntax:

```css
p {
  color: red;
}

li {
  background-color: greenyellow;
}
```

### Grouping Selectors

- Separate selectors with commas to apply the same declarations to multiple elements.

Example syntax:

```css
p,
li {
  color: black;
}
```

### Class Selectors

- Use a class selector when you want to style only elements with a specific class name.
- In HTML, class names are written with the `class` attribute.
- In CSS, classes begin with a period `.`.

Example syntax:

```html
<li class="special">Item two</li>
```

```css
.special {
  color: orange;
  font-weight: bold;
}
```

### Descendant Selectors

- A descendant selector targets an element nested inside another element.
- Write a space between the outer selector and the inner selector.

Example syntax:

```css
li em {
  color: rebeccapurple;
}
```

## Adjacent Sibling Selectors

- The `+` selector targets an element that comes immediately after another element.

Example syntax:

```css
h1 + p {
  font-size: 200%;
}
```

### Pseudo-classes

- Pseudo-classes style an element based on its state.
- Common link pseudo-classes are `:link`, `:visited`, and `:hover`.

Example syntax:

```css
a:link {
  color: pink;
}

a:visited {
  color: green;
}

a:hover {
  text-decoration: none;
}
```

## Layout Basics

- `display: flex` places items on a flexible row or column.
- `list-style-type: none` removes bullet points.
- `padding: 0` removes inner spacing.

Example syntax:

```css
ul {
  display: flex;
  list-style-type: none;
  padding: 0;
}
```

## Frontend Stack Overview

```text
Front-end
    HTML, CSS, JavaScript
Back-end
    Node.js, .NET, PHP, Python, or another server-side language
Database
    MySQL, Postgres, MongoDB, or another database system
Web server
    A custom server, Apache, or a hosting service such as Netlify
```

## Set alt text in a div

```
  <div class="banana" role="img" aria-label="A wrapped present.">
```

# CSS Flexbox Cheat Sheet & Nuances

## 1. Container Properties (Parent)

Apply these to the parent element (`display: flex;`).

- **`display: flex | inline-flex;`** — Establishes a flex container.
- **`flex-direction: row | row-reverse | column | column-reverse;`** — Sets the main axis direction.
- **`flex-wrap: nowrap | wrap | wrap-reverse;`** — Controls whether items wrap onto multiple lines.
- **`flex-flow: <flex-direction> <flex-wrap>;`** — Shorthand for direction and wrap.
- **`justify-content:`** — Aligns items along the **Main Axis**.
  - `flex-start` (default) | `flex-end` | `center`
  - `space-between` (first item start, last item end, equal space between)
  - `space-around` (equal space around items)
  - `space-evenly` (equal space between and around items)
- **`align-items:`** — Aligns items along the **Cross Axis** (per line).
  - `stretch` (default) | `flex-start` | `flex-end` | `center` | `baseline`
- **`align-content:`** — Aligns multiple flex **lines** along the cross axis (no effect on single-line wraps).
  - `stretch` | `flex-start` | `flex-end` | `center` | `space-between` | `space-around`
- **`gap: <length>;`** (or `row-gap`, `column-gap`) — Sets spacing between flex items without messing with outer margins.

---

## 2. Item Properties (Children)

Apply these directly to the children (`flex-item`).

- **`order: <integer>;`** — Changes the visual order of items (default `0`). Lower numbers appear first.
- **`flex-grow: <number>;`** — Defines how much an item can grow relative to the rest (default `0`).
- **`flex-shrink: <number>;`** — Defines how much an item can shrink if space is tight (default `1`).
- **`flex-basis: <length> | auto;`** — The initial main size of an item before free space is distributed (default `auto`).
- **`flex: <flex-grow> <flex-shrink> <flex-basis>;`** — Shorthand.
  - Common presets: `flex: 1` (`1 1 0%`), `flex: auto` (`1 1 auto`), `flex: initial` (`0 1 auto`), `flex: none` (`0 0 auto`).
- **`align-self: auto | flex-start | flex-end | center | baseline | stretch;`** — Overrides the parent's `align-items` for a specific item.

---

## 3. Critical Nuances & Gotchas

- **The `min-width: auto` Trap:** Flex items have an implicit `min-width: auto` and `min-height: auto`. This means they **cannot shrink smaller than their internal content** (e.g., long unbroken text or images).
  - _Fix:_ Add `min-width: 0;` (or `min-height: 0;`) to the flex item when dealing with text overflow issues or nested flex containers.
- **Margins Don't Collapse:** Margins of flex items do not collapse with each other or with the parent container's margins.
- **`margin: auto` is Magic:** Setting `margin-left: auto` or `margin: auto` on a single flex item forces it to consume all available free space in that direction, making it incredibly easy to push items to the far right or center them completely.
- **Incompatible Properties:** `float`, `clear`, and `vertical-align` have **no effect** on a flex item.
- **Flex-basis vs Width:** If both `width` (or `height`) and `flex-basis` are defined on an item, `flex-basis` takes precedence along the main axis.
- **Table Elements:** Flexbox works on table wrapper elements, but direct table children (`<tr>`, `<td>`) do not play nicely as flex items unless wrapped or targeted carefully.
