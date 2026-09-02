import { createClient } from '@supabase/supabase-js';

// The verified Supabase instance for Yellow Solutions Blog & CMS
export const supabaseUrl = 'https://dcqwkjmjrxxlcpbhszzq.supabase.co';
export const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjcXdram1qcnh4bGNwYmhzenpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ4NzcxMjYsImV4cCI6MjA5MDQ1MzEyNn0.wEpu0RGpTWzwxyUwcsDb5-sKxIlOw309jcw90Ux53h8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});
