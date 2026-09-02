import React, { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getSession } from '../../lib/authService';
import { Loader2 } from 'lucide-react';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const location = useLocation();

  useEffect(() => {
    let mounted = true;

    async function checkAuth() {
      try {
        const session = await getSession();
        if (mounted) {
          setAuthenticated(!!session);
        }
      } catch (err) {
        console.error('[ProtectedRoute] auth check error:', err);
        if (mounted) setAuthenticated(false);
      }
    }

    checkAuth();

    return () => {
      mounted = false;
    };
  }, []);

  // ── Show loading spinner while checking auth status ───────────────────
  if (authenticated === null) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-black text-gray-900 dark:text-white">
        <div className="relative flex items-center justify-center">
          <div className="absolute w-16 h-16 rounded-full border-4 border-primary/20 animate-ping opacity-25" />
          <Loader2 className="w-10 h-10 animate-spin text-primary relative z-10" />
        </div>
        <p className="mt-6 text-sm font-bold tracking-[0.2em] uppercase opacity-50">
          Verifying Identity
        </p>
      </div>
    );
  }

  // ── Redirect to login if unauthenticated ────────────────────────────
  if (!authenticated) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  // ── Render protected content ─────────────────────────────────────────
  return <>{children}</>;
};

export default ProtectedRoute;
