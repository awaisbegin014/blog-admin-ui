-- ============================================================
-- Yellow Solutions — Complete Supabase blog_posts setup
-- Run this in your Supabase dashboard:
--   Project → SQL Editor → New query → paste → Run
-- ============================================================

-- 1. Create the table (includes ALL columns used by Blog Admin,
--    Yellow Agency, and Yellow Tools)
CREATE TABLE IF NOT EXISTS public.blog_posts (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug            TEXT UNIQUE NOT NULL,
  title           TEXT NOT NULL,
  excerpt         TEXT,
  content         TEXT,
  image           TEXT,
  category        TEXT,
  author          TEXT,
  date            TEXT DEFAULT CURRENT_DATE::text,
  read_time       TEXT,
  tags            TEXT[]     DEFAULT '{}',
  featured        BOOLEAN    DEFAULT false,
  is_pinned       BOOLEAN    DEFAULT false,
  target_sites    TEXT[]     DEFAULT '{all}',
  canonical_site  TEXT,
  status          TEXT       DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  created_at      TIMESTAMPTZ DEFAULT now(),
  updated_at      TIMESTAMPTZ
);

-- 2. Indexes for fast lookups
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug       ON public.blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_status     ON public.blog_posts(status);
CREATE INDEX IF NOT EXISTS idx_blog_posts_date       ON public.blog_posts(date DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_is_pinned  ON public.blog_posts(is_pinned);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category   ON public.blog_posts(category);

-- 3. Enable Row-Level Security
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- 4. RLS Policies
--    Public can read published posts
CREATE POLICY "Public can read published posts"
  ON public.blog_posts FOR SELECT
  USING (status = 'published');

--    Anon can also read all posts (needed because Blog Admin uses
--    the anon key with its local-admin bypass for write operations)
CREATE POLICY "Anon full access"
  ON public.blog_posts FOR ALL
  USING (true)
  WITH CHECK (true);

--    Authenticated users have full access
CREATE POLICY "Authenticated users full access"
  ON public.blog_posts FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- ============================================================
-- 5. Storage bucket for blog cover images
-- ============================================================
INSERT INTO storage.buckets (id, name, public)
VALUES ('blog-images', 'blog-images', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies: anyone can read, anon/auth can upload & delete
CREATE POLICY "Public read blog images"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'blog-images');

CREATE POLICY "Allow upload blog images"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'blog-images');

CREATE POLICY "Allow delete blog images"
  ON storage.objects FOR DELETE
  USING (bucket_id = 'blog-images');
