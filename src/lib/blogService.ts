import { supabase } from './supabase';
import type { DbBlogPost } from '../types';

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

/** The Supabase table name for blog posts. */
const TABLE = 'blog_posts' as const;

/** Active site identifier (e.g. 'yellowagency', 'yellowtools'). */
const SITE_ID = import.meta.env.VITE_SITE_ID || 'yellowagency';

// ---------------------------------------------------------------------------
// 1. fetchBlogs
// ---------------------------------------------------------------------------

/**
 * Returns all published blog posts for the current site ordered by date descending.
 *
 * @returns Array of `DbBlogPost` rows, or `[]` on error.
 */
export async function fetchBlogs(): Promise<DbBlogPost[]> {
  try {
    const { data, error } = await supabase
      .from(TABLE)
      .select('*')
      .eq('status', 'published') // Hide drafts from public
      .order('date', { ascending: false });

    if (error) {
      console.error('[blogService] fetchBlogs error:', error.message);
      return [];
    }

    return (data as DbBlogPost[]) ?? [];
  } catch (err) {
    console.error('[blogService] fetchBlogs unexpected error:', err);
    return [];
  }
}

// ---------------------------------------------------------------------------
// 2. fetchBlogBySlug
// ---------------------------------------------------------------------------

/**
 * Returns a single blog post that exactly matches the given `slug`.
 *
 * Mirrors the static `getBlogBySlug()` helper.
 *
 * @param slug - The URL-safe slug string (e.g. "top-10-web-development-trends-2025").
 * @returns A single `DbBlogPost`, or `null` if not found or on error.
 */
export async function fetchBlogBySlug(slug: string): Promise<DbBlogPost | null> {
  try {
    const { data, error } = await supabase
      .from(TABLE)
      .select('*')
      .eq('slug', slug)
      .eq('status', 'published') // Only allow published posts by slug
      .single(); // throws a PGRST116 error if 0 rows — handled below

    if (error) {
      // PGRST116 = "no rows returned" — not a crash-worthy error
      if (error.code === 'PGRST116') {
        console.warn(`[blogService] fetchBlogBySlug: no post found for slug "${slug}"`);
      } else {
        console.error('[blogService] fetchBlogBySlug error:', error.message);
      }
      return null;
    }

    return (data as DbBlogPost) ?? null;
  } catch (err) {
    console.error('[blogService] fetchBlogBySlug unexpected error:', err);
    return null;
  }
}

// ---------------------------------------------------------------------------
// 3. fetchFeaturedBlogs
// ---------------------------------------------------------------------------

/**
 * Returns all blog posts where `featured = true`, ordered by date descending.
 *
 * Mirrors the static `getFeaturedBlogs()` helper.
 *
 * @returns Array of featured `DbBlogPost` rows, or `[]` on error.
 */
export async function fetchFeaturedBlogs(): Promise<DbBlogPost[]> {
  try {
    const { data, error } = await supabase
      .from(TABLE)
      .select('*')
      .eq('featured', true)
      .eq('status', 'published') // Only featured + published
      .order('date', { ascending: false });

    if (error) {
      console.error('[blogService] fetchFeaturedBlogs error:', error.message);
      return [];
    }

    return (data as DbBlogPost[]) ?? [];
  } catch (err) {
    console.error('[blogService] fetchFeaturedBlogs unexpected error:', err);
    return [];
  }
}

// ---------------------------------------------------------------------------
// 3b. fetchHomepageBlogs
// ---------------------------------------------------------------------------

/**
 * Returns exactly 8 blogs for the homepage.
 * Prioritizes 'featured' blogs, then picks the most recent ones to fill remaining slots.
 * This guarantees the 3x3 grid layout never looks broken.
 */
export async function fetchHomepageBlogs(): Promise<DbBlogPost[]> {
  try {
    const { data, error } = await supabase
      .from(TABLE)
      .select('*')
      .eq('status', 'published')
      .order('is_pinned', { ascending: false }) // Prioritize manually pinned blogs
      .order('date', { ascending: false })      // Then by newest
      .limit(8);

    if (error) {
      console.error('[blogService] fetchHomepageBlogs error:', error.message);
      return [];
    }

    return (data as DbBlogPost[]) ?? [];
  } catch (err) {
    console.error('[blogService] fetchHomepageBlogs unexpected error:', err);
    return [];
  }
}

// ---------------------------------------------------------------------------
// 4. fetchBlogsByCategory
// ---------------------------------------------------------------------------

/**
 * Returns all blog posts matching the exact `category` string,
 * ordered by date descending.
 *
 * Mirrors the static `getBlogsByCategory()` helper.
 *
 * @param category - The category label (e.g. "Web Development", "SEO").
 * @returns Array of matching `DbBlogPost` rows, or `[]` on error.
 */
export async function fetchBlogsByCategory(category: string): Promise<DbBlogPost[]> {
  try {
    const { data, error } = await supabase
      .from(TABLE)
      .select('*')
      .eq('category', category)
      .eq('status', 'published') // Only published posts for category search
      .order('date', { ascending: false });

    if (error) {
      console.error('[blogService] fetchBlogsByCategory error:', error.message);
      return [];
    }

    return (data as DbBlogPost[]) ?? [];
  } catch (err) {
    console.error('[blogService] fetchBlogsByCategory unexpected error:', err);
    return [];
  }
}

// ---------------------------------------------------------------------------
// 5. fetchCategories
// ---------------------------------------------------------------------------

/**
 * Returns a de-duplicated, sorted list of all category strings currently
 * present in the `blog_posts` table.
 *
 * Mirrors the static `getAllCategories()` helper.
 *
 * Implementation note: Supabase does not natively return `DISTINCT` via the
 * JS client, so we fetch only the `category` column and deduplicate in JS.
 * For very large tables, consider a Postgres function / RPC call instead.
 *
 * @returns Sorted `string[]` of unique categories, or `[]` on error.
 */
export async function fetchCategories(): Promise<string[]> {
  try {
    const { data, error } = await supabase
      .from(TABLE)
      .select('category');

    if (error) {
      console.error('[blogService] fetchCategories error:', error.message);
      return [];
    }

    if (!data) return [];

    const unique = [...new Set((data as { category: string }[]).map((row) => row.category))];
    return unique.sort();
  } catch (err) {
    console.error('[blogService] fetchCategories unexpected error:', err);
    return [];
  }
}

// ---------------------------------------------------------------------------
// Admin-only helpers (no status filter — returns drafts + published)
// ---------------------------------------------------------------------------

/** Shape returned by write operations so UI can branch on success/error. */
export interface ServiceResult<T = DbBlogPost> {
  success: boolean;
  data?: T;
  error?: string;
}

// ---------------------------------------------------------------------------
// 6. fetchAllBlogsAdmin
// ---------------------------------------------------------------------------

/**
 * Returns ALL blog posts (drafts + published) ordered by `created_at` desc.
 * Used exclusively by the admin dashboard — never expose to public routes.
 */
export async function fetchAllBlogsAdmin(): Promise<DbBlogPost[]> {
  try {
    const { data, error } = await supabase
      .from(TABLE)
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('[blogService] fetchAllBlogsAdmin error:', error.message);
      return [];
    }

    return (data as DbBlogPost[]) ?? [];
  } catch (err) {
    console.error('[blogService] fetchAllBlogsAdmin unexpected error:', err);
    return [];
  }
}

// ---------------------------------------------------------------------------
// 7. createBlog
// ---------------------------------------------------------------------------

/**
 * Inserts a new blog post row and returns the created record.
 * Includes auto-fallback if 'target_sites' column is not yet migrated in Supabase.
 */
export async function createBlog(blog: Partial<DbBlogPost>): Promise<ServiceResult> {
  try {
    const { data, error } = await supabase
      .from(TABLE)
      .insert([blog])
      .select()
      .single();

    if (error) {
      // If error is about missing target_sites column, retry without it
      if (error.message && error.message.includes('target_sites')) {
        const { target_sites, canonical_site, ...compatibleBlog } = blog;
        const retry = await supabase
          .from(TABLE)
          .insert([compatibleBlog])
          .select()
          .single();

        if (retry.error) {
          console.error('[blogService] createBlog fallback error:', retry.error.message);
          return { success: false, error: retry.error.message };
        }
        return { success: true, data: retry.data as DbBlogPost };
      }

      console.error('[blogService] createBlog error:', error.message);
      return { success: false, error: error.message };
    }

    return { success: true, data: data as DbBlogPost };
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unexpected error';
    console.error('[blogService] createBlog unexpected error:', err);
    return { success: false, error: message };
  }
}

// ---------------------------------------------------------------------------
// 8. updateBlog
// ---------------------------------------------------------------------------

/**
 * Updates an existing blog post by UUID and returns the updated record.
 * Includes auto-fallback if 'target_sites' column is not yet migrated in Supabase.
 */
export async function updateBlog(
  id: string,
  updates: Partial<Omit<DbBlogPost, 'id' | 'created_at'>>,
): Promise<ServiceResult> {
  try {
    const payload = { ...updates, updated_at: new Date().toISOString() };

    const { data, error } = await supabase
      .from(TABLE)
      .update(payload)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      // If error is about missing target_sites column, retry without it
      if (error.message && error.message.includes('target_sites')) {
        const { target_sites, canonical_site, ...compatiblePayload } = payload;
        const retry = await supabase
          .from(TABLE)
          .update(compatiblePayload)
          .eq('id', id)
          .select()
          .single();

        if (retry.error) {
          console.error('[blogService] updateBlog fallback error:', retry.error.message);
          return { success: false, error: retry.error.message };
        }
        return { success: true, data: retry.data as DbBlogPost };
      }

      console.error('[blogService] updateBlog error:', error.message);
      return { success: false, error: error.message };
    }

    return { success: true, data: data as DbBlogPost };
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unexpected error';
    console.error('[blogService] updateBlog unexpected error:', err);
    return { success: false, error: message };
  }
}

// ---------------------------------------------------------------------------
// 9. deleteBlog
// ---------------------------------------------------------------------------

/**
 * Permanently deletes a blog post by UUID.
 *
 * @param blog - The full blog object to delete (used for storage cleanup).
 * @returns `true` on success, `false` on error.
 */
export async function deleteBlog(blog: DbBlogPost): Promise<boolean> {
  try {
    // 1. Cleanup the cover image from storage if it exists
    if (blog.image && blog.image.includes('blog-images')) {
      await deleteBlogImage(blog.image);
    }

    // 2. Cleanup any images found in the HTML content
    const contentImages = blog.content.match(/src="([^"]+)"/g)?.map(src => src.slice(5, -1)) || [];
    for (const imageUrl of contentImages) {
      if (imageUrl.includes('blog-images')) {
        await deleteBlogImage(imageUrl);
      }
    }

    // 3. Delete the database row
    const { error } = await supabase
      .from(TABLE)
      .delete()
      .eq('id', blog.id);

    if (error) {
      console.error('[blogService] deleteBlog error:', error.message);
      return false;
    }

    return true;
  } catch (err) {
    console.error('[blogService] deleteBlog unexpected error:', err);
    return false;
  }
}

// ---------------------------------------------------------------------------
// 10. uploadBlogImage
// ---------------------------------------------------------------------------

/**
 * Uploads a file to the 'blog-images' Supabase bucket.
 * 
 * @param file - The image file from an input[type="file"]
 * @returns The public URL of the uploaded image.
 */
export async function uploadBlogImage(file: File): Promise<string | null> {
  try {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
    const filePath = `post-covers/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('blog-images')
      .upload(filePath, file);

    if (uploadError) {
      console.error('[blogService] uploadBlogImage error:', uploadError.message);
      return null;
    }

    const { data } = supabase.storage
      .from('blog-images')
      .getPublicUrl(filePath);

    return data.publicUrl;
  } catch (err) {
    console.error('[blogService] uploadBlogImage unexpected error:', err);
    return null;
  }
}

// ---------------------------------------------------------------------------
// 11. deleteBlogImage
// ---------------------------------------------------------------------------

/**
 * Deletes an image from the 'blog-images' bucket based on its public URL.
 * 
 * @param publicUrl - The full public URL of the Supabase asset.
 */
export async function deleteBlogImage(publicUrl: string): Promise<boolean> {
  try {
    // Extract the storage path from the URL
    // Public URL format: .../storage/v1/object/public/blog-images/PATH_TO_FILE
    const pathParts = publicUrl.split('/blog-images/');
    if (pathParts.length < 2) return false;

    const filePath = pathParts[1];

    const { error } = await supabase.storage
      .from('blog-images')
      .remove([filePath]);

    if (error) {
      console.error('[blogService] deleteBlogImage error:', error.message);
      return false;
    }

    return true;
  } catch (err) {
    console.error('[blogService] deleteBlogImage unexpected error:', err);
    return false;
  }
}
