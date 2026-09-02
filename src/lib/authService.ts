import { supabase } from './supabase';
import type { AuthError, Session, User } from '@supabase/supabase-js';

export interface AuthServiceResult<T> {
  data: T | null;
  error: AuthError | null;
}

const LOCAL_ADMIN_EMAIL = 'admin@yellow.com';
const LOCAL_ADMIN_PASSWORD = 'admin';

/**
 * Signs in a user using email and password.
 */
export async function login(email: string, password: string): Promise<AuthServiceResult<Session>> {
  try {
    // ── Local Dev / Demo Admin Bypass ──────────────────────────
    if (email.trim().toLowerCase() === LOCAL_ADMIN_EMAIL && password === LOCAL_ADMIN_PASSWORD) {
      const mockSession = {
        access_token: 'local-dev-token',
        token_type: 'bearer',
        expires_in: 3600,
        refresh_token: 'local-dev-refresh',
        user: {
          id: '00000000-0000-0000-0000-000000000000',
          app_metadata: {},
          user_metadata: { name: 'Admin' },
          aud: 'authenticated',
          created_at: new Date().toISOString(),
          email: LOCAL_ADMIN_EMAIL,
        },
      } as unknown as Session;

      localStorage.setItem('local_admin_session', JSON.stringify(mockSession));
      return { data: mockSession, error: null };
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { data: data.session, error };
  } catch (err) {
    console.error('[authService] login unexpected error:', err);
    return { data: null, error: err as AuthError };
  }
}

/**
 * Signs out the current user.
 */
export async function logout(): Promise<{ error: AuthError | null }> {
  try {
    localStorage.removeItem('local_admin_session');
    const { error } = await supabase.auth.signOut();
    return { error };
  } catch (err) {
    console.error('[authService] logout unexpected error:', err);
    return { error: err as AuthError };
  }
}

/**
 * Retrieves the current user profile from the local session.
 */
export async function getCurrentUser(): Promise<User | null> {
  try {
    const localSession = localStorage.getItem('local_admin_session');
    if (localSession) {
      return JSON.parse(localSession).user;
    }
    const { data: { user } } = await supabase.auth.getUser();
    return user;
  } catch (err) {
    console.error('[authService] getCurrentUser error:', err);
    return null;
  }
}

/**
 * Checks if a session currently exists.
 */
export async function getSession(): Promise<Session | null> {
  try {
    const localSession = localStorage.getItem('local_admin_session');
    if (localSession) {
      return JSON.parse(localSession);
    }
    const { data: { session } } = await supabase.auth.getSession();
    return session;
  } catch (err) {
    console.error('[authService] getSession error:', err);
    return null;
  }
}
