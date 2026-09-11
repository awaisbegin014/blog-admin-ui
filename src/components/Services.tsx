import React, { useRef, useEffect, useState, useCallback } from "react";
import { services } from "../data/content";
import { useNavigate } from "react-router-dom";
import {
  Code,
  Blocks,
  Smartphone,
  Gauge,
  Layers,
  BarChart,
  Shield,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import anime from "animejs";
import RotatingText from "./ui/RotatingText";
import { serviceImages } from "./ui/ServiceArt";

const iconComponents: Record<string, React.ElementType> = {
  Code,
  Blocks,
  Smartphone,
  Gauge,
  Layers,
  BarChart,
  Shield,
  Users,
};

const impactWords = {
  en: ["impact", "innovation", "excellence", "success", "growth", "future", "progress"],
  de: ["Wirkung", "Innovation", "Exzellenz", "Erfolg", "Wachstum", "Zukunft", "Fortschritt"],
};

interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  originalIndex: number;
}

const Services: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isAnimatingRef = useRef(false);
  const navigate = useNavigate();

  const [currentLanguage, setCurrentLanguage] = useState("en");

  // Keep original index for display (01, 02, etc.)
  const initialItems: ServiceItem[] = services.map((s, idx) => ({
    ...s,
    originalIndex: idx + 1,
  }));

  const [items, setItems] = useState<ServiceItem[]>(initialItems);
  const [cardWidth, setCardWidth] = useState(0);
  const [offset, setOffset] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [dragStartX, setDragStartX] = useState<number | null>(null);

  const gap = 32; // 32px gap (matches original gap-8)
  const stepWidth = cardWidth + gap;

  // Language detection
  useEffect(() => {
    const detectLanguage = () => {
      const germanText =
        document.querySelector('[data-lang="de"]') ||
        document.body.textContent?.includes("Dienstleistungen") ||
        document.body.textContent?.includes("Über uns");
      setCurrentLanguage(germanText ? "de" : "en");
    };
    detectLanguage();
    const observer = new MutationObserver(detectLanguage);
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    return () => observer.disconnect();
  }, [currentLanguage]);

  // Responsive dimension calculation
  useEffect(() => {
    const updateDimensions = () => {
      if (!sliderRef.current) return;
      const width = sliderRef.current.clientWidth;

      // Decide card count off the viewport width, not the slider's own width —
      // the slider sits inside a max-w-7xl container, so its width is capped
      // well below 1280px even on very large screens, and the "4 cards" tier
      // would never be reached if measured against itself.
      const viewportWidth = window.innerWidth;
      let count = 4;
      if (viewportWidth < 640) count = 1;
      else if (viewportWidth < 1024) count = 2;
      else if (viewportWidth < 1280) count = 3;
      else count = 4;

      const computedWidth = (width - (count - 1) * gap) / count;
      setCardWidth(computedWidth);
    };

    updateDimensions();

    const resizeObserver = new ResizeObserver(updateDimensions);
    if (sliderRef.current) {
      resizeObserver.observe(sliderRef.current);
    }
    window.addEventListener("resize", updateDimensions);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  // Title entrance animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: ".services-title",
              opacity: [0, 1],
              translateY: [30, 0],
              easing: "easeOutExpo",
              duration: 800,
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Slide left: leftmost card disappears, new card appears from right
  const slideNext = useCallback(() => {
    if (isAnimatingRef.current || cardWidth <= 0) return;
    isAnimatingRef.current = true;
    setIsTransitioning(true);
    setOffset(stepWidth);

    setTimeout(() => {
      // Rotate items: shift first item to the end
      setItems((prev) => [...prev.slice(1), prev[0]]);
      setIsTransitioning(false);
      setOffset(0);
      isAnimatingRef.current = false;
    }, 520); // 500ms transition duration + small margin
  }, [cardWidth, stepWidth]);

  // Slide right (previous)
  const slidePrev = useCallback(() => {
    if (isAnimatingRef.current || cardWidth <= 0) return;
    isAnimatingRef.current = true;

    // Instantly put last item at front and jump offset to stepWidth without transition
    setIsTransitioning(false);
    setOffset(stepWidth);
    setItems((prev) => [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)]);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsTransitioning(true);
        setOffset(0);
        setTimeout(() => {
          setIsTransitioning(false);
          isAnimatingRef.current = false;
        }, 520);
      });
    });
  }, [cardWidth, stepWidth]);

  // Auto-slide loop with a 1-second lag pause between moves
  useEffect(() => {
    if (isHovered || cardWidth <= 0) return;

    // 1000ms lag pause + 520ms animation duration = ~1520ms per cycle
    const interval = setInterval(() => {
      slideNext();
    }, 1520);

    return () => clearInterval(interval);
  }, [isHovered, cardWidth, slideNext]);

  const handleServiceClick = (service: ServiceItem) => {
    const slug = service.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/, "");
    navigate(`/service/${slug}`);
  };

  const getIcon = (iconName: string) => {
    const IconComponent = iconComponents[iconName];
    return IconComponent ? (
      <IconComponent className="w-10 h-10 text-primary transition-all duration-300 group-hover:text-gray-950 dark:group-hover:text-gray-950 group-hover:scale-110" />
    ) : null;
  };

  // Illustration for the card header — falls back to the line icon if a
  // service doesn't have a dedicated illustration yet.
  const getArt = (service: ServiceItem) => {
    const src = serviceImages[service.title];
    return src ? (
      <img
        src={src}
        alt=""
        loading="lazy"
        draggable={false}
        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
      />
    ) : (
      getIcon(service.icon)
    );
  };

  // Touch & Mouse Drag handlers for interactive sliding
  const handleTouchStart = (e: React.TouchEvent) => {
    setDragStartX(e.touches[0].clientX);
    setIsHovered(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (dragStartX !== null) {
      const diff = dragStartX - e.changedTouches[0].clientX;
      if (diff > 50) slideNext();
      else if (diff < -50) slidePrev();
    }
    setDragStartX(null);
    setIsHovered(false);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragStartX(e.clientX);
    setIsHovered(true);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (dragStartX !== null) {
      const diff = dragStartX - e.clientX;
      if (diff > 50) slideNext();
      else if (diff < -50) slidePrev();
    }
    setDragStartX(null);
    setIsHovered(false);
  };

  const currentWords = impactWords[currentLanguage as keyof typeof impactWords];

  return (
    <section
      id="services"
      className="section-padding bg-white dark:bg-black relative overflow-hidden"
      ref={containerRef}
    >
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Heading Section - Original Full Width Centered */}
        <div className="services-title opacity-0 text-center max-w-4xl mx-auto mb-14">
          <h2 className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
            <span className="heading">Our Services - Redefining</span>
            <RotatingText
              texts={currentWords}
              mainClassName="inline-flex"
              elementLevelClassName="text-primary"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={3000}
            />
            <span className="heading">across the globe</span>
          </h2>

          {/* Navigation Controls & Status Indicator */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={slidePrev}
              aria-label="Previous card"
              className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:border-primary hover:text-primary flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 px-3.5 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800/80">
              <span
                className={`w-2 h-2 rounded-full ${
                  isHovered ? "bg-amber-500" : "bg-primary animate-pulse"
                }`}
              />
              <span>{isHovered ? "Paused on Hover" : "Auto-sliding • 1s lag"}</span>
            </div>

            <button
              onClick={slideNext}
              aria-label="Next card"
              className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:border-primary hover:text-primary flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container (Overflow Hidden) */}
        <div
          ref={sliderRef}
          className="w-full overflow-hidden relative py-4 cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setDragStartX(null);
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          {/* Sliding Track */}
          <div
            className="flex items-stretch select-none"
            style={{
              gap: `${gap}px`,
              transform: `translateX(-${offset}px)`,
              transition: isTransitioning
                ? "transform 500ms cubic-bezier(0.25, 1, 0.5, 1)"
                : "none",
            }}
          >
            {items.map((service) => (
              <div
                key={`${service.title}-${service.originalIndex}`}
                style={{
                  width: cardWidth > 0 ? `${cardWidth}px` : "280px",
                  flex: cardWidth > 0 ? `0 0 ${cardWidth}px` : "0 0 280px",
                }}
                className="transition-all duration-300"
              >
                {/* Restored Decent & Professional Card Structure with Original Gradient Hover */}
                <div
                  onClick={() => handleServiceClick(service)}
                  className="service-card relative min-h-[480px] h-full flex flex-col justify-between p-8 rounded-2xl overflow-hidden
                  bg-white dark:bg-gray-900 border-4 border-yellow-400 dark:border-yellow-400 shadow-sm hover:shadow-2xl hover:shadow-primary/25
                  hover:border-yellow-400
                  transition-all duration-300 transform hover:-translate-y-2
                  cursor-pointer group"
                >
                  {/* Vibrant Orange & Yellow Gradient Hover Effect (No Slide, Just Pure Gradient) */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary via-amber-400 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Card Content Body */}
                  <div className="relative z-10 flex flex-col flex-grow">
                    {/* Illustration Panel */}
                    <div className="relative -mx-2 -mt-2 mb-5 h-40 sm:h-44 rounded-xl bg-primary-50 dark:bg-gray-100 flex items-center justify-center px-4 pt-6 pb-3 overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center">{getArt(service)}</div>

                      {/* Watermark Index Badge, painted above the illustration */}
                      <span className="absolute top-2 right-3 text-2xl font-black text-primary/25 select-none">
                        {String(service.originalIndex).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 group-hover:text-gray-950 dark:group-hover:text-gray-950 transition-colors duration-300 text-gray-900 dark:text-white cursor-pointer leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-900 font-medium transition-colors duration-300 flex-grow leading-relaxed line-clamp-4">
                      {service.description}
                    </p>
                  </div>

                  {/* Clean Bottom Action Bar */}
                  <div className="relative z-10 mt-6 pt-4 border-t border-gray-100 dark:border-gray-800 group-hover:border-black/15 dark:group-hover:border-black/15 transition-colors duration-300 flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-widest text-primary group-hover:text-gray-950 dark:group-hover:text-gray-950 transition-colors duration-300">
                      READ MORE
                    </span>
                    <div className="w-8 h-8 rounded-full bg-primary/10 group-hover:bg-gray-950 dark:group-hover:bg-gray-950 flex items-center justify-center text-primary group-hover:text-white transition-all duration-300 group-hover:translate-x-1 shadow-sm">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
