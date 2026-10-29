# Decision log

| Date | Decision | Alternatives considered | Why | Revisit if |
|------|----------|-------------------------|-----|------------|
| 2026-10-28 (proposed) | Three-state results (Pass / Differs / Can't tell) with no single trust score | One 0-100 trust score; pass/fail only | A score hides which check failed and implies advice; "Can't tell" keeps missing data honest | Users need a single summary number |
| 2026-10-28 (proposed) | No database; token held for the session only | Encrypted DB of tokens; cached account data | Nothing stored means nothing to leak; the app stores no financial data | Users want history across visits |
| 2026-10-28 (proposed) | Request the read scope only | Request trading scope too | The app never trades; least privilege | A feature genuinely needs write access |
