import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight, ArrowLeft, Search, Filter } from 'lucide-react';
import anime from 'animejs';
import { fetchBlogs, fetchCategories } from '../lib/blogService';
import type { DbBlogPost } from '../types';
import BlogSkeleton from './ui/BlogSkeleton';

const POSTS_PER_PAGE = 6;
// How many skeletons to show while loading — matches the grid count
const SKELETON_COUNT = 6;

const BlogsPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef<HTMLDivElement>(null);

  // ── URL-driven page state ───────────────────────────────────────────────────
  const currentPage = parseInt(searchParams.get('page') || '1', 10);

  // ── Data state ─────────────────────────────────────────────────────────────
  const [allBlogs, setAllBlogs] = useState<DbBlogPost[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // ── Filter / search state ───────────────────────────────────────────────────
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // ── Fetch on mount ──────────────────────────────────────────────────────────
  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      setLoading(true);
      setError(null);

      const [blogs, cats] = await Promise.all([fetchBlogs(), fetchCategories()]);

      if (cancelled) return;

      if (blogs.length === 0 && cats.length === 0) {
        // Both returned empty — likely a connection or config error
        setError('Could not load blog posts. Please check your connection and try again.');
      }

      setAllBlogs(blogs);
      setCategories(cats);
      setLoading(false);
    };

    load();
    return () => { cancelled = true; };
  }, []);

  // ── Header entrance animation (runs once after first load) ──────────────────
  useEffect(() => {
    if (loading) return;
    anime({
      targets: '.blogs-page-header',
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 800,
      easing: 'easeOutExpo',
    });
  }, [loading]);

  // ── Derived: filter + paginate ──────────────────────────────────────────────
  const allFilteredBlogs = allBlogs.filter((blog) => {
    const matchesCategory =
      selectedCategory === 'All' || blog.category === selectedCategory;
    const lc = searchTerm.toLowerCase();
    const matchesSearch =
      !searchTerm ||
      blog.title.toLowerCase().includes(lc) ||
      blog.excerpt.toLowerCase().includes(lc) ||
      blog.tags.some((tag) => tag.toLowerCase().includes(lc));
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(allFilteredBlogs.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPageBlogs = allFilteredBlogs.slice(startIndex, startIndex + POSTS_PER_PAGE);

  // ── Card stagger animation whenever the visible page changes ────────────────
  useEffect(() => {
    if (loading || currentPageBlogs.length === 0) return;
    anime({
      targets: '.blog-card-page',
      opacity: [0, 1],
      translateY: [50, 0],
      scale: [0.9, 1],
      delay: anime.stagger(100),   // 100ms stagger — skill §7 guideline
      duration: 600,
      easing: 'easeOutExpo',
    });
  }, [currentPageBlogs, loading]);

  // ── Handlers ────────────────────────────────────────────────────────────────
  const handleBlogClick = (slug: string) => navigate(`/blogs/${slug}`);

  const handlePageNavigation = (page: number) => {
    setSearchParams({ page: page.toString() });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    setSearchParams({ page: '1' });
  };

  const handleClearFilters = useCallback(() => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSearchParams({ page: '1' });
  }, [setSearchParams]);

  // ── Render: error state ─────────────────────────────────────────────────────
  if (error) {
    return (
      <div className="min-h-screen bg-white dark:bg-black pt-24 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-5xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            Something went wrong
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="btn btn-primary"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // ── Render: main layout ─────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-white dark:bg-black pt-24">

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10">
        <div className="container blogs-page-header opacity-0" ref={containerRef}>
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-4">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                INSIGHTS &amp; EXPERTISE
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              <span className="heading">Our</span>{' '}
              <span className="gradient-text">Blog</span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Discover insights, trends, and best practices in technology, marketing, and business growth
            </p>

            {/* Search + Filter — hidden while loading so they don't show empty categories */}
            {!loading && (
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
                {/* Search Bar */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-3 w-80 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex items-center gap-2">
                  <Filter className="w-5 h-5 text-gray-500" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => handleCategoryFilter(e.target.value)}
                    className="px-4 py-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  >
                    <option value="All">All Categories</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Blog Cards Grid ─────────────────────────────────────────────────── */}
      <section className="section-padding pb-24">
        <div className="container">

          {/* Loading: skeleton grid */}
          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {Array.from({ length: SKELETON_COUNT }).map((_, i) => (
                <BlogSkeleton key={i} />
              ))}
            </div>
          )}

          {/* Loaded: blog cards */}
          {!loading && currentPageBlogs.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {currentPageBlogs.map((blog) => (
                <div
                  key={blog.id}
                  onClick={() => handleBlogClick(blog.slug)}
                  className="blog-card-page opacity-0 cursor-pointer group"
                >
                  <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 dark:border-gray-800 h-full">

                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                          {blog.category}
                        </span>
                      </div>

                      {/* Featured Badge */}
                      {blog.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
                            Featured
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col h-full">
                      {/* Meta */}
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {new Date(blog.date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{blog.read_time}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        <span className="heading">{blog.title}</span>
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                        {blog.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {blog.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-md text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Author + Read More */}
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {blog.author}
                          </span>
                        </div>
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
          )}

          {/* Empty state — no results after filtering */}
          {!loading && currentPageBlogs.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                No articles found
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Try adjusting your search terms or category filter
              </p>
              <button onClick={handleClearFilters} className="btn btn-primary">
                Clear Filters
              </button>
            </div>
          )}

          {/* ── Pagination ───────────────────────────────────────────────────── */}
          {!loading && currentPageBlogs.length > 0 && totalPages > 1 && (
            <div className="flex justify-center items-center gap-4">
              {currentPage > 1 && (
                <button
                  onClick={() => handlePageNavigation(currentPage - 1)}
                  className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>
              )}

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageNavigation(page)}
                    className={`w-10 h-10 rounded-full transition-colors ${page === currentPage
                        ? 'bg-primary text-white'
                        : 'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              {currentPage < totalPages && (
                <button
                  onClick={() => handlePageNavigation(currentPage + 1)}
                  className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
                >
                  <span>Next</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogsPage;