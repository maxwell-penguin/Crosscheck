# Crosscheck

A read-only web app that runs consistency checks on a brokerage account's
data, pulled through SnapTrade's OAuth API. Each check returns Pass,
Differs or Can't tell, with the evidence. It gives no advice and stores no
financial data.

Status: day-1 data test

## Setup

Requires Node 20+.

```
npm install
npm test
```

Copy `.env.example` to `.env` and fill in your SnapTrade credentials when
you are ready to pull data.

## Privacy

Raw API responses (`data/raw/`) and secrets (`.env`) are never committed.
