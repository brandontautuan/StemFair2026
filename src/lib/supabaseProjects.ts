/**
 * Supabase Projects API - STEM Fair 2026
 *
 * - fetchProjects: Get all projects (for display)
 * - subscribeToProjects: Real-time updates when any project changes
 * - updateProjectProgress: Team lead updates (requires id + secret_key)
 */

import { supabase, type SupabaseProject } from './supabase';

/** Fetch all projects from Supabase (excludes secret_key) */
export async function fetchProjects(): Promise<SupabaseProject[]> {
  const { data, error } = await supabase
    .from('projects_public')
    .select('*')
    .order('created_at', { ascending: true });

  if (error) {
    console.error('Supabase fetch error:', error);
    return [];
  }
  return (data ?? []) as SupabaseProject[];
}

/**
 * Subscribe to real-time changes on the projects table.
 * Calls onUpdate whenever any project row is inserted, updated, or deleted.
 */
export function subscribeToProjects(onUpdate: (payload: unknown) => void) {
  const channel = supabase
    .channel('projects-changes')
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'projects' },
      onUpdate
    )
    .subscribe();

  return () => {
    supabase.removeChannel(channel);
  };
}

/**
 * Update project progress (team lead only).
 * Validates id + secret_key before updating.
 * Returns true if successful, false if credentials invalid.
 */
export async function updateProjectProgress(
  projectId: string,
  secretKey: string,
  progressPercentage: number,
  statusUpdate: string
): Promise<{ success: boolean; error?: string }> {
  const { data, error } = await supabase.rpc('update_project_progress', {
    p_id: projectId,
    p_secret_key: secretKey,
    p_progress_percentage: Math.min(100, Math.max(0, progressPercentage)),
    p_status_update: statusUpdate || '',
  });

  if (error) {
    console.error('Supabase update error:', error);
    return { success: false, error: error.message };
  }

  return { success: data === true };
}
