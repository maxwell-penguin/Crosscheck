// Result of one consistency check.
// 'pass'      = the data agrees with itself.
// 'differs'   = the data disagrees; see reason and evidence.
// 'cant_tell' = not enough data to decide either way.
export type CheckStatus = 'pass' | 'differs' | 'cant_tell';

export interface CheckResult {
  status: CheckStatus;
  // One plain-English sentence explaining the status.
  reason: string;
  // The numbers/records the verdict is based on. Shape is loose until
  // the checks exist.
  evidence: unknown[];
}

// PROVISIONAL: the types below are provisional until I inspect real
// SnapTrade responses. Only fields named in the docs are listed; every
// field is optional/nullable until real data shows which ones are
// actually present.

export interface Account {
  id?: string;
}

export interface Position {
  symbol?: string | null;
  units?: number | string | null; // fractional shares exist; see CLAUDE.md
  price?: number | string | null;
  currency?: string | null;
}

export interface Activity {
  id?: string;
  type?: string | null;
  trade_date?: string | null;
  settlement_date?: string | null;
  units?: number | string | null;
  price?: number | string | null;
  amount?: number | string | null;
  fee?: number | string | null;
  fx_rate?: number | string | null;
  currency?: string | null;
  symbol?: string | null;
  external_reference_id?: string | null;
}
