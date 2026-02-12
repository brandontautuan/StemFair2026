/**
 * Supabase stub - STEM Fair 2026 (frontend-only, no database)
 *
 * This app runs without a backend. All Supabase exports are stubbed so
 * the Update Portal and any project features show "not configured" or no-op behavior.
 */

export const isSupabaseConfigured = false;

/** Stub client (no real calls). Used by supabaseProjects for type safety. */
export const supabase = {
  from: () => ({
    select: () => ({ order: () => Promise.resolve({ data: [], error: null }) }),
  }),
  channel: () => ({
    on: () => ({ subscribe: () => {} }),
  }),
  removeChannel: () => {},
  rpc: () => Promise.resolve({ data: false, error: { message: 'No database configured.' } }),
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
