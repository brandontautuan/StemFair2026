/**
 * Supabase stub - STEM Fair 2026 (frontend-only, no database)
 *
 * This app runs without a backend. All Supabase exports are stubbed so
 * the Update Portal and any project features show "not configured" or no-op behavior.
 */

export const isSupabaseConfigured = false;

/** Stub client (no real calls). Accepts same args as real client so callers type-check. */
export const supabase = {
  from: (_table: string) => ({
    select: (_columns?: string) => ({
      order: (_column: string, _opts?: { ascending?: boolean }) =>
        Promise.resolve({ data: [], error: null }),
    }),
  }),
  channel: (_name: string) => ({
    on: (_event: string, _opts: unknown, _callback?: (payload: unknown) => void) => ({
      subscribe: () => {},
    }),
  }),
  removeChannel: (_channel: unknown) => {},
  rpc: (_fn: string, _params?: Record<string, unknown>) =>
    Promise.resolve({ data: false, error: { message: 'No database configured.' } }),
};

/** Project row type (for display/types only) */
export interface SupabaseProject {
  id: string;
  project_name: string;
  team_lead: string;
  progress_percentage: number;
  status_update: string;
  secret_key?: string;
  created_at: string;
  updated_at: string;
}
