import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import anime from 'animejs';
import { fetchHomepageBlogs } from '../lib/blogService';
import type { DbBlogPost } from '../types';
import { Loader2 } from 'lucide-react';

const BlogsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rightSectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
  const [homepageBlogs, setHomepageBlogs] = React.useState<DbBlogPost[]>([]);
  const [loading, setLoading] = React.useState(true);

  const { scrollYProgress } = useScroll({
    target: rightSectionRef,
    offset: ["start end", "end start"]
  });

  // Fetch from Supabase
  useEffect(() => {
    async function loadHomepage() {
      setLoading(true);
      const data = await fetchHomepageBlogs();
      // This will ALWAYS return 8 blogs (featured first, then most recent as fill-in)
      setHomepageBlogs(data);
      setLoading(false);
    }
    loadHomepage();
  }, []);

  // Transform values for scroll animations
  const leftColumnY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const rightColumnY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate the section title and description
            anime({
              targets: '.blogs-section-header',
              opacity: [0, 1],
              translateY: [30, 0],
              duration: 800,
              easing: 'easeOutExpo',
              // complete: () => {
              //   // Animate blog cards with stagger
              //   anime({
              //     targets: '.blog-card-small',
              //     opacity: [0, 1],
              //     translateY: [30, 0],
              //     scale: [0.95, 1],
              //     delay: anime.stagger(100, { start: 200 }),
              //     duration: 600,
              //     easing: 'easeOutExpo'
              //   });
              // }
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleBlogClick = (slug: string) => {
    navigate(`/blogs/${slug}`);
  };

  const handleExploreMore = () => {
    navigate('/blogs');
  };

  // Split blogs into 3 columns
  const leftColumn = homepageBlogs.slice(0, 2);
  const middleColumn = homepageBlogs.slice(2, 5);
  const rightColumn = homepageBlogs.slice(5, 8);

  return (
    <section id="blogs" className="section-padding bg-gray-50 dark:bg-gray-900 pb-0" ref={containerRef}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Content */}
          <div className="blogs-section-header opacity-0">
            <div className="mb-4">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                FEATURED INSIGHTS
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
              <span className="heading">Stories of our</span>
              <br />
              <span className="heading">transformations across</span>
              <br />
              <span className="heading">Services and</span>{' '}
              <span className="gradient-text">Industries</span>
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              From Concept to Completion
            </p>
            
            <button
              onClick={handleExploreMore}
              className="btn bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Explore More
            </button>
          </div>

          {/* Right Side - Blog Cards Grid / Skeleton */}
          <div ref={rightSectionRef} className="relative h-[700px] overflow-visible lg:h-[800px]">
            {loading ? (
              <div className="flex items-center justify-center h-full">
                <div className="flex flex-col items-center gap-4 text-gray-400">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-ping opacity-25" />
                    <Loader2 className="w-10 h-10 animate-spin text-primary relative z-10" />
                  </div>
                  <p className="text-sm font-bold tracking-[0.2em] uppercase opacity-50">
                    Loading Insights
                  </p>
                </div>
              </div>
            ) : homepageBlogs.length === 0 ? (
              <div className="flex items-center justify-center h-full border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-3xl">
                 <p className="text-gray-400 font-medium italic">No articles found.</p>
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-4 h-full">
              {/* Left Column - Moves Up */}
              <motion.div 
                style={{ y: leftColumnY }}
                className="flex flex-col gap-4 mt-52"
              >
                {leftColumn.map((blog) => (
                  <div
                    key={blog.id}
                    onClick={() => handleBlogClick(blog.slug)}
                    className="blog-card-small opacity-100 cursor-pointer group relative overflow-hidden rounded-2xl h-[180px] bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                  >
                    <div className="absolute inset-0">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    </div>
                    
                    <div className="absolute inset-0 p-4 flex flex-col justify-end">
                      <div className="mb-2">
                        <span className="bg-primary text-white px-2 py-1 rounded-md text-xs font-medium">
                          Blogs
                        </span>
                      </div>
                      <h3 className="text-white font-bold text-sm leading-tight line-clamp-2 mb-1">
                        {blog.title}
                      </h3>
                      <p className="text-white/80 text-xs line-clamp-2">
                        {blog.excerpt}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Middle Column - Stays in Place */}
              <div className="flex flex-col gap-4 mt-8">
                {middleColumn.map((blog) => (
                  <div
                    key={blog.id}
                    onClick={() => handleBlogClick(blog.slug)}
                    className="blog-card-small opacity-100 cursor-pointer group relative overflow-hidden rounded-2xl h-[180px] bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                  >
                    <div className="absolute inset-0">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    </div>
                    
                    <div className="absolute inset-0 p-4 flex flex-col justify-end">
                      <div className="mb-2">
                        <span className="bg-primary text-white px-2 py-1 rounded-md text-xs font-medium">
                          Blogs
                        </span>
                      </div>
                      <h3 className="text-white font-bold text-sm leading-tight line-clamp-2 mb-1">
                        {blog.title}
                      </h3>
                      <p className="text-white/80 text-xs line-clamp-2">
                        {blog.excerpt}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column - Moves Down */}
              <motion.div 
                style={{ y: rightColumnY }}
                className="flex flex-col gap-4 -mt-8"
              >
                {rightColumn.map((blog) => (
                  <div
                    key={blog.id}
                    onClick={() => handleBlogClick(blog.slug)}
                    className="blog-card-small opacity-100 cursor-pointer group relative overflow-hidden rounded-2xl h-[180px] bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                  >
                    <div className="absolute inset-0">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    </div>
                    
                    <div className="absolute inset-0 p-4 flex flex-col justify-end">
                      <div className="mb-2">
                        <span className="bg-primary text-white px-2 py-1 rounded-md text-xs font-medium">
                          Blogs
                        </span>
                      </div>
                      <h3 className="text-white font-bold text-sm leading-tight line-clamp-2 mb-1">
                        {blog.title}
                      </h3>
                      <p className="text-white/80 text-xs line-clamp-2">
                        {blog.excerpt}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;