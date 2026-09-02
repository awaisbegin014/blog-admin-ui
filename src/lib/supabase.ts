import { createClient } from '@supabase/supabase-js';

const DEFAULT_URL = 'https://dcqwkjmjrxxlcpbhszzq.supabase.co';
const DEFAULT_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjcXdram1qcnh4bGNwYmhzenpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ4NzcxMjYsImV4cCI6MjA5MDQ1MzEyNn0.wEpu0RGpTWzwxyUwcsDb5-sKxIlOw309jcw90Ux53h8';

function getValidCredentials(): { url: string; anonKey: string } {
  const rawUrl = (import.meta.env.VITE_SUPABASE_URL as string | undefined)?.trim().replace(/^["']|["']$/g, '');
  const rawKey = (import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined)?.trim().replace(/^["']|["']$/g, '');

  const url = rawUrl && rawUrl.startsWith('https://') ? rawUrl : DEFAULT_URL;

  // Supabase JWT keys always start with 'eyJ'.
  // If the user pasted the publishable key ('sb_publishable_...') or an invalid format,
  // we gracefully fall back to the known working default key.
  const anonKey = rawKey && rawKey.startsWith('eyJ') ? rawKey : DEFAULT_ANON_KEY;

  return { url, anonKey };
}

const { url: supabaseUrl, anonKey: supabaseAnonKey } = getValidCredentials();

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
