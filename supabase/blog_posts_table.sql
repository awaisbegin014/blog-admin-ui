-- ============================================================
-- Yellow Solutions — Supabase blog_posts table setup
-- Run this in your Supabase dashboard:
--   Project → SQL Editor → New query → paste → Run
-- ============================================================

-- 1. Create the table
CREATE TABLE IF NOT EXISTS public.blog_posts (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug        TEXT UNIQUE NOT NULL,
  title       TEXT NOT NULL,
  excerpt     TEXT,
  content     TEXT,
  image       TEXT,
  category    TEXT,
  author      TEXT,
  date        TEXT,
  read_time   TEXT,
  tags        TEXT[]  DEFAULT '{}',
  featured    BOOLEAN DEFAULT false,
  status      TEXT    DEFAULT 'draft'   CHECK (status IN ('draft', 'published')),
  created_at  TIMESTAMPTZ DEFAULT now(),
  updated_at  TIMESTAMPTZ
);

-- 2. Enable Row-Level Security (recommended)
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- 3. Public read policy — anyone can read PUBLISHED posts
CREATE POLICY "Public can read published posts"
  ON public.blog_posts FOR SELECT
  USING (status = 'published');

-- 4. Anon full-access policy for Admin Console
--    WARNING: This is for development/testing only.
--    Before going live, replace this with authenticated-user policies.
CREATE POLICY "Anon full access (dev only)"
  ON public.blog_posts FOR ALL
  USING (true)
  WITH CHECK (true);

-- ============================================================
-- Optional: seed with one sample post to test the table
-- ============================================================
/*
INSERT INTO public.blog_posts (slug, title, excerpt, content, category, author, date, read_time, tags, featured, status)
VALUES (
  'hello-world',
  'Hello World — Yellow Solutions Blog',
  'Our first blog post. Welcome to the Yellow Solutions content hub.',
  '<h2>Welcome</h2><p>This is our first post. Stay tuned for more!</p>',
  'Business',
  'Yellow Team',
  '2026-03-30',
  '2 min read',
  ARRAY['Yellow Solutions', 'Announcement'],
  true,
  'published'
);
*/
