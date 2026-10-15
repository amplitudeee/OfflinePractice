# HTML Notes

## Contents

- [Core Web Terms](#core-web-terms)
- [Language Structure](#language-structure)
- [Basic Template for an HTML Page](#basic-template-for-an-html-page)
- [Document Sections](#document-sections)
- [Connecting CSS and JavaScript](#connecting-css-and-javascript)
- [Basic Elements](#basic-elements)
- [Inline Styles and Common CSS Properties](#inline-styles-and-common-css-properties)
- [Text Formatting Elements](#text-formatting-elements)
- [Forms](#forms)
  - [Basic Form Structure](#basic-form-structure)
  - [Common Input Types](#common-input-types)
  - [Useful Form Attributes](#useful-form-attributes)
  - [Other Form Elements](#other-form-elements)
- [Links](#links)
- [Images and Backgrounds](#images-and-backgrounds)
- [Tables](#tables)
- [Lists](#lists)
- [Block and Inline Elements](#block-and-inline-elements)

## Core Web Terms

- `HTML`: HyperText Markup Language.
- `href`: Hypertext reference, usually used in links.
- `URL`: Uniform Resource Locator.
- `CSS`: Cascading Style Sheets.
- `API`: Application Programming Interface.
- `JSON`: JavaScript Object Notation.
- `FTP`: File Transfer Protocol.
- `Request/Response`: the basic browser and server communication model.
- `Client-Server Database`: a system where the client requests data and the server stores or processes it.

## Language Structure

```text
HTML Document
    Doctype Declaration
    html
        head
            meta
            title
            link
            script
        body
            headings
            paragraphs
            forms
            links
            images
            tables
            lists
            other content
```

## Basic Template for an HTML Page

- Typing `!` and pressing Enter in many editors generates a basic HTML5 template.
- `<!DOCTYPE html>` tells the browser the document uses HTML5.
- `<html>` is the root element of the page.
- `<head>` stores document information and linked resources.
- `<body>` stores the visible content shown to the user.

Example syntax:

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page title</title>
    <!--
    Name: Matt Salvadori
    File: index.html
    Date: October 10 2025
    Assignment 3 - Styling a biography page
    -->
  </head>
  <body>
  </body>
</html>
```

## Document Sections

- `<head>` contains metadata, the page title, linked CSS files, and linked scripts.
- `<meta charset="utf-8">` sets the character encoding.
- `<meta name="viewport">` helps the page scale correctly on mobile devices.
- `<title>` sets the browser tab title.
- HTML comments use `<!-- comment -->`.

Example syntax:

```html
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Page</title>
</head>
```

## Connecting CSS and JavaScript

- Use `<link>` in the `<head>` to attach CSS files.
- Use `<script>` to attach JavaScript files.
- Scripts are often placed near the bottom of `<body>` so the page loads before the script runs.

Example syntax:

```html
<link rel="stylesheet" href="./style.css">
<link rel="stylesheet" href="https://www.w3schools.com/html/styles.css">

<script src="https://www.w3schools.com/js/myScript.js"></script>
<script src="/js/myScript.js"></script>
<script src="myScript.js"></script>
```

## Basic Elements

- `<h1>` to `<h6>` define headings.
- `<p>` defines a paragraph.
- `<pre>` preserves spaces and line breaks.
- `<hr>` adds a thematic break or horizontal rule.
- `<br>` creates a line break.

Example syntax:

```html
<h1>This is one of 6 possible headings</h1>
<p>This is a paragraph.</p>
<pre>preserves predefined text in a paragraph</pre>
<hr>
<br>
```

## Inline Styles and Common CSS Properties

- The `style` attribute applies CSS directly to one element.
- `font-size` changes text size.
- `font-family` changes the font.
- `background-color` changes the background color.
- `color` changes text color.
- `border` adds a border.
- `text-align` changes alignment.
- `margin` sets space outside the border.
- `padding` sets space inside the border.
- Color values can use names, `rgb()`, or `hsl()`.

Example syntax:

```html
<h1 style="font-size: 60px;">Large heading</h1>
<h1 style="font-family: 'Courier New', Courier, monospace;">Change the font</h1>
<body style="background-color: powderblue;">Page content</body>
<p style="color: blue;">This is a blue paragraph</p>
<p style="color: rgb(255, 0, 0, 0.2);">Red with transparency</p>
<p style="color: hsl(0, 100%, 0%, 0.5);">Hue, Saturation, Lightness, Alpha</p>
<h1 style="border: 2px solid tomato;">Border example</h1>
<h3 style="text-align: center;">Centered text</h3>
<h3 style="margin: 50px;">Margin example</h3>
<h3 style="padding: 50px;">Padding example</h3>
```

## Text Formatting Elements

- `<b>` makes text bold.
- `<strong>` marks important text.
- `<i>` makes text italic.
- `<em>` adds emphasis.
- `<mark>` highlights text.
- `<small>` makes smaller text.
- `<del>` shows deleted or struck text.
- `<ins>` shows inserted text.
- `<sub>` makes subscript text.
- `<sup>` makes superscript text.
- `<cite>` identifies the title of a creative work.
- `<blockquote>` creates a long quotation.
- `<q>` creates a short quotation.
- `<abbr>` defines an abbreviation.
- `<address>` shows contact information.
- `<bdo dir="rtl">` overrides text direction.

Example syntax:

```html
<strong>Important text</strong>
<em>Emphasized text</em>
<mark>Marked text</mark>
<cite>The Great Gatsby</cite>
<blockquote cite="http://www.bananas.org">
  Enter giant block of auto-indented text
</blockquote>
<q>Short quotation</q>
<abbr title="World Health Organization">WHO</abbr>
<address>Contact information for the author</address>
<bdo dir="rtl">This text runs right to left</bdo>
```

## Forms

### Basic Form Structure

- `<form>` wraps form controls.
- `action` tells the browser where to send the form data.
- `method` controls how the form data is submitted.
- `target` controls where the response is opened.

Example syntax:

```html
<form action="/action_page.php" target="_blank" method="get">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname">
  <input type="submit">
</form>
```

### Common Input Types

- `type="text"` creates a single-line text box.
- `type="radio"` creates a radio button.
- `type="checkbox"` creates a checkbox.
- `type="submit"` creates a submit button.
- `type="button"` creates a clickable button.

Example syntax:

```html
<input type="text" id="fname" name="fname">
<input type="radio" id="css" name="fav_language" value="CSS" checked>
<label for="css">CSS</label>
<input type="checkbox" id="vehicle1" name="vehicle1" value="Car">
<label for="vehicle1">I have a car</label>
<input type="submit">
<input type="button" value="OK">
```

### Useful Form Attributes

- `required` makes a field mandatory.
- `minlength` sets a minimum number of characters.
- `maxlength` sets a maximum number of characters.
- `autocomplete="on"` enables browser suggestions.
- `novalidate` disables built-in form validation.
- `method="get"` sends form data in the URL.
- `method="post"` sends form data in the request body.

Example syntax:

```html
<input type="text" required minlength="2" maxlength="20" autocomplete="on">
<form method="post" novalidate>
```

### Other Form Elements

- `<label>` gives a readable label for a control.
- `<select>` creates a drop-down list.
- `<optgroup>` groups options inside a select list.
- `<option>` defines an item in a list.
- `<textarea>` creates a multi-line input area.
- `<button>` creates a button element.
- `<fieldset>` groups related form data.
- `<legend>` adds a caption to a fieldset.
- `<datalist>` provides suggested values.
- `<output>` displays calculation or result output.

Example syntax:

```html
<select id="cars" name="cars" size="1">
  <optgroup label="German">
    <option value="volvo">Volvo</option>
  </optgroup>
</select>

<textarea name="message" rows="10" cols="30"></textarea>
<textarea name="message" style="width: 200px; height: 600px;"></textarea>

<button type="button" onclick="alert('Hello World!')">Click Me!</button>

<fieldset>
  <legend>Personalia:</legend>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <input type="submit" value="Submit">
</fieldset>
```

Target attribute values:

- `_blank`: open in a new tab or window.
- `_self`: open in the current tab.
- `_parent`: open in the parent frame.
- `_top`: open in the full browser window.
- `framename`: open in a named iframe.

## Links

- Use `<a>` to create hyperlinks.
- `href` sets the link destination.
- `title` provides extra information on hover.
- `target` controls where the link opens.
- Links can point to full URLs, relative files, bookmarks, email addresses, or images.

Example syntax:

```html
<a href="https://www.w3schools.com/html" target="_blank">Visit our HTML Tutorial</a>
<a href="https://www.w3.org/">Absolute URL</a>
<a href="html_images.asp">Relative URL</a>
<a href="mailto:someone@example.com">Link to send email</a>
<a href="default.asp">
  <img src="smiley.gif" alt="HTML tutorial" style="width: 42px; height: 42px;">
</a>
<button onclick="document.location='default.asp'">Use Button As Link</button>
```

Link target values:

- `_self`: default, opens in the same tab.
- `_blank`: opens in a new tab or window.
- `_parent`: opens in the parent frame.
- `_top`: opens in the full body of the window.

Link styling examples:

```css
a:link {
  color: pink;
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

a:active {
  background-color: purple;
}

a:link,
a:visited {
  background-color: #f44336;
  color: white;
  padding: 15px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

a:hover,
a:active {
  background-color: red;
}
```

Page bookmark example:

```html
<h2 id="C4">Chapter 4</h2>
<a href="#C4">Jump to Chapter 4</a>
<a href="html_demo.html#C4">Jump to Chapter 4 on another page</a>
```

## Images and Backgrounds

- Use `<img>` to display an image.
- `src` sets the image file.
- `alt` provides alternative text.
- `width` and `height` control size.
- Inline `style` can also control image size.
- `float` can wrap text around an image.
- CSS `background-image` can add a background image to an element or the page.

Example syntax:

```html
<img src="programming.gif" alt="My Test image" width="500" height="500">
<img src="./Lab1_Matt1_Sam2.img" alt="My Test image" style="width: 500px; height: 600px;">

<p>
  <img src="smiley.gif" alt="Smiley face" style="float: right; width: 42px; height: 42px;">
  The image will float to the right of the text.
</p>

<p style="background-image: url('img_girl.jpg'); background-repeat: no-repeat;">
```

Page background example:

```css
body {
  background-image: url('img_girl.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
```

## Tables

- `<table>` defines a table.
- `<tr>` defines a table row.
- `<th>` defines a table header cell.
- `<td>` defines a standard table cell.
- `<caption>` adds a title to the table.
- `<colgroup>` and `<col>` define column formatting.
- `<thead>`, `<tbody>`, and `<tfoot>` group table sections.

Example syntax:

```html
<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
  </tr>
</table>
```

Table CSS examples:

```css
table,
th,
td {
  border: 1px solid black;
}

table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
}

th,
td {
  border-style: dotted;
}

th,
td {
  border-color: #96d4d4;
}

table,
th,
td {
  width: 100%;
}
```

## Lists

- `<ul>` creates an unordered list.
- `<ol>` creates an ordered list.
- `<li>` defines a list item.
- `<dl>` creates a description list.
- `<dt>` defines a term.
- `<dd>` defines the description for that term.
- Ordered lists can use `type` and `start` attributes.

Example syntax:

```html
<ul style="list-style-type: none;">
  <li>List Item</li>
</ul>

<ol type="A" start="1">
  <li>List item</li>
</ol>

<dl>
  <dt>Description title</dt>
  <dd>Description dialogue</dd>
</dl>
```

Navigation list styling example:

```css
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111111;
}
```

## Block and Inline Elements

- `<div>` is a block-level container.
- `<span>` is an inline container.
- Block elements usually start on a new line.
- Inline elements usually stay within the current line of text.

Example syntax:

```html
<div style="background-color: black; color: white; padding: 20px;">
  Defines a section in a document.
</div>

<span style="color: darkolivegreen; font-weight: bold;">
  dark green
</span>
```