# Rules for Claude in this repo

- Never read, print or commit `.env` files or anything in `data/raw`.
- Never paste secrets or real account data into code, tests or logs.
- Checks must be pure functions over plain JSON, with no network calls.
- Write the test first, then the check. Tell the user which cases each test covers.
- Explain non-obvious code in comments. The user must be able to defend it line by line.
- Prefer the simplest approach, and ask before adding a dependency.
- Use decimal-safe handling for units, since fractional shares exist.
