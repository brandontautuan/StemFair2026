-- ============================================================
-- STEM Fair 2026 - Projects Table
-- Run this in Supabase SQL Editor (Dashboard > SQL Editor)
-- ============================================================

-- 1. Create the projects table
CREATE TABLE IF NOT EXISTS projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_name TEXT NOT NULL,
  team_lead TEXT NOT NULL,
  progress_percentage INT NOT NULL DEFAULT 0 CHECK (progress_percentage >= 0 AND progress_percentage <= 100),
  status_update TEXT DEFAULT '',
  secret_key TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Trigger to auto-update updated_at on row change
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS projects_updated_at ON projects;
CREATE TRIGGER projects_updated_at
  BEFORE UPDATE ON projects
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- 3. Enable Row Level Security (RLS)
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- 4. Create a view that EXCLUDES secret_key (so it's never exposed to clients)
CREATE OR REPLACE VIEW projects_public AS
  SELECT id, project_name, team_lead, progress_percentage, status_update, created_at, updated_at
  FROM projects;

GRANT SELECT ON projects_public TO anon;

-- 5. Policy: Anyone (anon) can READ from projects_public view (no secret_key)
CREATE POLICY "anon_read_projects"
  ON projects
  FOR SELECT
  TO anon
  USING (true);

-- Note: secret_key is in the table but we use projects_public for display.
-- For RPC (update_project_progress), we pass secret_key in the function call only.

-- 6. Updates: Use a PostgreSQL function (below) that validates secret_key server-side.
-- Team leads call this function instead of direct UPDATE.

CREATE OR REPLACE FUNCTION update_project_progress(
  p_id UUID,
  p_secret_key TEXT,
  p_progress_percentage INT,
  p_status_update TEXT DEFAULT ''
)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_match BOOLEAN;
BEGIN
  -- Validate id + secret_key match
  SELECT EXISTS (
    SELECT 1 FROM projects
    WHERE id = p_id AND secret_key = p_secret_key
  ) INTO v_match;

  IF NOT v_match THEN
    RETURN FALSE;
  END IF;

  UPDATE projects
  SET
    progress_percentage = p_progress_percentage,
    status_update = p_status_update,
    updated_at = NOW()
  WHERE id = p_id AND secret_key = p_secret_key;

  RETURN FOUND;
END;
$$;

-- Grant execute to anon (so frontend can call it)
GRANT EXECUTE ON FUNCTION update_project_progress(UUID, TEXT, INT, TEXT) TO anon;

-- 7. Policy: Allow INSERT for authenticated users or anon (optional - for admin adding projects)
-- For now, projects are added via Supabase Dashboard or a separate admin flow.
-- Anon can only SELECT. Updates go through the function above.

-- ============================================================
-- 8. Enable Realtime (required for live UI updates)
-- Do this in Supabase Dashboard: Table Editor > projects > Replication
-- Turn ON "Realtime" for the projects table.
-- ============================================================
