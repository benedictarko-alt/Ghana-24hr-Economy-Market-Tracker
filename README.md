[README.md](https://github.com/user-attachments/files/34085948/README.md)# Ghana 24hr Economy Market Tracker — static website prototype

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
