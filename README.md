# MIT THINK — Public Site (React)

Modern rewrite of the MIT THINK public marketing site, ported from the original
Express + Handlebars + AngularJS 1.6 + Bootstrap 4 + Semantic UI + jQuery +
Flickity stack in `../think-again` to plain React on Vite.

## Stack

- **React 19** + **Vite 7** (JavaScript, no TypeScript)
- Plain CSS ported from the original `style.css` (no CSS-in-JS, no Tailwind)
- Native `<dialog>` for team-member modals (replaces Bootstrap modals + jQuery)
- Native `<details>`/`<summary>` for the FAQ accordion (replaces Bootstrap collapse)
- Hand-rolled scroll-snap carousel for the team section (replaces Flickity)
- Font Awesome loaded from CDN for the footer icons and accordion caret

Everything that used to require jQuery, Bootstrap JS, Popper, Semantic UI JS,
AngularJS, ng-file-upload, and Flickity is now either React state or native
browser APIs.

## Getting started

```bash
npm install
npm run dev      # starts the dev server on http://localhost:3000
npm run build    # production build → dist/
npm run preview  # preview the built output
```

## Copying assets

The React code references `/images/...`, `/fonts/...`, and `/static_files/...`.
These live in `../think-again/public/`. Copy them into `think-2/public/`:

```powershell
# From this directory (think-2)
New-Item -ItemType Directory -Force public\images | Out-Null
New-Item -ItemType Directory -Force public\fonts | Out-Null
New-Item -ItemType Directory -Force public\static_files | Out-Null
Copy-Item "..\think-again\public\images\*" public\images -Recurse -Force
Copy-Item "..\think-again\public\fonts\*" public\fonts -Recurse -Force
Copy-Item "..\think-again\public\static_files\*" public\static_files -Recurse -Force
```

Anything Vite finds under `public/` is served at the root path, so
`public/images/logo_updated.svg` is available at `/images/logo_updated.svg`.

## File layout

```
think-2/
├── index.html               # Vite HTML entry
├── package.json
├── vite.config.js
├── public/                  # (assets go here — see above)
└── src/
    ├── main.jsx             # React root
    ├── App.jsx              # composes sections top-to-bottom
    ├── styles/
    │   ├── index.css        # fonts, resets, globals
    │   └── App.css          # ported from think-again/public/stylesheets/style.css
    ├── data/
    │   ├── team.js          # team members (id, name, class year, photo, bio)
    │   ├── timeline.js      # timeline events
    │   └── faq.js           # FAQ Q&A
    └── components/
        ├── Navbar.jsx       # fades in past 500px of scroll
        ├── Hero.jsx
        ├── Intro.jsx        # premise / prize columns
        ├── Guidelines.jsx
        ├── Timeline.jsx
        ├── Finalists.jsx
        ├── Team.jsx         # carousel of team members
        ├── MemberModal.jsx  # <dialog>-based bio popup
        ├── Resources.jsx
        ├── Faq.jsx          # <details>-based accordion
        ├── Sponsors.jsx
        └── Footer.jsx
```

## What was NOT ported

The original repo also contained an applicant-submission portal (login,
Passport, Mongo, application form, Dropbox upload, Mailchimp subscribe). Per
the ask, only the public marketing page is ported here. If you need those
flows back, they can be added as a separate backend the React app talks to.

## Dependency notes vs. the old stack

| Old                                    | New                        |
| -------------------------------------- | -------------------------- |
| Express 4 + Handlebars 3 (SSR)         | Vite dev server / static build |
| AngularJS 1.6 + ng-file-upload         | React 19                   |
| Bootstrap 4.2 + jQuery 3.3 + Popper    | Native CSS + `<dialog>` + `<details>` |
| Semantic UI 2.4                        | (removed)                  |
| Flickity 2                             | Hand-rolled scroll-snap carousel |
| Font Awesome 4.4 + 5.6 (two versions)  | Font Awesome 5.15 via CDN, single version |
| Mongoose 4.11, mysql, passport, ...    | (backend removed)          |

All CDN references from the old `<head>` (jQuery, Bootstrap JS, Popper,
Semantic JS, Flickity JS) are gone; the app is one React bundle.
