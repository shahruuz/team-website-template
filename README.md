# Team Atlas — evolving team website template

Responsive editorial team gallery based on the EPWater team website design, generalized for reuse. All shipped people are fictional examples; no original proposal biographies or portraits are published here.

**Copy the prompt in [COPY-PASTE-PROMPT.txt](COPY-PASTE-PROMPT.txt)** into a coding-capable AI and add your team list. Its workflow starts at [START-HERE.md](START-HERE.md). The stable entry links stay the same as the code evolves on main.

## Run

No npm, subscription, API key, backend or build step needed.

```sh
python3 -m http.server 8000
```

Open http://localhost:8000 . Opening index.html directly also works, subject to browser storage restrictions. Optional external fonts fall back to system fonts.

## Customize

- `site-config.js`: organization, project, location, introductory copy and unique local storage key.
- `team.json`: authoritative roster; `python3 update_roster.py team.json` regenerates `team-data.js`.
- `index.html`: page copy, metadata and structure.
- `styles.css`: responsive visual design.
- `app.js`: interactions and category metadata.
- `photos/`: optional approved WebP/JPEG/PNG portraits.

Each profile uses id, name, credentials, category, role, title, firm, availability, bio, experience, photo, source and sourceType. IDs must be unique. Keep missing facts empty. Availability is optional; publish it only when intended. Portrait paths must use `photos/simple-name.webp` (or png/jpg/jpeg) or supported image data URLs.

The in-browser editor saves only to that browser. Export JSON to preserve changes, run update_roster.py, then publish the source. It is not a shared cloud database or an authentication system.

## Stable updates

`main` is the stable channel. Each AI run fetches its current commit. VERSION is human-readable; record the commit too. Existing team sites remain independent and merge upstream updates deliberately, preserving their roster/config/photos. There is no automatic remote code injection.

## Hosting

Serve this folder on any static host. For GitHub Pages choose Settings → Pages → Deploy from a branch → main → / (root). No Actions workflow or paid build minutes are necessary. Public Pages content is public. Hosting is only live once Pages is enabled and the URL has been verified.

## Content use

The generalized template is provided for adapting team sites. Users must have permission to use their uploaded photos, logos and biographies. Original proposal content is not included.
