# Ghana 24hr Market Tracker — static website prototype

This is a working HTML/CSS/JavaScript dashboard with a **12-record demonstration dataset**. It is **not** a verified national inventory. Records were transcribed from earlier discussion and must be independently checked before public release.

## Preview locally
Run `python -m http.server 8000` from this folder, then open `http://localhost:8000`.

## Publish free on GitHub Pages
1. Create a public GitHub repository (e.g., `24hr-market-tracker`).
2. Upload `index.html`, `styles.css`, `app.js`, `markets.json`, and `markets.csv` to its root.
3. Under repository Settings → Pages, select **Deploy from a branch**, `main`, `/ (root)`, then Save.
4. Open the URL GitHub displays once deployment finishes. Do not publish before reviewing and validating the data.

## Updating
Edit `markets.json` and `markets.csv` together, keeping the same column names. For large-scale maintenance, generate both from a master spreadsheet. Missing consultant, contractor, dates, and sources are intentionally blank. Status categories should remain exact. Map markers are intentionally disabled until project-level coordinates are verified.

## Next steps
- Reconcile these records with the actual master Tracker inventory to remove duplicates.
- Verify source URLs, names, contract roles and dated construction claims.
- Add fields for evidence type, event date, publication date, verification level, project IDs, location coordinates, displacement, and historical status events.
- Add an editorial review workflow before publication.

This prototype does not update any external inventory or publish a live website.


## Verification upgrade (28 October 2026)
The dashboard now has a verification filter, per-market evidence details, V1–V5 legend, source and claim registers, and a corrections log. Every imported record remains provisional: V3 means an attributed online report with a URL, while V4 means a source URL is missing. **Neither classification indicates an independent review has been completed.**

### Data management
- `markets.json` drives the dashboard; `markets.csv` is a parallel downloadable snapshot. Update BOTH when publishing changes.
- `sources.csv` stores original source provenance. Archive articles separately and record archived-copy locations.
- `claims.csv` stores discrete claims and their evidence assessments. A market can have claims at different verification levels.
- `changes.csv` is an append-only correction history. Never delete old change rows.
- Update `verification` only after assessing each material claim; V1 requires authentic primary documentation, V2 independent underlying corroboration, V3 attribution, V4 insufficient evidence, V5 conflicting credible evidence.
- Status is distinct from verification. Do not infer construction from sod-cutting or operations from commissioning.
- Blank event dates and unknown coordinates must remain blank until established.
- The site is static; editing downloadable CSVs alone does not automatically modify `markets.json` or re-run verification. No automatic web fact-checking is claimed.

To test locally: `python -m http.server 8000` from this folder, then open localhost:8000. To deploy, upload all files to a GitHub Pages repository and enable Pages.

## Verification module (v2)
The site now includes a verification centre with V1–V5 counts, filters, source/claim/change registers, and a publication-ready filter. All 12 legacy market records are conservatively marked V4, not reviewed. Populate `sources.json`, `claims.json`, and `changes.json` following `VERIFICATION_PROTOCOL.md`. These registers are initially empty, not fabricated. The public site does not offer a secure editing interface; edit data files offline and commit reviewed changes.
