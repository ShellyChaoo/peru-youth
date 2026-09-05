# Copilot instructions

## Reusable story-map guide

When a user wants to add their own travel, fieldwork, cultural, or social-practice story to this project, first read [interactive-story-map-guide.md](./interactive-story-map-guide.md). The reusable workflow is available as [create-interactive-story-map.prompt.md](./prompts/create-interactive-story-map.prompt.md). Ask for missing location, story, and media details before editing, and keep content data-driven.

## Project shape

This is a single-page, static Traditional Chinese (繁體中文) interactive story map built with Vite and React. The application is split between `src/`, with `App.jsx` coordinating state, `data/journeyNodes.js` holding journey content, and components rendering the map, navigation, story panel, and interactive modules.

The page has two coordinated areas:

- `MapView`, a Leaflet map centered on Peru, with markers defined in `locations`.
- `StoryPanel`, whose content is selected from `journeyNodes` by the active node key.

All journey node keys must stay consistent across `locations`, `journeyNodes`, navigation labels, and marker click behavior. React state in `App.jsx` selects Lima initially. Story content is data-driven JSX rather than injected HTML.

The interactive experiences are isolated in `InteractiveModules.jsx`: the Misminay Chicha animation, CBC water-quality calculator, Qosqo Maki podcast simulation, and CHIRAPAQ quinoa analyzer each own their React state. Keep these modules independent so adding content does not create another monolithic component.

## Commands and validation

There is no repository-defined test, lint, or single-test command. Use the Vite scripts:

```bash
npm run dev
npm run build
npm run preview
```

Check the running app in a browser and exercise every navigation button, map marker, and node-specific control at desktop and mobile widths. There is no single-test command until a test runner is added.

Useful checks:

```bash
git diff --check
npm run build
```

## Repository conventions

- Keep content in `src/data/journeyNodes.js` and presentation/behavior in React components. Avoid moving page content back into a large HTML string or inline event handlers.
- Use the existing CSS variables and component styles in `src/styles.css`. Avoid introducing a second styling system without a clear need.
- Keep user-facing copy in Traditional Chinese and preserve the existing narrative tone. Use the existing English/Spanish organization and place names where they are already part of the content.
- Import local images from `src/assets/` (or use a deliberate public URL) and add `image` plus `imageAlt` to the relevant journey node. Render images through `StoryPanel`; do not base64-embed photos.
- Keep external Leaflet tile assets on the existing CDN approach. `MapView` owns Leaflet setup/cleanup in `useEffect`, and map tile attribution must remain present.
- When adding a journey node, update both `locations` and `journeyNodes`. Give it a stable key and matching navigation behavior; `MapView` derives marker click behavior from `locations`.
- Preserve the layout constraints (`100%` root height, `overflow: hidden`, and responsive mobile split) unless intentionally changing the interaction model. Verify scrolling remains available in the story panel on small screens.
- Avoid unsafe HTML injection. React text rendering is preferred; if rich content is needed, model it as React data/components rather than reintroducing `innerHTML`.
