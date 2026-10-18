# Verification story

Visitors enter a server-rendered page, evaluate the founder-led lab and inspect static evidence records, then choose a collaborator/organization journey and a mailto handoff to their own email client. No application database, signup, analytics provider or email-delivery backend is part of this flow. The retained API must continue rejecting unsafe requests and returning503 for otherwise valid contact attempts.

Browser evidence covers all canonical routes, metadata, source-order headings, internal links/assets, menu focus/Escape/resize, filters, touch emulation, forced colors, reduced motion and narrow text enlargement. Production-server stdout supplies runtime evidence; no credentials or .env contents are read. Fonts and content are local. Existing HTTP integration tests exercise the real API validation/deadline/origin/CSP behavior; unit tests cover detailed parsing and no-send invariants. Actual email delivery is deliberately not exercised or claimed.

This applies Vercel's full-story verification guidance to the real static-site/contact boundary rather than inventing API/data layers. Production provider behavior and deployment remain separate from local acceptance. The skill's suggestion to inspect environment values is unnecessary for this credential-free path and does not authorize printing secrets.
