import React, { useState, useEffect, useCallback } from 'react';
import {
  ArrowLeft, Save, Loader2, AlertCircle, CheckCircle,
  Sparkles, Eye, EyeOff, Upload, X, Globe
} from 'lucide-react';
import { createBlog, updateBlog, uploadBlogImage } from '../../lib/blogService';
import type { DbBlogPost } from '../../types';
import RichTextEditor from './RichTextEditor';

// ── Helpers ───────────────────────────────────────────────────────────────────

/** Converts a title string into a URL-safe slug in real-time. */
function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Estimate reading time from HTML content (strips tags, counts words). */
function estimateReadTime(html: string): string {
  const text = html.replace(/<[^>]+>/g, ' ').trim();
  const words = text.split(/\s+/).filter(Boolean).length;
  const mins = Math.max(1, Math.round(words / 200));
  return `${mins} min read`;
}

// ── Field wrapper ────────────────────────────────────────────────────────────
const Field: React.FC<{
  label: string;
  htmlFor: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
}> = ({ label, htmlFor, hint, required, children }) => (
  <div className="space-y-1.5">
    <label htmlFor={htmlFor} className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
      {label}
      {required && <span className="text-error ml-1" aria-hidden="true">*</span>}
    </label>
    {children}
    {hint && <p className="text-xs text-gray-400 dark:text-gray-500">{hint}</p>}
  </div>
);

const inputCls =
  'w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm';

// ── Inline alert ──────────────────────────────────────────────────────────────
const InlineAlert: React.FC<{ type: 'success' | 'error'; message: string }> = ({ type, message }) => (
  <div
    className={`flex items-start gap-3 px-4 py-3 rounded-xl text-sm font-medium ${type === 'success'
        ? 'bg-success/10 text-success border border-success/20'
        : 'bg-error/10 text-error border border-error/20'
      }`}
    role="alert"
  >
    {type === 'success'
      ? <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
      : <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />}
    <span>{message}</span>
  </div>
);

// ── Tag pill input ─────────────────────────────────────────────────────────────
const TagInput: React.FC<{
  value: string[];
  onChange: (tags: string[]) => void;
}> = ({ value, onChange }) => {
  const [input, setInput] = useState('');

  const addTag = (raw: string) => {
    const tag = raw.trim();
    if (tag && !value.includes(tag)) onChange([...value, tag]);
    setInput('');
  };

  const removeTag = (tag: string) => onChange(value.filter((t) => t !== tag));

  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 flex flex-wrap gap-2 focus-within:ring-2 focus-within:ring-primary/50 focus-within:border-primary transition-all min-h-[46px]">
      {value.map((tag) => (
        <span
          key={tag}
          className="flex items-center gap-1 bg-primary/10 text-primary px-2.5 py-1 rounded-full text-xs font-medium"
        >
          {tag}
          <button
            type="button"
            onClick={() => removeTag(tag)}
            className="text-primary/60 hover:text-primary transition-colors ml-0.5 text-base leading-none"
            aria-label={`Remove tag ${tag}`}
          >
            ×
          </button>
        </span>
      ))}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ',') { e.preventDefault(); addTag(input); }
          if (e.key === 'Backspace' && !input && value.length) removeTag(value[value.length - 1]);
        }}
        onBlur={() => { if (input.trim()) addTag(input); }}
        placeholder={value.length ? '' : 'Type a keyword and press Enter…'}
        className="flex-1 min-w-[120px] outline-none bg-transparent text-sm text-gray-900 dark:text-white placeholder-gray-400"
      />
    </div>
  );
};

// ── Categories ────────────────────────────────────────────────────────────────
const CATEGORIES = [
  'Web Development', 'App Development', 'Digital Marketing',
  'SEO', 'AI Automation', 'UI/UX Design', 'Data Analytics',
  'Social Media', 'Business', 'Other',
];

// ── Target Websites ───────────────────────────────────────────────────────────
export const AVAILABLE_SITES = [
  { id: 'yellowagency', label: 'Yellow Agency' },
  { id: 'yellowtools', label: 'Yellow Tools' },
  { id: 'all', label: 'All Connected Sites' },
];

// ── Props + form state ────────────────────────────────────────────────────────
interface AdminBlogEditorProps {
  existingBlog?: DbBlogPost | null;
  onSuccess: (blog: DbBlogPost) => void;
  onCancel: () => void;
}

interface FormState {
  title: string;
  slug: string;
  category: string;
  author: string;
  excerpt: string;
  content: string;
  image: string;
  read_time: string;
  tags: string[];
  featured: boolean;
  target_sites: string[];
  status: 'draft' | 'published';
  date: string;
}

function buildInitialState(blog?: DbBlogPost | null): FormState {
  if (blog) {
    return {
      title: blog.title ?? '',
      slug: blog.slug ?? '',
      category: blog.category ?? '',
      author: blog.author ?? '',
      excerpt: blog.excerpt ?? '',
      content: blog.content ?? '',
      image: blog.image ?? '',
      read_time: blog.read_time ?? '',
      tags: blog.tags ?? [],
      featured: blog.featured ?? false,
      target_sites: blog.target_sites && blog.target_sites.length > 0 ? blog.target_sites : ['yellowagency', 'yellowtools'],
      status: ((blog as DbBlogPost & { status?: 'draft' | 'published' }).status) ?? 'draft',
      date: blog.date ?? new Date().toISOString().split('T')[0],
    };
  }
  return {
    title: '', slug: '', category: '', author: '',
    excerpt: '', content: '', image: '', read_time: '',
    tags: [], featured: false, target_sites: ['yellowagency', 'yellowtools'], status: 'published',
    date: new Date().toISOString().split('T')[0],
  };
}

// ── Component ─────────────────────────────────────────────────────────────────
const AdminBlogEditor: React.FC<AdminBlogEditorProps> = ({ existingBlog, onSuccess, onCancel }) => {
  const isEditing = !!existingBlog;

  const [form, setForm] = useState<FormState>(() => buildInitialState(existingBlog));
  const [slugLocked, setSlugLocked] = useState(isEditing);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [isCustomCategory, setIsCustomCategory] = useState(false);
  const [alert, setAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [previewContent, setPreviewContent] = useState(false);

  // Auto-slug from title
  useEffect(() => {
    if (!slugLocked) setForm((p) => ({ ...p, slug: slugify(p.title) }));
  }, [form.title, slugLocked]);

  // Auto read-time from content word count
  useEffect(() => {
    if (form.content) setForm((p) => ({ ...p, read_time: estimateReadTime(p.content) }));
  }, [form.content]);

  const set = useCallback(<K extends keyof FormState>(key: K, val: FormState[K]) => {
    setForm((p) => ({ ...p, [key]: val }));
    if (alert) setAlert(null);
  }, [alert]);

  const handleSlugChange = (val: string) => { setSlugLocked(true); set('slug', val); };
  const resetSlug = () => { setSlugLocked(false); setForm((p) => ({ ...p, slug: slugify(p.title) })); };

  // ── Validate ──────────────────────────────────────────────────────────────
  const validate = (): string | null => {
    if (!form.title.trim()) return 'Please add a title for your post.';
    if (!form.slug.trim()) return 'Slug is missing — try typing a title first.';
    if (!form.category) return 'Please select a category.';
    if (!form.author.trim()) return 'Please enter the author\'s name.';
    if (!form.excerpt.trim()) return 'Please write a short summary for the post.';
    if (!form.content.trim() || form.content === '<p></p>') return 'Post content cannot be empty.';
    return null;
  };

  // ── Submit ────────────────────────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (err) { setAlert({ type: 'error', message: err }); return; }

    setSaving(true);
    setAlert(null);

    const payload: Partial<DbBlogPost> & { status?: string } = {
      title: form.title.trim(),
      slug: form.slug.trim(),
      category: form.category,
      author: form.author.trim(),
      excerpt: form.excerpt.trim(),
      content: form.content,
      image: form.image.trim(),
      read_time: form.read_time || estimateReadTime(form.content),
      tags: form.tags,
      featured: form.featured,
      target_sites: form.target_sites && form.target_sites.length > 0 ? form.target_sites : ['yellowagency', 'yellowtools'],
      status: form.status,
      date: form.date || new Date().toISOString().split('T')[0],
    };

    const result = isEditing && existingBlog
      ? await updateBlog(existingBlog.id, payload as Partial<Omit<DbBlogPost, 'id' | 'created_at'>>)
      : await createBlog(payload);

    setSaving(false);

    if (result.success && result.data) {
      setAlert({ type: 'success', message: isEditing ? 'Post updated successfully!' : 'Post published!' });
      setTimeout(() => onSuccess(result.data!), 1200);
    } else {
      setAlert({ type: 'error', message: result.error ?? 'Something went wrong. Please try again.' });
    }
  };

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] font-inter">

      {/* ── Sticky header ────────────────────────────────────────────────── */}
      <div className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111] px-6 md:px-10 py-5 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center gap-4">
          <button type="button" onClick={onCancel} className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors group">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back
          </button>
          <div className="w-px h-5 bg-gray-200 dark:bg-gray-700" />
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            <h1 className="text-base font-bold text-gray-900 dark:text-white">
              {isEditing ? 'Edit Post' : 'Write New Post'}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setPreviewContent((p) => !p)}
            className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-primary hover:text-primary transition-all"
          >
            {previewContent ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            {previewContent ? 'Edit' : 'Preview'}
          </button>
          <button type="button" onClick={onCancel} className="px-4 py-2 text-sm rounded-xl border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">
            Cancel
          </button>
          <button
            form="blog-editor-form"
            type="submit"
            disabled={saving}
            className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl font-semibold text-sm hover:bg-primary/90 active:scale-95 transition-all shadow-md shadow-primary/20 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            {saving ? 'Saving…' : isEditing ? 'Save Changes' : 'Save Post'}
          </button>
        </div>
      </div>

      {/* ── Form body ─────────────────────────────────────────────────────── */}
      <div className="px-6 md:px-10 py-8 max-w-5xl mx-auto">
        {alert && <div className="mb-6"><InlineAlert type={alert.type} message={alert.message} /></div>}

        <form id="blog-editor-form" onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* ── Left: content ──────────────────────────────────────────── */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white dark:bg-[#111] rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm space-y-5">
                <h2 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Content</h2>

                {/* Title */}
                <Field label="Post Title" htmlFor="title" required>
                  <input
                    id="title"
                    type="text"
                    value={form.title}
                    onChange={(e) => set('title', e.target.value)}
                    placeholder="What is this article about?"
                    className={`${inputCls} text-base font-semibold`}
                    required
                  />
                </Field>

                {/* Slug — hidden from non-devs behind a details toggle */}
                <details className="group">
                  <summary className="text-xs text-gray-400 dark:text-gray-500 cursor-pointer hover:text-primary transition-colors select-none flex items-center gap-1">
                    <span>Advanced: URL slug</span>
                    <span className="text-xs opacity-60 group-open:hidden">(click to edit)</span>
                  </summary>
                  <div className="mt-2 flex gap-2">
                    <div className="relative flex-1">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm select-none">/</span>
                      <input
                        id="slug"
                        type="text"
                        value={form.slug}
                        onChange={(e) => handleSlugChange(e.target.value)}
                        placeholder="url-safe-slug"
                        className={`${inputCls} pl-6 font-mono text-xs`}
                      />
                    </div>
                    {slugLocked && (
                      <button type="button" onClick={resetSlug} className="px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-xs text-gray-500 hover:text-primary hover:border-primary transition-all whitespace-nowrap">
                        Auto
                      </button>
                    )}
                  </div>
                  <p className="text-xs text-gray-400 mt-1">The web address for this post. Auto-generated — only change if needed.</p>
                </details>

                {/* Summary */}
                <Field
                  label="Short Summary"
                  htmlFor="excerpt"
                  hint="Write 2–3 sentences that describe what the reader will learn. This appears on the blog listing page."
                  required
                >
                  <textarea
                    id="excerpt"
                    value={form.excerpt}
                    onChange={(e) => set('excerpt', e.target.value)}
                    placeholder="Give readers a preview of what this article covers…"
                    rows={3}
                    className={inputCls}
                    required
                  />
                </Field>

                {/* Rich text editor / preview */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Article Content <span className="text-error ml-1" aria-hidden="true">*</span>
                    </label>
                    <button
                      type="button"
                      onClick={() => setPreviewContent((p) => !p)}
                      className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-primary transition-colors"
                    >
                      {previewContent ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      {previewContent ? 'Back to editing' : 'Preview'}
                    </button>
                  </div>

                  {previewContent ? (
                    <div
                      className="blog-content prose prose-sm dark:prose-invert max-w-none border border-gray-200 dark:border-gray-700 rounded-xl p-5 min-h-[380px] bg-gray-50 dark:bg-gray-900 overflow-auto"
                      dangerouslySetInnerHTML={{ __html: form.content }}
                    />
                  ) : (
                    <RichTextEditor
                      value={form.content}
                      onChange={(html) => set('content', html)}
                      onImageUpload={uploadBlogImage}
                      placeholder="Start writing your article here. Use the toolbar above to add headings, bold text, bullet points, and more…"
                    />
                  )}

                </div>
              </div>
            </div>

            {/* ── Right: metadata ────────────────────────────────────────── */}
            <div className="space-y-6">

              {/* Publishing */}
              <div className="bg-white dark:bg-[#111] rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm space-y-5">
                <h2 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Publishing</h2>

                <Field label="Status" htmlFor="status">
                  <select
                    id="status"
                    value={form.status}
                    onChange={(e) => set('status', e.target.value as 'draft' | 'published')}
                    className={inputCls}
                  >
                    <option value="draft">📝  Save as Draft</option>
                    <option value="published">🌐  Publish (visible to everyone)</option>
                  </select>
                </Field>

                <Field label="Publish Date" htmlFor="date">
                  <input
                    id="date"
                    type="date"
                    value={form.date}
                    onChange={(e) => set('date', e.target.value)}
                    className={inputCls}
                  />
                </Field>

                {/* Target Websites Selector */}
                <div className="pt-2 border-t border-gray-100 dark:border-gray-800 space-y-2">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Publish to Websites</span>
                  </div>
                  <div className="space-y-2 pt-1">
                    {AVAILABLE_SITES.map((site) => {
                      const isChecked = form.target_sites.includes(site.id);
                      return (
                        <label
                          key={site.id}
                          className={`flex items-center justify-between p-2.5 rounded-xl border text-xs font-medium cursor-pointer transition-all ${
                            isChecked
                              ? 'border-primary/40 bg-primary/5 text-primary'
                              : 'border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:border-gray-300'
                          }`}
                        >
                          <span>{site.label}</span>
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={(e) => {
                              const checked = e.target.checked;
                              let updated: string[];
                              if (site.id === 'all') {
                                updated = checked ? ['all'] : ['yellowagency'];
                              } else {
                                const withoutAll = form.target_sites.filter((s) => s !== 'all');
                                updated = checked
                                  ? [...withoutAll, site.id]
                                  : withoutAll.filter((s) => s !== site.id);
                                if (updated.length === 0) updated = ['yellowagency'];
                              }
                              set('target_sites', updated);
                            }}
                            className="rounded text-primary focus:ring-primary h-4 w-4"
                          />
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Featured toggle */}
                <div className="flex items-center justify-between py-2 border-t border-gray-100 dark:border-gray-800">
                  <div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Featured Badge</p>
                    <p className="text-xs text-gray-400">Show visual "Featured" tag on the blog card</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => set('featured', !form.featured)}
                    role="switch"
                    aria-checked={form.featured}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${form.featured ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'
                      }`}
                  >
                    <span className={`inline-block h-4 w-4 rounded-full bg-white shadow transform transition-transform ${form.featured ? 'translate-x-6' : 'translate-x-1'}`} />
                  </button>
                </div>
              </div>

              {/* Post details */}
              <div className="bg-white dark:bg-[#111] rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm space-y-5">
                <h2 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Details</h2>

                <Field label="Category" htmlFor="category" required>
                  {isCustomCategory ? (
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <input
                          id="category"
                          type="text"
                          autoFocus
                          value={form.category === 'ADD_NEW' ? '' : form.category}
                          onChange={(e) => set('category', e.target.value)}
                          placeholder="Type new category name..."
                          className={inputCls}
                          required
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setIsCustomCategory(false);
                          set('category', '');
                        }}
                        className="px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-xs text-gray-500 hover:text-primary hover:border-primary transition-all whitespace-nowrap"
                        title="Back to list"
                      >
                        Back
                      </button>
                    </div>
                  ) : (
                    <select
                      id="category"
                      value={form.category}
                      onChange={(e) => {
                        if (e.target.value === 'ADD_NEW') {
                          setIsCustomCategory(true);
                          set('category', '');
                        } else {
                          set('category', e.target.value);
                        }
                      }}
                      className={inputCls}
                      required
                    >
                      <option value="">Choose a topic…</option>
                      {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                      <option value="ADD_NEW" className="font-bold text-primary italic">+ Add new category...</option>
                    </select>
                  )}
                </Field>

                <Field label="Author Name" htmlFor="author" required>
                  <input
                    id="author"
                    type="text"
                    value={form.author}
                    onChange={(e) => set('author', e.target.value)}
                    placeholder="e.g. Sarah Johnson"
                    className={inputCls}
                    required
                  />
                </Field>

                <Field label="Cover Image" htmlFor="image" hint="Upload a file or paste a link.">
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <label className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 cursor-pointer hover:border-primary hover:bg-primary/5 transition-all ${uploading ? 'opacity-50 pointer-events-none' : ''}`}>
                        {uploading ? <Loader2 className="w-5 h-5 animate-spin text-primary" /> : <Upload className="w-5 h-5 text-gray-400" />}
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                          {uploading ? 'Uploading...' : 'Choose Image'}
                        </span>
                        <input
                          type="file"
                          className="hidden"
                          accept="image/*"
                          onChange={async (e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              setUploading(true);
                              const url = await uploadBlogImage(file);
                              if (url) set('image', url);
                              setUploading(false);
                            }
                          }}
                        />
                      </label>
                      <div className="w-px h-10 bg-gray-200 dark:bg-gray-700 self-center" />
                      <div className="flex-[2] relative">
                        <input
                          id="image"
                          type="url"
                          value={form.image}
                          onChange={(e) => set('image', e.target.value)}
                          placeholder="Or paste URL here..."
                          className={inputCls}
                        />
                        {form.image && (
                          <button
                            type="button"
                            onClick={() => set('image', '')}
                            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-error transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>

                    {form.image && (
                      <div className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 aspect-video shadow-sm group">
                        <img
                          src={form.image}
                          alt="Cover preview"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          <p className="text-[10px] text-white/70 font-mono truncate">{form.image}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </Field>

                <Field label="Reading Time" htmlFor="read_time" hint="Auto-calculated from your content — edit if needed.">
                  <input
                    id="read_time"
                    type="text"
                    value={form.read_time}
                    onChange={(e) => set('read_time', e.target.value)}
                    placeholder="5 min read"
                    className={inputCls}
                  />
                </Field>

                {/* Tag pill input */}
                <Field label="Keywords / Tags" htmlFor="tags" hint="Type a keyword and press Enter to add it.">
                  <TagInput value={form.tags} onChange={(tags) => set('tags', tags)} />
                </Field>

                {/* Target Websites Selection */}
                <Field label="Publish Destinations" hint="Choose which websites should display this blog post:">
                  <div className="space-y-3 mt-1.5 p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/70 dark:bg-gray-900/60">
                    <label className="flex items-start gap-3 cursor-pointer select-none group">
                      <input
                        type="checkbox"
                        checked={form.target_sites.includes('yellowagency') || form.target_sites.includes('all')}
                        onChange={(e) => {
                          const isChecked = e.target.checked;
                          const current = form.target_sites.filter(s => s !== 'all');
                          const updated = isChecked
                            ? [...new Set([...current, 'yellowagency'])]
                            : current.filter(s => s !== 'yellowagency');
                          set('target_sites', updated);
                        }}
                        className="mt-0.5 w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary focus:ring-2 cursor-pointer"
                      />
                      <div>
                        <span className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                          Yellow Agency
                        </span>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Show this article on Yellow Agency (Marketing & Client site)
                        </p>
                      </div>
                    </label>

                    <div className="border-t border-gray-200 dark:border-gray-800" />

                    <label className="flex items-start gap-3 cursor-pointer select-none group">
                      <input
                        type="checkbox"
                        checked={form.target_sites.includes('yellowtools') || form.target_sites.includes('all')}
                        onChange={(e) => {
                          const isChecked = e.target.checked;
                          const current = form.target_sites.filter(s => s !== 'all');
                          const updated = isChecked
                            ? [...new Set([...current, 'yellowtools'])]
                            : current.filter(s => s !== 'yellowtools');
                          set('target_sites', updated);
                        }}
                        className="mt-0.5 w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary focus:ring-2 cursor-pointer"
                      />
                      <div>
                        <span className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                          Yellow Tools
                        </span>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Show this article on Yellow Tools (Knowledge Hub & Guides)
                        </p>
                      </div>
                    </label>
                  </div>
                </Field>

              </div>

              {/* Mobile save button */}
              <button
                form="blog-editor-form"
                type="submit"
                disabled={saving}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-primary text-white rounded-xl font-semibold text-sm hover:bg-primary/90 transition-all shadow-md shadow-primary/20 disabled:opacity-60 disabled:cursor-not-allowed lg:hidden"
              >
                {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                {saving ? 'Saving…' : isEditing ? 'Save Changes' : 'Save Post'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminBlogEditor;
