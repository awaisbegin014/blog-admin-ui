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
  const titleRef = useRef<HTMLDivElement>(null);
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

  // Scroll effect on title
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !titleRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollProgress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight));
      if (scrollProgress > 0) {
        const scale = Math.max(0.6, 1 - scrollProgress * 0.4);
        const translateY = scrollProgress * 20;
        titleRef.current.style.transform = `translate(0, ${translateY}%) scale(${scale})`;
        titleRef.current.style.opacity = `${1 - scrollProgress * 0.3}`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate initial cards on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: ".service-card",
              opacity: [0, 1],
              translateX: [100, 0],
              delay: anime.stagger(100),
              easing: "easeOutExpo",
              duration: 1000,
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Animate only new cards
  useEffect(() => {
    anime({
      targets: ".service-card.new",
      opacity: [0, 1],
      translateY: [50, 0],
      delay: anime.stagger(100),
      easing: "easeOutExpo",
      duration: 800,
    });
  }, [visibleServices]);

  const getIcon = (iconName: string) => {
    const IconComponent = iconComponents[iconName as keyof typeof iconComponents];
    return IconComponent ? (
      <IconComponent className="w-10 h-10 text-primary mb-4 transition-all duration-300 group-hover:scale-110" />
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
      className="min-h-screen py-20 bg-white dark:bg-black relative overflow-hidden"
      ref={containerRef}
    >
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Title */}
          <div className="lg:w-6/12">
            <div
              ref={titleRef}
              className="sticky top-32 transition-all duration-300 ease-out"
              style={{ transformOrigin: "left center" }}
            >
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 dark:text-white">
                <span className="heading">Our</span>
                <br />
                <span className="heading">Services - </span>
                <br />
                <span className="heading">
                  Redefining{" "}
                  <RotatingText
                    texts={currentWords}
                    mainClassName="inline-block"
                    elementLevelClassName="text-primary"
                    staggerFrom="last"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={3000}
                  />{" "}
                </span>
                <span className="heading">across the globe</span>
              </h2>
            </div>
          </div>

          {/* First services grid (2x2) */}
          <div className="md:w-6/12 mr-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {visibleServices.slice(0, 4).map((service) => (
                <div
                  key={service.title}
                  className="service-card w-[110%] min-h-[320px] flex flex-col justify-start p-8 bg-white dark:bg-gray-900 rounded-xl opacity-100
                  hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/5 
                  dark:hover:from-primary/10 dark:hover:to-secondary/10 
                  transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl 
                  cursor-pointer border border-gray-100 dark:border-gray-800 group"
                  onClick={() => handleServiceClick(service)}
                >
                  <div className="relative z-10 flex flex-col flex-grow">
                    {getIcon(service.icon)}
                    <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors text-gray-900 dark:text-white cursor-pointer">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors flex-grow">
                      {service.description}
                    </p>
                    <div className="mt-4 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-medium">Learn More</span>
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Remaining visible services (4 in a row) */}
        {visibleServices.length > 4 && (
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {visibleServices.slice(4).map((service, idx) => (
              <div
                key={service.title}
                className={`service-card w-full min-h-[320px] flex flex-col justify-start p-8 bg-white dark:bg-gray-900 rounded-xl 
                hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/5 
                dark:hover:from-primary/10 dark:hover:to-secondary/10 
                transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl 
                cursor-pointer border border-gray-100 dark:border-gray-800 group ${
                  idx >= services.length - (services.length - 7) ? "new" : ""
                }`}
                onClick={() => handleServiceClick(service)}
              >
                <div className="relative z-10 flex flex-col flex-grow">
                  {getIcon(service.icon)}
                  <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors flex-grow">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium">Learn More</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Show More / Show Less button */}
        <div className="mt-12 mb-12 text-center">
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
