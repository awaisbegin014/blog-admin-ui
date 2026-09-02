import React, { useState } from 'react';
import AdminBlogList from './AdminBlogList';
import AdminBlogEditor from './AdminBlogEditor';
import type { DbBlogPost } from '../../types';

/**
 * AdminPage
 *
 * Controls which admin view is active without touching the router.
 * Mount this at a protected route such as `/admin` inside App.tsx.
 *
 * View flow:
 *   'list'   → AdminBlogList  (dashboard, all posts)
 *   'create' → AdminBlogEditor with no existingBlog
 *   'edit'   → AdminBlogEditor with existingBlog populated
 */
type View = 'list' | 'create' | 'edit';

const AdminPage: React.FC = () => {
  const [view, setView]             = useState<View>('list');
  const [editTarget, setEditTarget] = useState<DbBlogPost | null>(null);

  const handleEdit = (blog: DbBlogPost) => {
    setEditTarget(blog);
    setView('edit');
  };

  const handleCreateNew = () => {
    setEditTarget(null);
    setView('create');
  };

  const handleEditorSuccess = (_blog: DbBlogPost) => {
    setView('list');
    setEditTarget(null);
  };

  const handleEditorCancel = () => {
    setView('list');
    setEditTarget(null);
  };

  if (view === 'create' || view === 'edit') {
    return (
      <AdminBlogEditor
        existingBlog={view === 'edit' ? editTarget : null}
        onSuccess={handleEditorSuccess}
        onCancel={handleEditorCancel}
      />
    );
  }

  return (
    <AdminBlogList
      onCreateNew={handleCreateNew}
      onEdit={handleEdit}
    />
  );
};

export default AdminPage;
