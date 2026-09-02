import React, { useState, useEffect, useCallback } from 'react';
import {
  PlusCircle, Pencil, Trash2, FileText,
  CheckCircle, Clock, AlertCircle, RefreshCw,
  Eye, EyeOff, LogOut, Star, Globe
} from 'lucide-react';
import { fetchAllBlogsAdmin, deleteBlog, updateBlog } from '../../lib/blogService';
import { logout } from '../../lib/authService';
import { useNavigate } from 'react-router-dom';
import type { DbBlogPost } from '../../types';

// ── Toast ─────────────────────────────────────────────────────────────────────
interface ToastProps { message: string; type: 'success' | 'error'; onClose: () => void; }

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  useEffect(() => {
    const t = setTimeout(onClose, 4000);
    return () => clearTimeout(t);
  }, [onClose]);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-xl shadow-2xl text-white text-sm font-medium transition-all duration-300 animate-fade-in ${
        type === 'success'
          ? 'bg-gradient-to-r from-success to-success/80'
          : 'bg-gradient-to-r from-error to-error/80'
      }`}
    >
      {type === 'success' ? <CheckCircle className="w-5 h-5 shrink-0" /> : <AlertCircle className="w-5 h-5 shrink-0" />}
      <span>{message}</span>
      <button
        onClick={onClose}
        className="ml-2 opacity-70 hover:opacity-100 transition-opacity text-lg leading-none"
        aria-label="Dismiss notification"
      >
        ×
      </button>
    </div>
  );
};

// ── Status badge ──────────────────────────────────────────────────────────────
const StatusBadge: React.FC<{ status?: string }> = ({ status }) => {
  const isPublished = status === 'published';
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide ${
        isPublished
          ? 'bg-success/10 text-success border border-success/20'
          : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700'
      }`}
    >
      {isPublished ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
      {isPublished ? 'Published' : 'Draft'}
    </span>
  );
};

// ── Table row skeleton ────────────────────────────────────────────────────────
const RowSkeleton: React.FC = () => (
  <tr className="animate-pulse">
    {[...Array(5)].map((_, i) => (
      <td key={i} className="px-5 py-4">
        <div className="h-4 rounded bg-gray-200 dark:bg-gray-700"
          style={{ width: i === 0 ? '70%' : i === 4 ? '40%' : '50%' }} />
      </td>
    ))}
  </tr>
);

// ── Props ─────────────────────────────────────────────────────────────────────
interface AdminBlogListProps {
  onCreateNew: () => void;
  onEdit: (blog: DbBlogPost) => void;
}

// ── Component ─────────────────────────────────────────────────────────────────
const AdminBlogList: React.FC<AdminBlogListProps> = ({ onCreateNew, onEdit }) => {
  const [blogs, setBlogs] = useState<DbBlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [loggingOut, setLoggingOut] = useState(false);
  const navigate = useNavigate();

  const showToast = useCallback((message: string, type: 'success' | 'error') => {
    setToast({ message, type });
  }, []);

  const loadBlogs = useCallback(async () => {
    setLoading(true);
    const data = await fetchAllBlogsAdmin();
    setBlogs(data);
    setLoading(false);
  }, []);

  useEffect(() => { loadBlogs(); }, [loadBlogs]);

  const handleDelete = async (blog: DbBlogPost) => {
    const confirmed = window.confirm(
      `Are you sure you want to permanently delete "${blog.title}"?\n\nThis action cannot be undone.`
    );
    if (!confirmed) return;

    setDeletingId(blog.id);
    const ok = await deleteBlog(blog);
    setDeletingId(null);

    if (ok) {
      setBlogs((prev) => prev.filter((b) => b.id !== blog.id));
      showToast('Blog post deleted successfully.', 'success');
    }
  };

  const handleToggleFeatured = async (blog: DbBlogPost) => {
    const isCurrentlyPinned = !!blog.is_pinned;
    const pinnedCount = blogs.filter(b => b.is_pinned).length;

    // Limit check: Don't allow more than 8
    if (!isCurrentlyPinned && pinnedCount >= 8) {
      showToast('Maximum of 8 homepage slots reached. Deselect another post first.', 'error');
      return;
    }

    // Optimistic UI update
    const updatedStatus = !isCurrentlyPinned;
    setBlogs(prev => prev.map(b => b.id === blog.id ? { ...b, is_pinned: updatedStatus } : b));

    const result = await updateBlog(blog.id, { is_pinned: updatedStatus });
    if (!result.success) {
      // Rollback on error
      setBlogs(prev => prev.map(b => b.id === blog.id ? { ...b, is_pinned: isCurrentlyPinned } : b));
      showToast('Error updating status.', 'error');
    } else {
      showToast(updatedStatus ? 'Added to homepage.' : 'Removed from homepage.', 'success');
    }
  };

  const handleLogout = async () => {
    setLoggingOut(true);
    const { error } = await logout();
    if (!error) {
      navigate('/admin/login');
    } else {
      showToast('Error logging out.', 'error');
      setLoggingOut(false);
    }
  };

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] font-inter">

      {/* ── Top bar ────────────────────────────────────────────────────────── */}
      <div className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111] px-6 md:px-10 py-5 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <FileText className="w-6 h-6 text-primary" />
          <div>
            <h1 className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">
              Blog Console
            </h1>
            <div className="flex items-center gap-2 mt-0.5">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {loading ? 'Loading…' : `${blogs.length} post${blogs.length !== 1 ? 's' : ''} total`}
              </p>
              {!loading && (
                <>
                  <div className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />
                  <p className={`text-xs font-bold ${blogs.filter(b => b.is_pinned).length === 8 ? 'text-primary' : 'text-gray-500'}`}>
                    Homepage: {blogs.filter(b => b.is_pinned).length} / 8
                  </p>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={loadBlogs}
            disabled={loading}
            title="Refresh list"
            className="p-2 rounded-lg text-gray-500 hover:text-primary hover:bg-primary/5 transition-all disabled:opacity-40"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>
          <button
            onClick={onCreateNew}
            className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-xl font-semibold text-sm hover:bg-primary/90 active:scale-95 transition-all shadow-md shadow-primary/20"
          >
            <PlusCircle className="w-4 h-4" />
            New Post
          </button>

          <div className="w-px h-5 bg-gray-200 dark:bg-gray-800 mx-1" />

          <button
            onClick={handleLogout}
            disabled={loggingOut}
            title="Log Out"
            className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-500 hover:text-error hover:border-error/30 transition-all rounded-xl text-sm font-semibold"
          >
            {loggingOut ? <RefreshCw className="w-4 h-4 animate-spin" /> : <LogOut className="w-4 h-4" />}
            Log Out
          </button>
        </div>
      </div>

      {/* ── Table ──────────────────────────────────────────────────────────── */}
      <div className="px-6 md:px-10 py-8">
        <div className="bg-white dark:bg-[#111] rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  {['Title', 'Category', 'Status', 'Websites', 'Homepage', 'Date', 'Actions'].map((col) => (
                    <th
                      key={col}
                      className="px-5 py-3.5 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">

                {/* Loading skeletons */}
                {loading && [...Array(5)].map((_, i) => <RowSkeleton key={i} />)}

                {/* Empty state */}
                {!loading && blogs.length === 0 && (
                  <tr>
                    <td colSpan={7} className="px-5 py-20 text-center">
                      <div className="flex flex-col items-center gap-3 text-gray-400 dark:text-gray-500">
                        <FileText className="w-12 h-12 opacity-30" />
                        <p className="font-medium text-gray-600 dark:text-gray-300">No blog posts yet</p>
                        <p className="text-sm">Click <strong className="text-primary">New Post</strong> to create your first article.</p>
                      </div>
                    </td>
                  </tr>
                )}

                {/* Blog rows */}
                {!loading && blogs.map((blog) => {
                  const isDeleting = deletingId === blog.id;
                  const sites = blog.target_sites && blog.target_sites.length > 0 ? blog.target_sites : ['yellowagency'];
                  return (
                    <tr
                      key={blog.id}
                      className={`group transition-colors hover:bg-gray-50 dark:hover:bg-white/[0.03] ${
                        isDeleting ? 'opacity-40 pointer-events-none' : ''
                      }`}
                    >
                      {/* Title */}
                      <td className="px-5 py-4 max-w-xs">
                        <div className="font-semibold text-gray-900 dark:text-white line-clamp-1 group-hover:text-primary transition-colors">
                          {blog.title}
                        </div>
                        <div className="text-xs text-gray-400 dark:text-gray-500 mt-0.5 line-clamp-1">
                          /{blog.slug}
                        </div>
                      </td>

                      {/* Category */}
                      <td className="px-5 py-4">
                        <span className="inline-block px-2.5 py-1 rounded-lg bg-primary/8 text-primary text-xs font-medium">
                          {blog.category || '—'}
                        </span>
                      </td>

                      {/* Status */}
                      <td className="px-5 py-4">
                        <StatusBadge status={(blog as DbBlogPost & { status?: string }).status} />
                      </td>

                      {/* Target Websites */}
                      <td className="px-5 py-4">
                        <div className="flex flex-wrap gap-1 max-w-[140px]">
                          {sites.map((s) => (
                            <span
                              key={s}
                              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-[11px] font-medium border border-gray-200 dark:border-gray-700"
                            >
                              <Globe className="w-2.5 h-2.5 text-primary" />
                              {s === 'yellowagency' ? 'Yellow Agency' : s === 'yellowtools' ? 'Yellow Tools' : s === 'all' ? 'All Sites' : s}
                            </span>
                          ))}
                        </div>
                      </td>

                      {/* Homepage Selector */}
                      <td className="px-5 py-4">
                        <button
                          onClick={() => handleToggleFeatured(blog)}
                          className={`p-2 rounded-lg transition-all ${
                            blog.is_pinned
                              ? 'text-primary bg-primary/10 shadow-inner'
                              : 'text-gray-300 hover:text-gray-400 bg-gray-50 dark:bg-white/[0.03]'
                          }`}
                          title={blog.is_pinned ? 'Remove from homepage' : 'Add to homepage'}
                        >
                          <Star className={`w-4 h-4 ${blog.is_pinned ? 'fill-current' : ''}`} />
                        </button>
                      </td>

                      {/* Date */}
                      <td className="px-5 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">
                        {blog.date
                          ? new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
                          : '—'}
                      </td>

                      {/* Actions */}
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => onEdit(blog)}
                            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all"
                          >
                            <Pencil className="w-3.5 h-3.5" />
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(blog)}
                            disabled={isDeleting}
                            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-error/50 hover:text-error hover:bg-error/5 transition-all"
                          >
                            {isDeleting
                              ? <Clock className="w-3.5 h-3.5 animate-spin" />
                              : <Trash2 className="w-3.5 h-3.5" />}
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
};

export default AdminBlogList;
