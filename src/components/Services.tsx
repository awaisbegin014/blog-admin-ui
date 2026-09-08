import React, { useRef, useEffect, useState } from "react";
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
} from "lucide-react";
import anime from "animejs";
import RotatingText from "./ui/RotatingText";

const iconComponents = {
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

const Services: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [currentLanguage, setCurrentLanguage] = useState("en");

  // initially 8 services
  const [visibleServices, setVisibleServices] = useState(services.slice(0, 8));

  // Detect language changes
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

  // Animate title + initial cards on scroll into view
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
            anime({
              targets: ".service-card",
              opacity: [0, 1],
              translateY: [40, 0],
              delay: anime.stagger(80, { start: 200 }),
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

  // Animate only new cards when "Show More" reveals them
  useEffect(() => {
    anime({
      targets: ".service-card.new",
      opacity: [0, 1],
      translateY: [40, 0],
      delay: anime.stagger(100),
      easing: "easeOutExpo",
      duration: 700,
    });
  }, [visibleServices]);

  const getIcon = (iconName: string) => {
    const IconComponent = iconComponents[iconName as keyof typeof iconComponents];
    return IconComponent ? (
      <IconComponent className="w-10 h-10 text-primary mb-4 transition-all duration-300 group-hover:text-white group-hover:scale-110" />
    ) : null;
  };

  const currentWords = impactWords[currentLanguage as keyof typeof impactWords];

  // Handle service card click
  const handleServiceClick = (service: any) => {
    const slug = service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '');
    navigate(`/service/${slug}`);
  };

  // show more button
  const showMore = () => {
    const next = services.slice(visibleServices.length, services.length);
    setVisibleServices([...visibleServices, ...next]);
  };

  // show less button (back to 8)
  const showLess = () => {
    setVisibleServices(services.slice(0, 8));
  };

  return (
    <section
      id="services"
      className="section-padding bg-white dark:bg-black relative overflow-hidden"
      ref={containerRef}
    >
      <div className="container relative z-10">
        {/* Heading - full width, on top, centered */}
        <div className="services-title opacity-0 text-center max-w-4xl mx-auto mb-16">
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
        </div>

        {/* Services grid - below the heading */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {visibleServices.map((service, idx) => (
            <div
              key={service.title}
              className={`service-card relative min-h-[320px] flex flex-col justify-start p-8 rounded-xl opacity-100 overflow-hidden
              bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800
              bg-[length:220%_220%] bg-[position:0%_0%] hover:bg-[position:100%_100%]
              hover:bg-gradient-to-br hover:from-primary hover:via-primary hover:to-black
              hover:border-transparent
              transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/30
              cursor-pointer group ${idx >= 8 ? "new" : ""}`}
              onClick={() => handleServiceClick(service)}
            >
              {/* Index badge */}
              <span className="absolute top-6 right-7 text-3xl font-black text-gray-100 dark:text-gray-800 group-hover:text-white/20 transition-colors duration-500 select-none">
                {String(idx + 1).padStart(2, "0")}
              </span>

              <div className="relative z-10 flex flex-col flex-grow">
                {getIcon(service.icon)}
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-white transition-colors duration-500 text-gray-900 dark:text-white cursor-pointer">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 group-hover:text-white/90 transition-colors duration-500 flex-grow">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center text-primary group-hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-sm font-medium">Learn More</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less button */}
        <div className="mt-12 text-center">
          {visibleServices.length < services.length ? (
            <button
              onClick={showMore}
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
            >
              Show More
            </button>
          ) : (
            <button
              onClick={showLess}
              className="px-6 py-3 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition"
            >
              Show Less
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
