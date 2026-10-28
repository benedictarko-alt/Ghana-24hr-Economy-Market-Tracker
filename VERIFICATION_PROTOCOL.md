# Verification protocol — operational rules

The public dashboard is **not** a field-verified inventory. No record is publication-ready by default.

## Levels
- V1: Document-verified. Authentic primary record directly supports the particular claim.
- V2: Independently corroborated. Two independent underlying evidential sources support the same claim. Syndication is not independence.
- V3: Attributed report. Identifiable credible source, underlying claim not independently verified.
- V4: Unverified. Evidence insufficient or legacy record not yet reviewed.
- V5: Disputed. Credible material conflict, documented without forced resolution.

## Workflow
1. Register the source, publisher, URL, original publication date, event date, access date, source tier and independence group. Archive a copy where lawful.
2. Extract atomic claims into claims.json with stable claim_id, market_id, source_ids, evidence basis and reviewer/date.
3. Check original documents and whether apparently separate stories derive from the same press release.
4. Distinguish construction, completion and actual trading; never infer physical works from sod-cutting, mobilisation or award, nor operation from commissioning.
5. Record overall versus component progress; do not interpret 80% blockwork as 80% project completion.
6. Check market identity, district, region, project location precision and duplicates.
7. Review conflicting evidence and retain all versions.
8. Approve changes in changes.json, keeping old and new values and reason.
9. Set publication_ready=true only after editorial review; this flag is separate from verification level.
10. Publish the reviewed dataset, retain old revisions in version control, and review active construction records monthly.

## Dataset schemas
- markets.json: market_id, market, locality, district, region, status, consultant, contractor, evidence_note, report_date, source_url, verification_level, verification_basis, event_date, last_checked, reviewer, location_precision, source_ids, publication_ready.
- sources.json: source_id, publisher, title, url, source_tier, publication_date, event_date, accessed_date, independence_group, archive_reference.
- claims.json: claim_id, market_id, claim_text, source_ids (array), verification_level, verification_basis, review_date, reviewer.
- changes.json: change_id, market_id, field, old_value, new_value, reason, source_ids (array), decision_date, reviewer.

Do not put private informant details in public JSON. GitHub Pages exposes all deployed files. Dates should be ISO YYYY-MM-DD; use empty string for unknown.
