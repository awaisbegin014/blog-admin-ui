import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Share2, BookOpen, Tag, ArrowRight } from 'lucide-react';
import anime from 'animejs';
import { fetchBlogBySlug, fetchBlogs } from '../lib/blogService';
import type { DbBlogPost } from '../types';

// ── Loading skeleton ──────────────────────────────────────────────────────────
// A minimal, shape-matching skeleton specifically for the full post layout.
// Keeps the layout stable while the post loads (prevents CLS).
const PostSkeleton: React.FC = () => (
  <div className="min-h-screen bg-white dark:bg-black" aria-busy="true" aria-label="Loading article">
    {/* Progress bar placeholder */}
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-800 z-50" />

    {/* Hero */}
    <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5 dark:bg-black dark:bg-none">
      <div className="container">
        {/* Back button */}
        <div className="h-5 w-28 rounded-md bg-gray-200 dark:bg-gray-700 animate-pulse mb-8" />
        <div className="max-w-5xl mx-auto space-y-4">
          <div className="h-7 w-24 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
          <div className="space-y-3">
            <div className="h-10 w-full rounded-lg bg-gray-200 dark:bg-gray-700 animate-pulse" />
            <div className="h-10 w-3/4 rounded-lg bg-gray-200 dark:bg-gray-700 animate-pulse" />
          </div>
          <div className="space-y-2">
            <div className="h-5 w-full rounded-md bg-gray-200 dark:bg-gray-700 animate-pulse" />
            <div className="h-5 w-5/6 rounded-md bg-gray-200 dark:bg-gray-700 animate-pulse" />
          </div>
          <div className="flex gap-4 pt-2">
            <div className="h-8 w-24 rounded-md bg-gray-200 dark:bg-gray-700 animate-pulse" />
            <div className="h-8 w-20 rounded-md bg-gray-200 dark:bg-gray-700 animate-pulse" />
          </div>
          <div className="h-10 w-36 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
        </div>
      </div>
    </section>

    {/* Featured image placeholder */}
    <section className="relative">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="h-96 md:h-[500px] rounded-2xl bg-gray-200 dark:bg-gray-700 animate-pulse" />
        </div>
      </div>
    </section>

    {/* Content area placeholder */}
    <section className="section-padding">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar skeleton */}
            <div className="lg:col-span-1 space-y-4">
              <div className="h-6 w-32 rounded-md bg-gray-200 dark:bg-gray-700 animate-pulse" />
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-4 w-full rounded-md bg-gray-200 dark:bg-gray-700 animate-pulse" />
              ))}
            </div>
            {/* Article skeleton */}
            <div className="lg:col-span-3 space-y-4">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="h-4 rounded-md bg-gray-200 dark:bg-gray-700 animate-pulse"
                  style={{ width: i % 3 === 2 ? '60%' : '100%' }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

// ── Not-found state ───────────────────────────────────────────────────────────
const PostNotFound: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <div className="min-h-screen bg-white dark:bg-black pt-24 flex items-center justify-center">
    <div className="text-center max-w-md mx-auto px-4">
      <div className="text-6xl mb-6">🔍</div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
        Post not found
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        This article may have been moved or removed. Browse all posts to find what you&apos;re looking for.
      </p>
      <button onClick={onBack} className="btn btn-primary inline-flex items-center gap-2">
        <ArrowLeft className="w-4 h-4" />
        Back to Blogs
      </button>
    </div>
  </div>
);

// ── Main component ─────────────────────────────────────────────────────────────
const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  // ── State ────────────────────────────────────────────────────────────────
  const [blog, setBlog] = useState<DbBlogPost | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<DbBlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  // ── Fetch post + related on slug change ──────────────────────────────────
  useEffect(() => {
    if (!slug) {
      setNotFound(true);
      setLoading(false);
      return;
    }

    let cancelled = false;

    const load = async () => {
      setLoading(true);
      setNotFound(false);
      setBlog(null);

      const [post, allPosts] = await Promise.all([
        fetchBlogBySlug(slug),
        fetchBlogs(),
      ]);

      if (cancelled) return;

      if (!post) {
        setNotFound(true);
      } else {
        setBlog(post);
        // Related: up to 3 other posts
        setRelatedBlogs(allPosts.filter((p) => p.slug !== slug).slice(0, 3));
      }

      setLoading(false);
    };

    load();
    return () => { cancelled = true; };
  }, [slug]);

  // ── Entrance animation once post is loaded ───────────────────────────────
  useEffect(() => {
    if (!blog) return;

    anime({
      targets: '.blog-post-header',
      opacity: [0, 1],
      translateY: [50, 0],
      duration: 1000,
      easing: 'easeOutExpo',
      complete: () => {
        anime({
          targets: '.blog-post-content',
          opacity: [0, 1],
          translateY: [30, 0],
          duration: 800,
          easing: 'easeOutExpo',
        });
      },
    });
  }, [blog]);

  // ── Reading progress bar ─────────────────────────────────────────────────
  useEffect(() => {
    if (!blog) return;

    const handleScroll = () => {
      const article = document.querySelector('.blog-article');
      if (article) {
        const articleTop = (article as HTMLElement).offsetTop;
        const articleHeight = (article as HTMLElement).offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollTop = window.scrollY;

        const progress = Math.min(
          Math.max((scrollTop - articleTop + windowHeight) / articleHeight, 0),
          1,
        );
        setReadingProgress(progress * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [blog]);

  // ── Share handler ────────────────────────────────────────────────────────
  const handleShare = useCallback(async () => {
    if (!blog) return;
    try {
      if (navigator.share) {
        await navigator.share({
          title: blog.title,
          text: blog.excerpt,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } catch {
      await navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  }, [blog]);

  const handleBack = () => navigate('/blogs');

  // ── Guards ───────────────────────────────────────────────────────────────
  if (loading) return <PostSkeleton />;
  if (notFound || !blog) return <PostNotFound onBack={handleBack} />;

  // ── Full post render ─────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-white dark:bg-black">

      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-800 z-50">
        <div
          className="h-full bg-primary transition-all duration-150 ease-out"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5 dark:bg-black dark:bg-none">
        <div className="container blog-post-header opacity-0" ref={containerRef}>

          {/* Back Button */}
          <button
            onClick={handleBack}
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Blogs
          </button>

          <div className="max-w-5xl mx-auto">
            {/* Category Badge */}
            <div className="mb-6">
              <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                {blog.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
              <span className="heading">{blog.title}</span>
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {blog.excerpt}
            </p>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-gray-500 dark:text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{blog.read_time}</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                <span>{blog.content.trim().split(/\s+/).length} words</span>
              </div>
            </div>

            {/* Share */}
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <Share2 className="w-4 h-4" />
              <span>Share Article</span>
            </button>
          </div>
        </div>
      </section>

      {/* ── Featured Image ─────────────────────────────────────────────────── */}
      <section className="relative">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Article Content ────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-32 space-y-8">

                  {/* Table of Contents */}
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <BookOpen className="w-5 h-5" />
                      Table of Contents
                    </h3>
                    <div className="space-y-2 text-sm">
                      {blog.content.match(/<h[2-3][^>]*>(.*?)<\/h[2-3]>/g)?.map((heading, index) => {
                        const text = heading.replace(/<[^>]*>/g, '');
                        const level = heading.match(/<h([2-3])/)?.[1];
                        return (
                          <div
                            key={index}
                            className={`text-gray-600 dark:text-gray-300 hover:text-primary cursor-pointer transition-colors ${
                              level === '3' ? 'ml-4' : ''
                            }`}
                          >
                            {text}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <Tag className="w-5 h-5" />
                      Tags
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {blog.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm hover:bg-primary/20 transition-colors cursor-pointer"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Article */}
              <div className="lg:col-span-3">
                <article className="blog-article blog-post-content opacity-0 prose prose-lg dark:prose-invert max-w-none">
                  <div
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                    className="blog-content"
                  />
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Articles ───────────────────────────────────────────────── */}
      {relatedBlogs.length > 0 && (
        <section className="section-padding bg-gray-50 dark:bg-gray-900">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                <span className="heading">Related</span>{' '}
                <span className="gradient-text">Articles</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedBlogs.map((relatedBlog) => (
                  <div
                    key={relatedBlog.id}
                    onClick={() => navigate(`/blogs/${relatedBlog.slug}`)}
                    className="cursor-pointer group"
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={relatedBlog.image}
                          alt={relatedBlog.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                            {relatedBlog.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          <span className="heading">{relatedBlog.title}</span>
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-4">
                          {relatedBlog.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {relatedBlog.read_time}
                          </span>
                          <div className="flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-sm font-medium mr-2">Read More</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPost;