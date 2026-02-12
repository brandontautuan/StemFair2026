/**
 * Supabase Client - STEM Fair 2026
 *
 * Uses CDN (ESM) or npm package. For Vite/React, we use the npm package.
 * Get your URL and anon key from: Supabase Dashboard > Project Settings > API
 *
 * IMPORTANT: Create a .env file with:
 *   VITE_SUPABASE_URL=https://your-project.supabase.co
 *   VITE_SUPABASE_ANON_KEY=your-anon-key
 *
 * Never commit the service role key. The anon key is safe for frontend use.
 */

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL ?? '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY ?? '';

export const isSupabaseConfigured =
  Boolean(supabaseUrl && supabaseAnonKey);

if (!isSupabaseConfigured) {
  console.warn(
    'Supabase not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to .env'
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/** Supabase projects table row type */
export interface SupabaseProject {
  id: string;
  project_name: string;
  team_lead: string;
  progress_percentage: number;
  status_update: string;
  secret_key?: string; // Never expose to client; RLS hides it
  created_at: string;
  updated_at: string;
}
