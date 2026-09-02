import { createClient } from '@supabase/supabase-js';
import { blogPosts } from '../src/data/blogs.js';
import fs from 'fs';
import path from 'path';

// ── Environment Setup ────────────────────────────────────────────────────────
// Since this is a Node script using tsx, we'll manually parse the .env file
// to ensure we get the VITE_ variables without needing extra dependencies.
function loadEnv() {
  const envPath = path.resolve(process.cwd(), '.env');
  const envContent = fs.readFileSync(envPath, 'utf8');
  const env: Record<string, string> = {};
  
  envContent.split('\n').forEach(line => {
    const [key, value] = line.split('=');
    if (key && value) {
      env[key.trim()] = value.trim();
    }
  });
  
  return env;
}

const env = loadEnv();
const supabaseUrl = env.VITE_SUPABASE_URL;
const supabaseKey = env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Error: Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY in .env');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);
const TABLE = 'blog_posts'; // Matching our established table name

// ── Seeding Logic ────────────────────────────────────────────────────────────

async function seed() {
  console.log('🚀 Starting Database Seeding Process...');

  // 1. Wipe existing data
  console.log(`🧹 Clearing all existing rows from table "${TABLE}"...`);
  const { error: deleteError } = await supabase
    .from(TABLE)
    .delete()
    .neq('title', '___PROBABLY_NOT_THIS___'); // Standard Supabase way to delete all rows

  if (deleteError) {
    console.error('❌ Error clearing table:', deleteError.message);
    return;
  }
  console.log('✅ Table cleared successfully.');

  // 2. Map and Prepare Data
  // We're converting camelCase properties from the interface to snake_case for DB
  console.log(`📦 Preparing ${blogPosts.length} blog posts for insertion...`);
  const postsToInsert = blogPosts.map(post => ({
    slug:      post.slug,
    title:     post.title,
    excerpt:   post.excerpt,
    content:   post.content, // FULL content string
    image:     post.image,
    category:  post.category,
    author:    post.author,
    date:      post.date,
    read_time: post.readTime, // Mapping camelCase -> snake_case
    tags:      post.tags,
    featured:  post.featured ?? false,
    status:    'published', // Static data defaults to published
  }));

  // 3. Insert Data
  console.log('📤 Inserting new data into Supabase...');
  const { data, error: insertError } = await supabase
    .from(TABLE)
    .insert(postsToInsert)
    .select();

  if (insertError) {
    console.error('❌ Error during insertion:', insertError.message);
    console.error('Full Error Object:', JSON.stringify(insertError, null, 2));
    return;
  }

  console.log('✨ Seeding Completed Successfully!');
  console.log(`🚀 Total Posts Inserted: ${data?.length}`);
}

seed().catch(err => {
  console.error('💀 Unexpected fatal error during seed:', err);
  process.exit(1);
});
