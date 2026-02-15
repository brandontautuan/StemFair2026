/**
 * Update Portal - Team Lead Project Progress
 *
 * Team leads enter project_id and secret_key to update their project's
 * progress_percentage and status_update.
 */

import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { updateProjectProgress } from '../lib/supabaseProjects';
import { isSupabaseConfigured } from '../lib/supabase';
import './UpdatePortal.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' as const },
  },
};

const viewport = { once: false, amount: 0.12 };

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
        <motion.section
          className="update-portal-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.h1 className="page-title" variants={itemVariants}>
            Team Lead Update Portal
          </motion.h1>
          <motion.p className="update-portal-intro" variants={itemVariants}>
            Project updates are not available—this site is frontend-only with no database.
            Contact the event organizers for other ways to submit progress.
          </motion.p>
        </motion.section>
      </main>
    );
  }

  return (
    <main className="main-content">
      <motion.section
        className="update-portal-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.h1 className="page-title" variants={itemVariants}>
          Team Lead Update Portal
        </motion.h1>
        <motion.p className="update-portal-intro" variants={itemVariants}>
          Enter your project ID and secret key to update your project&apos;s progress.
          Contact the event organizers if you need your credentials.
        </motion.p>

        <motion.form className="update-portal-form" onSubmit={handleSubmit} variants={itemVariants}>
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
        </motion.form>
      </motion.section>
    </main>
  );
}

export default UpdatePortal;
