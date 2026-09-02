import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../lib/authService';
import { Loader2, AlertCircle, LogIn, Lock, Mail, Eye, EyeOff } from 'lucide-react';

const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { data: session, error: authError } = await login(email, password);

    if (authError) {
      setError(authError.message === 'Invalid login credentials' 
        ? 'Incorrect email or password. Please try again.' 
        : authError.message);
      setLoading(false);
    } else if (session) {
      // Small delay for UX transition
      setTimeout(() => navigate('/admin'), 300);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black px-4 sm:px-6 lg:px-8">
      {/* ── Background decoration ────────────────────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden -z-10 bg-white">
        <div className="absolute top-1/4 -left-16 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-1/4 -right-16 w-80 h-80 bg-secondary/10 rounded-full blur-3xl opacity-60" />
      </div>

      {/* ── Login Card ──────────────────────────────────────────────────── */}
      <div className="max-w-md w-full animate-fade-in">
        <div className="bg-white dark:bg-gray-900 shadow-2xl rounded-3xl p-8 md:p-12 border border-gray-100 dark:border-gray-800 transition-all">
          
          {/* Logo & Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6 transition-transform hover:scale-110">
              <LogIn className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-2">
              <span className="heading">Admin</span>{' '}
              <span className="gradient-text">Console</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 font-medium">
              Secure access for Yellow Solutions authors.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={handleLogin}>
            {error && (
              <div className="flex items-start gap-3 p-4 bg-error/10 border border-error/20 rounded-2xl animate-shake">
                <AlertCircle className="w-5 h-5 text-error shrink-0 mt-0.5" />
                <p className="text-sm font-medium text-error leading-relaxed">{error}</p>
              </div>
            )}

            <div className="space-y-4">
              {/* Email */}
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 p-1 text-gray-400 group-focus-within:text-primary transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="
                    w-full pl-12 pr-4 py-4 rounded-2xl
                    bg-gray-50 dark:bg-gray-800/50
                    border border-transparent focus:border-primary
                    text-gray-900 dark:text-white font-medium
                    focus:ring-4 focus:ring-primary/10
                    transition-all outline-none
                  "
                  placeholder="Email Address"
                />
              </div>

              {/* Password */}
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 p-1 text-gray-400 group-focus-within:text-primary transition-colors">
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="
                    w-full pl-12 pr-12 py-4 rounded-2xl
                    bg-gray-50 dark:bg-gray-800/50
                    border border-transparent focus:border-primary
                    text-gray-900 dark:text-white font-medium
                    focus:ring-4 focus:ring-primary/10
                    transition-all outline-none
                  "
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-primary transition-colors focus:outline-none"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="
                w-full flex items-center justify-center gap-3
                px-8 py-4 bg-primary text-white font-black
                rounded-2xl transition-all shadow-xl shadow-primary/20
                hover:shadow-2xl hover:shadow-primary/30
                hover:-translate-y-1 active:translate-y-0
                disabled:opacity-60 disabled:pointer-events-none
              "
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Authenticating...
                </>
              ) : (
                'Sign In'
              )}
            </button>

            {/* Info footer */}
            <p className="text-center text-xs text-gray-400 dark:text-gray-500 mt-6 leading-relaxed">
              Proprietary internal system. Unauthorized access is strictly prohibited and monitored.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
