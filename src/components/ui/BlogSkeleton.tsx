import React from 'react';

/**
 * BlogSkeleton
 * A pulsing placeholder that matches the exact shape of the blog cards rendered
 * in BlogsPage — prevents layout shift when data loads (CLS < 0.1, skill §3).
 * Uses the project's existing Tailwind design tokens only (no ad-hoc hex).
 */
const BlogSkeleton: React.FC = () => {
  return (
    <div className="cursor-default group" aria-hidden="true">
      <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 h-full">

        {/* ── Image area ───────────────────────────────────────────── */}
        <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-700 animate-pulse">
          {/* Category badge */}
          <div className="absolute top-4 left-4 h-6 w-20 rounded-full bg-gray-300 dark:bg-gray-600" />
        </div>

        {/* ── Card body ─────────────────────────────────────────────── */}
        <div className="p-6 flex flex-col gap-3">

          {/* Meta row: date + read time */}
          <div className="flex items-center gap-4">
            <div className="h-4 w-24 rounded-md bg-gray-200 dark:bg-gray-700 animate-pulse" />
            <div className="h-4 w-16 rounded-md bg-gray-200 dark:bg-gray-700 animate-pulse" />
          </div>

          {/* Title: two lines */}
          <div className="space-y-2">
            <div className="h-5 w-full rounded-md bg-gray-200 dark:bg-gray-700 animate-pulse" />
            <div className="h-5 w-4/5 rounded-md bg-gray-200 dark:bg-gray-700 animate-pulse" />
          </div>

          {/* Excerpt: three lines */}
          <div className="space-y-2">
            <div className="h-4 w-full rounded-md bg-gray-200 dark:bg-gray-700 animate-pulse" />
            <div className="h-4 w-full rounded-md bg-gray-200 dark:bg-gray-700 animate-pulse" />
            <div className="h-4 w-3/5 rounded-md bg-gray-200 dark:bg-gray-700 animate-pulse" />
          </div>

          {/* Tags */}
          <div className="flex gap-2">
            <div className="h-6 w-16 rounded-md bg-gray-200 dark:bg-gray-700 animate-pulse" />
            <div className="h-6 w-20 rounded-md bg-gray-200 dark:bg-gray-700 animate-pulse" />
          </div>

          {/* Footer: author */}
          <div className="flex items-center gap-2 mt-auto pt-2">
            <div className="h-4 w-4 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
            <div className="h-4 w-28 rounded-md bg-gray-200 dark:bg-gray-700 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSkeleton;
