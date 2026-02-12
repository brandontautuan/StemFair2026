/**
 * Update Portal - Team Lead Project Progress
 *
 * Team leads enter project_id and secret_key to update their project's
 * progress_percentage and status_update.
 */

import { useState, FormEvent } from 'react';
import { updateProjectProgress } from '../lib/supabaseProjects';
import { isSupabaseConfigured } from '../lib/supabase';
import './UpdatePortal.css';

function UpdatePortal() {
  const [projectId, setProjectId] = useState('');
  const [secretKey, setSecretKey] = useState('');
  const [progress, setProgress] = useState(0);
  const [statusUpdate, setStatusUpdate] = useState('');
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setMessage(null);
    setLoading(true);

    const result = await updateProjectProgress(
      projectId.trim(),
      secretKey.trim(),
      progress,
      statusUpdate.trim()
    );

    setLoading(false);
    if (result.success) {
      setMessage({ type: 'success', text: 'Progress updated successfully!' });
      setStatusUpdate('');
    } else {
      setMessage({
        type: 'error',
        text: result.error || 'Invalid project ID or secret key. Please try again.',
      });
    }
  }

  if (!isSupabaseConfigured) {
    return (
      <main className="main-content">
        <section className="update-portal-section">
          <h1 className="page-title">Team Lead Update Portal</h1>
          <p className="update-portal-intro">
            Supabase is not configured. Add <code>VITE_SUPABASE_URL</code> and{' '}
            <code>VITE_SUPABASE_ANON_KEY</code> to your <code>.env</code> file to
            enable project updates.
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className="main-content">
      <section className="update-portal-section">
        <h1 className="page-title">Team Lead Update Portal</h1>
        <p className="update-portal-intro">
          Enter your project ID and secret key to update your project&apos;s progress.
          Contact the event organizers if you need your credentials.
        </p>

        <form className="update-portal-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="projectId">Project ID (UUID)</label>
            <input
              id="projectId"
              type="text"
              value={projectId}
              onChange={(e) => setProjectId(e.target.value)}
              placeholder="e.g. 550e8400-e29b-41d4-a716-446655440000"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="secretKey">Secret Key</label>
            <input
              id="secretKey"
              type="password"
              value={secretKey}
              onChange={(e) => setSecretKey(e.target.value)}
              placeholder="Your secret key"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="progress">Progress (%)</label>
            <input
              id="progress"
              type="number"
              min={0}
              max={100}
              value={progress}
              onChange={(e) => setProgress(Number(e.target.value) || 0)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="statusUpdate">Status Update</label>
            <textarea
              id="statusUpdate"
              value={statusUpdate}
              onChange={(e) => setStatusUpdate(e.target.value)}
              placeholder="Brief update on your project progress..."
              rows={4}
            />
          </div>

          {message && (
            <div className={`update-portal-message update-portal-message--${message.type}`}>
              {message.text}
            </div>
          )}

          <button type="submit" className="update-portal-submit" disabled={loading}>
            {loading ? 'Updating...' : 'Update Progress'}
          </button>
        </form>
      </section>
    </main>
  );
}

export default UpdatePortal;
