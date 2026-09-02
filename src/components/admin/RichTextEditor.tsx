import React, { useCallback } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Placeholder from '@tiptap/extension-placeholder';
import CharacterCount from '@tiptap/extension-character-count';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import {
  Bold, Italic, Underline as UnderlineIcon,
  Heading1, Heading2, Heading3,
  List, ListOrdered, Quote,
  AlignLeft, AlignCenter, AlignRight,
  Undo, Redo, Minus,
  Image as ImageIcon, Link as LinkIcon
} from 'lucide-react';

// ── Toolbar button ─────────────────────────────────────────────────────────────
const ToolBtn: React.FC<{
  onClick: () => void;
  active?: boolean;
  disabled?: boolean;
  title: string;
  children: React.ReactNode;
}> = ({ onClick, active, disabled, title, children }) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    title={title}
    aria-label={title}
    aria-pressed={active}
    className={`
      p-1 rounded-lg transition-all text-sm
      ${active
        ? 'bg-primary text-white shadow-sm shadow-primary/30'
        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
      }
      ${disabled ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}
    `}
  >
    {children}
  </button>
);

// ── Divider between toolbar groups ────────────────────────────────────────────
const Divider = () => (
  <div className="w-px h-5 bg-gray-200 dark:bg-gray-700 mx-0.5 self-center shrink-0" />
);

// ── Props ─────────────────────────────────────────────────────────────────────
interface RichTextEditorProps {
  value: string;
  onChange: (html: string) => void;
  onImageUpload?: (file: File) => Promise<string | null>;
  placeholder?: string;
  minHeight?: string;
}

// ── Editor component ──────────────────────────────────────────────────────────
const RichTextEditor: React.FC<RichTextEditorProps> = ({
  value,
  onChange,
  onImageUpload,
  placeholder = 'Start writing your article here…',
  minHeight = '380px',
}) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] },
        bulletList:  { keepMarks: true, keepAttributes: false },
        orderedList: { keepMarks: true, keepAttributes: false },
      }),
      Underline,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Placeholder.configure({ placeholder }),
      CharacterCount,
      Image.configure({
        HTMLAttributes: {
          class: 'blog-image rounded-xl shadow-lg my-8',
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-primary underline cursor-pointer',
        },
      }),
    ],
    content: value || '',
    editorProps: {
      attributes: {
        class: 'blog-content prose prose-sm dark:prose-invert max-w-none focus:outline-none px-5 py-4',
        style: `min-height: ${minHeight}`,
      },
    },
    onUpdate: ({ editor }) => {
      // Returns HTML string — fully compatible with existing dangerouslySetInnerHTML rendering
      onChange(editor.getHTML());
    },
  });

  const cmd = useCallback(
    (fn: () => boolean) => { fn(); },
    [],
  );

  const handleImageClick = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file && onImageUpload && editor) {
        const url = await onImageUpload(file);
        if (url) {
          editor.chain().focus().setImage({ src: url }).run();
        }
      }
    };
    input.click();
  };

  const setLink = useCallback(() => {
    if (!editor) return;
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('URL', previousUrl);

    // cancelled
    if (url === null) return;

    // empty
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }

    // update link
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  }, [editor]);

  if (!editor) return null;

  const wordCount = editor.storage.characterCount.words?.() ?? 0;
  const charCount = editor.storage.characterCount.characters?.() ?? 0;

  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-900 focus-within:ring-2 focus-within:ring-primary/50 focus-within:border-primary transition-all">

      {/* ── Toolbar ─────────────────────────────────────────────────────────── */}
      <div className="flex items-center gap-0 px-3 py-1.5 border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/80 overflow-x-auto scrollbar-hide">

        {/* History */}
        <ToolBtn
          title="Undo"
          onClick={() => cmd(() => editor.chain().focus().undo().run())}
          disabled={!editor.can().undo()}
        >
          <Undo className="w-4 h-4" />
        </ToolBtn>
        <ToolBtn
          title="Redo"
          onClick={() => cmd(() => editor.chain().focus().redo().run())}
          disabled={!editor.can().redo()}
        >
          <Redo className="w-4 h-4" />
        </ToolBtn>

        <Divider />

        {/* Headings */}
        <ToolBtn
          title="Heading 1 — Big title"
          onClick={() => cmd(() => editor.chain().focus().toggleHeading({ level: 1 }).run())}
          active={editor.isActive('heading', { level: 1 })}
        >
          <Heading1 className="w-4 h-4" />
        </ToolBtn>
        <ToolBtn
          title="Heading 2 — Section title"
          onClick={() => cmd(() => editor.chain().focus().toggleHeading({ level: 2 }).run())}
          active={editor.isActive('heading', { level: 2 })}
        >
          <Heading2 className="w-4 h-4" />
        </ToolBtn>
        <ToolBtn
          title="Heading 3 — Sub-section"
          onClick={() => cmd(() => editor.chain().focus().toggleHeading({ level: 3 }).run())}
          active={editor.isActive('heading', { level: 3 })}
        >
          <Heading3 className="w-4 h-4" />
        </ToolBtn>

        <Divider />

        {/* Inline formatting */}
        <ToolBtn
          title="Bold"
          onClick={() => cmd(() => editor.chain().focus().toggleBold().run())}
          active={editor.isActive('bold')}
        >
          <Bold className="w-4 h-4" />
        </ToolBtn>
        <ToolBtn
          title="Italic"
          onClick={() => cmd(() => editor.chain().focus().toggleItalic().run())}
          active={editor.isActive('italic')}
        >
          <Italic className="w-4 h-4" />
        </ToolBtn>
        <ToolBtn
          title="Underline"
          onClick={() => cmd(() => editor.chain().focus().toggleUnderline().run())}
          active={editor.isActive('underline')}
        >
          <UnderlineIcon className="w-4 h-4" />
        </ToolBtn>

        <Divider />

        {/* Lists */}
        <ToolBtn
          title="Bullet list"
          onClick={() => cmd(() => editor.chain().focus().toggleBulletList().run())}
          active={editor.isActive('bulletList')}
        >
          <List className="w-4 h-4" />
        </ToolBtn>
        <ToolBtn
          title="Numbered list"
          onClick={() => cmd(() => editor.chain().focus().toggleOrderedList().run())}
          active={editor.isActive('orderedList')}
        >
          <ListOrdered className="w-4 h-4" />
        </ToolBtn>

        <Divider />

        {/* Block level */}
        <ToolBtn
          title="Quote / Callout block"
          onClick={() => cmd(() => editor.chain().focus().toggleBlockquote().run())}
          active={editor.isActive('blockquote')}
        >
          <Quote className="w-4 h-4" />
        </ToolBtn>
        <ToolBtn
          title="Horizontal divider line"
          onClick={() => cmd(() => editor.chain().focus().setHorizontalRule().run())}
        >
          <Minus className="w-4 h-4" />
        </ToolBtn>

        <Divider />

        {/* Alignment */}
        <ToolBtn
          title="Align left"
          onClick={() => cmd(() => editor.chain().focus().setTextAlign('left').run())}
          active={editor.isActive({ textAlign: 'left' })}
        >
          <AlignLeft className="w-4 h-4" />
        </ToolBtn>
        <ToolBtn
          title="Align center"
          onClick={() => cmd(() => editor.chain().focus().setTextAlign('center').run())}
          active={editor.isActive({ textAlign: 'center' })}
        >
          <AlignCenter className="w-4 h-4" />
        </ToolBtn>
        <ToolBtn
          title="Align right"
          onClick={() => cmd(() => editor.chain().focus().setTextAlign('right').run())}
          active={editor.isActive({ textAlign: 'right' })}
        >
          <AlignRight className="w-4 h-4" />
        </ToolBtn>

        <Divider />

        {/* Multimedia */}
        <ToolBtn
          title="Insert Image"
          onClick={handleImageClick}
          disabled={!onImageUpload}
        >
          <ImageIcon className="w-4 h-4" />
        </ToolBtn>
        <ToolBtn
          title="Add Link"
          onClick={setLink}
          active={editor.isActive('link')}
        >
          <LinkIcon className="w-4 h-4" />
        </ToolBtn>
      </div>

      {/* ── Editable area ────────────────────────────────────────────────────── */}
      <EditorContent editor={editor} />

      {/* ── Status bar ───────────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between px-4 py-2 border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/80">
        <span className="text-xs text-gray-400 dark:text-gray-500">
          {editor.isActive('heading', { level: 1 }) && 'Heading 1'}
          {editor.isActive('heading', { level: 2 }) && 'Heading 2'}
          {editor.isActive('heading', { level: 3 }) && 'Heading 3'}
          {editor.isActive('paragraph') && 'Paragraph'}
          {editor.isActive('blockquote') && 'Quote'}
          {editor.isActive('bulletList') && 'Bullet list'}
          {editor.isActive('orderedList') && 'Numbered list'}
        </span>
        <span className="text-xs text-gray-400 dark:text-gray-500">
          {wordCount} word{wordCount !== 1 ? 's' : ''} · {charCount} chars
        </span>
      </div>
    </div>
  );
};

export default RichTextEditor;
