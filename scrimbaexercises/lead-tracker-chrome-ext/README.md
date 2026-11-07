# Lead Tracker Chrome Extension

A Chrome extension built while following Scrimba's Full-Stack Developer Path. It lets you save links and return to them later.

## Features

- **Save Input:** Add a link from the text field.
- **Save Tab:** Save the URL of the active Chrome tab.
- **Delete All:** Double-click to clear all saved leads.
- **Persistent storage:** Saved leads remain available when you reopen the extension.

## Install locally

1. Open Chrome and go to `chrome://extensions`.
2. Turn on **Developer mode**.
3. Select **Load unpacked** and choose the `lead-tracker-chrome-ext` folder containing `manifest.json`.
4. Open **Leads tracker** from Chrome's Extensions menu.

## How it works

- JavaScript event listeners respond to button clicks and a double-click.
- The Chrome Tabs API retrieves the active tab's URL. The manifest requests the `tabs` permission for this feature.
- Leads are stored in an array, converted to JSON with `JSON.stringify()`, and saved in Local Storage. `JSON.parse()` restores them when the popup opens.
- A `render()` function uses template literals and DOM manipulation to display the leads as clickable links.

The project also includes Vite for development (`npm install`, then `npm start`). Load the project as an extension to use **Save Tab**, which depends on the Chrome Tabs API.
