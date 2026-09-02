// import React, { useEffect, useRef, useState } from 'react';
// import { ArrowRight } from 'lucide-react';
// import anime from 'animejs';

// const Hero: React.FC = () => {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const secondVideoRef = useRef<HTMLVideoElement>(null);

//   // Auto slide every 10s
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveSlide((prev) => (prev === 0 ? 1 : 0));
//     }, 10000);
//     return () => clearInterval(interval);
//   }, []);

//   // Animation for slide content
//   useEffect(() => {
//     const timeline = anime.timeline({
//       easing: 'easeOutExpo',
//       duration: 1000,
//     });

//     timeline
//       .add({
//         targets: `.hero-title-${activeSlide}`,
//         opacity: [0, 1],
//         translateY: [50, 0],
//       })
//       .add(
//         {
//           targets: `.hero-description-${activeSlide}`,
//           opacity: [0, 1],
//           translateY: [30, 0],
//         },
//         '-=800'
//       )
//       .add(
//         {
//           targets: `.hero-buttons-${activeSlide}`,
//           opacity: [0, 1],
//           translateY: [20, 0],
//         },
//         '-=600'
//       );

//     return () => timeline.pause();
//   }, [activeSlide]);

//   // Slow down 2nd slide video
//   useEffect(() => {
//     if (secondVideoRef.current) {
//       secondVideoRef.current.playbackRate = 0.5; // Play at half speed
//     }
//   }, []);

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
//     >
//       {/* Slide wrapper */}
//       <div className="absolute inset-0 w-full h-full">
//         {/* Slide 1 - Video Background */}
//         <div
//           className={`absolute inset-0 transition-opacity duration-1000 ${
//             activeSlide === 0 ? 'opacity-100 z-20' : 'opacity-0 z-10'
//           }`}
//         >
//           <video
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="absolute inset-0 w-full h-full object-cover"
//           >
//             <source src="/images/city_hd.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//           <div className="absolute inset-0 bg-black/30"></div>
//         </div>

//         {/* Slide 2 - Video Background (slowed) */}
//         <div
//           className={`absolute inset-0 transition-opacity duration-1000 ${
//             activeSlide === 1 ? 'opacity-100 z-20' : 'opacity-0 z-10'
//           }`}
//         >
//           <video
//             ref={secondVideoRef}
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="absolute inset-0 w-full h-full object-cover animate-zoomSlow"
//           >
//             <source src="/images/eyes.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//           <div className="absolute inset-0 bg-black/40"></div>
//         </div>
//       </div>

//       {/* Foreground content */}
//       <div className="container relative z-30 px-4 text-center lg:text-left lg:pl-20">
//         {/* Slide 1 Content */}
//         {activeSlide === 0 && (
//           <div>
//             <h1 className="hero-title-0 opacity-0 text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6">
//               <span className="heading">Transforming Ideas into</span>
//               <br />
//               <span className="text-primary">Digital Reality</span>
//             </h1>

//             <p className="hero-description-0 opacity-0 text-lg md:text-xl text-white/90 max-w-2xl lg:max-w-xl mb-8">
//               We craft innovative software solutions that empower businesses to
//               thrive in the digital age, delivering exceptional experiences
//               through cutting-edge technology.
//             </p>

//             <div className="hero-buttons-0 opacity-0 flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">
//               <a
//                 href="#services"
//                 className="btn bg-primary text-white hover:bg-primary/90 min-w-[160px] group"
//               >
//                 <span>Explore Services</span>
//                 <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
//               </a>

//               <a
//                 href="#contact"
//                 className="btn bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white min-w-[160px] group"
//               >
//                 <span>Get Started</span>
//                 <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
//               </a>
//             </div>
//           </div>
//         )}

//         {/* Slide 2 Content */}
//         {activeSlide === 1 && (
//           <div>
//             <h1 className="hero-title-1 opacity-0 text-4xl md:text-5xl lg:text-7xl font-bold text-primary">
//               Yellow.
//             </h1>
//             <h1 className="hero-title-1 opacity-0 text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6">
//               Marketing
//             </h1>

//             <p className="hero-description-1 opacity-0 text-lg md:text-xl text-white/90 max-w-2xl lg:max-w-xl mb-8">
//               Yellow Marketing Agency helps brands grow across digital and traditional markets with AI-powered campaigns, creative branding, and strategies that maximize awareness, engagement, and ROI.
//             </p>

//             <div className="hero-buttons-1 opacity-0 flex justify-center lg:justify-start">
//               <a
//                 href="#"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   window.location.href = '/yellowmarketing';
//                 }}
//                 className="btn bg-primary text-white hover:bg-primary/90 min-w-[160px] group"
//               >
//                 <span>Learn More</span>
//                 <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
//               </a>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Navigation dots */}
//       <div className="absolute bottom-6 w-full flex justify-center gap-3 z-30">
//         {[0, 1].map((i) => (
//           <button
//             key={i}
//             onClick={() => setActiveSlide(i)}
//             className={`w-3 h-3 rounded-full transition-all ${
//               activeSlide === i ? 'bg-primary scale-125' : 'bg-white/50'
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Hero;












import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import anime from 'animejs';

const Hero: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const secondVideoRef = useRef<HTMLVideoElement>(null);

  // Auto slide every 10s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === 0 ? 1 : 0));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Animation for slide content
  useEffect(() => {
    const timeline = anime.timeline({
      easing: 'easeOutExpo',
      duration: 1000,
    });

    timeline
      .add({
        targets: `.hero-title-${activeSlide}`,
        opacity: [0, 1],
        translateY: [50, 0],
      })
      .add(
        {
          targets: `.hero-description-${activeSlide}`,
          opacity: [0, 1],
          translateY: [30, 0],
        },
        '-=800'
      )
      .add(
        {
          targets: `.hero-buttons-${activeSlide}`,
          opacity: [0, 1],
          translateY: [20, 0],
        },
        '-=600'
      );

    return () => timeline.pause();
  }, [activeSlide]);

  // Slow down 2nd slide video
  useEffect(() => {
    if (secondVideoRef.current) {
      secondVideoRef.current.playbackRate = 0.5; // half speed
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Slide wrapper */}
      <div className="absolute inset-0 w-full h-full">
        {/* Slide 1 - Video Background */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            activeSlide === 0 ? 'opacity-100 z-20' : 'opacity-0 z-10'
          }`}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/images/city.png"
            className="absolute inset-0 w-full h-full object-cover"
            // @ts-ignore
            fetchpriority="high"
          >
            <source src="/images/city.webm" type="video/webm" />
            <source src="/images/city_hd.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Slide 2 - Video Background (lazy load + slowed) */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            activeSlide === 1 ? 'opacity-100 z-20' : 'opacity-0 z-10'
          }`}
        >
          {activeSlide === 1 && (
            <video
              ref={secondVideoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster="/images/eye.png"
              className="absolute inset-0 w-full h-full object-cover animate-zoomSlow"
            >
              <source src="/images/eyes.webm" type="video/webm" />
              <source src="/images/eyes.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      </div>

      {/* Foreground content */}
      <div className="container relative z-30 px-4 text-center lg:text-left lg:pl-20">
        {/* Slide 1 Content */}
        {activeSlide === 0 && (
          <div>
            <h1 className="hero-title-0 opacity-0 text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6">
              <span className="heading">Transforming Ideas into</span>
              <br />
              <span className="text-primary">Digital Reality</span>
            </h1>
            <p className="hero-description-0 opacity-0 text-lg md:text-xl text-white/90 max-w-2xl lg:max-w-xl mb-8">
              We craft innovative software solutions that empower businesses to
              thrive in the digital age, delivering exceptional experiences
              through cutting-edge technology.
            </p>
            <div className="hero-buttons-0 opacity-0 flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">
              <a
                href="#services"
                className="btn bg-primary text-white hover:bg-primary/90 min-w-[160px] group"
              >
                <span>Explore Services</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="btn bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white min-w-[160px] group"
              >
                <span>Get Started</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        )}

        {/* Slide 2 Content */}
        {activeSlide === 1 && (
          <div>
            <h1 className="hero-title-1 opacity-0 text-4xl md:text-5xl lg:text-7xl font-bold text-primary">
              Yellow.
            </h1>
            <h1 className="hero-title-1 opacity-0 text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6">
              Marketing
            </h1>
            <p className="hero-description-1 opacity-0 text-lg md:text-xl text-white/90 max-w-2xl lg:max-w-xl mb-8">
              Yellow Marketing Agency helps brands grow across digital and
              traditional markets with AI-powered campaigns, creative branding,
              and strategies that maximize awareness, engagement, and ROI.
            </p>
            <div className="hero-buttons-1 opacity-0 flex justify-center lg:justify-start">
              <a
                href="/yellowmarketing"
                className="btn bg-primary text-white hover:bg-primary/90 min-w-[160px] group"
              >
                <span>Learn More</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3 z-30">
        {[0, 1].map((i) => (
          <button
            key={i}
            onClick={() => setActiveSlide(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              activeSlide === i ? 'bg-primary scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;

























// import React, { useEffect, useRef, useState } from 'react';
// import { ArrowRight } from 'lucide-react';
// import anime from 'animejs';

// const Hero: React.FC = () => {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [videosLoaded, setVideosLoaded] = useState({ first: false, second: false });
//   const secondVideoRef = useRef<HTMLVideoElement>(null);
//   const firstVideoRef = useRef<HTMLVideoElement>(null);

//   // Auto slide every 10s
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveSlide((prev) => (prev === 0 ? 1 : 0));
//     }, 10000);
//     return () => clearInterval(interval);
//   }, []);

//   // Animation for slide content
//   useEffect(() => {
//     const timeline = anime.timeline({
//       easing: 'easeOutExpo',
//       duration: 1000,
//     });

//     timeline
//       .add({
//         targets: `.hero-title-${activeSlide}`,
//         opacity: [0, 1],
//         translateY: [50, 0],
//       })
//       .add(
//         {
//           targets: `.hero-description-${activeSlide}`,
//           opacity: [0, 1],
//           translateY: [30, 0],
//         },
//         '-=800'
//       )
//       .add(
//         {
//           targets: `.hero-buttons-${activeSlide}`,
//           opacity: [0, 1],
//           translateY: [20, 0],
//         },
//         '-=600'
//       );

//     return () => timeline.pause();
//   }, [activeSlide]);

//   // Slow down 2nd slide video
//   useEffect(() => {
//     if (secondVideoRef.current) {
//       secondVideoRef.current.playbackRate = 0.5; // Play at half speed
//     }
//   }, []);

//   // Preload and handle video loading
//   useEffect(() => {
//     const preloadVideo = (src: string, key: 'first' | 'second') => {
//       const video = document.createElement('video');
//       video.preload = 'metadata';
//       video.src = src;
//       video.addEventListener('loadeddata', () => {
//         setVideosLoaded(prev => ({ ...prev, [key]: true }));
//       });
//     };

//     // Preload videos
//     preloadVideo('/images/city_hd.mp4', 'first');
//     preloadVideo('/images/eyes.mp4', 'second');
//   }, []);

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
//     >
//       {/* Slide wrapper */}
//       <div className="absolute inset-0 w-full h-full">
//         {/* Slide 1 - Video Background */}
//         <div
//           className={`absolute inset-0 transition-opacity duration-1000 ${
//             activeSlide === 0 ? 'opacity-100 z-20' : 'opacity-0 z-10'
//           }`}
//         >
//           {!videosLoaded.first && (
//             <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
//               <div className="text-center text-white">
//                 <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
//                 <p className="text-lg">Loading...</p>
//               </div>
//             </div>
//           )}
//           <video
//             ref={firstVideoRef}
//             autoPlay
//             loop
//             muted
//             playsInline
//             preload="metadata"
//             poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect width='1920' height='1080' fill='%23111827'/%3E%3C/svg%3E"
//             className="absolute inset-0 w-full h-full object-cover"
//             style={{ display: videosLoaded.first ? 'block' : 'none' }}
//           >
//             <source src="/images/city." type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//           <div className="absolute inset-0 bg-black/30"></div>
//         </div>

//         {/* Slide 2 - Video Background (slowed) */}
//         <div
//           className={`absolute inset-0 transition-opacity duration-1000 ${
//             activeSlide === 1 ? 'opacity-100 z-20' : 'opacity-0 z-10'
//           }`}
//         >
//           {!videosLoaded.second && (
//             <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
//               <div className="text-center text-white">
//                 <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
//                 <p className="text-lg">Loading...</p>
//               </div>
//             </div>
//           )}
//           <video
//             ref={secondVideoRef}
//             autoPlay
//             loop
//             muted
//             playsInline
//             preload="metadata"
//             poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect width='1920' height='1080' fill='%23111827'/%3E%3C/svg%3E"
//             className="absolute inset-0 w-full h-full object-cover animate-zoomSlow"
//             style={{ display: videosLoaded.second ? 'block' : 'none' }}
//           >
//             <source src="/images/eyes.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//           <div className="absolute inset-0 bg-black/40"></div>
//         </div>
//       </div>

//       {/* Foreground content */}
//       <div className="container relative z-30 px-4 text-center lg:text-left lg:pl-20">
//         {/* Slide 1 Content */}
//         {activeSlide === 0 && (
//           <div>
//             <h1 className="hero-title-0 opacity-0 text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6">
//               <span className="heading">Transforming Ideas into</span>
//               <br />
//               <span className="text-primary">Digital Reality</span>
//             </h1>

//             <p className="hero-description-0 opacity-0 text-lg md:text-xl text-white/90 max-w-2xl lg:max-w-xl mb-8">
//               We craft innovative software solutions that empower businesses to
//               thrive in the digital age, delivering exceptional experiences
//               through cutting-edge technology.
//             </p>

//             <div className="hero-buttons-0 opacity-0 flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">
//               <a
//                 href="#services"
//                 className="btn bg-primary text-white hover:bg-primary/90 min-w-[160px] group"
//               >
//                 <span>Explore Services</span>
//                 <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
//               </a>

//               <a
//                 href="#contact"
//                 className="btn bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white min-w-[160px] group"
//               >
//                 <span>Get Started</span>
//                 <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
//               </a>
//             </div>
//           </div>
//         )}

//         {/* Slide 2 Content */}
//         {activeSlide === 1 && (
//           <div>
//             <h1 className="hero-title-1 opacity-0 text-4xl md:text-5xl lg:text-7xl font-bold text-primary">
//               Yellow.
//             </h1>
//             <h1 className="hero-title-1 opacity-0 text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6">
//               Marketing
//             </h1>

//             <p className="hero-description-1 opacity-0 text-lg md:text-xl text-white/90 max-w-2xl lg:max-w-xl mb-8">
//               Yellow Marketing Agency helps brands grow across digital and traditional markets with AI-powered campaigns, creative branding, and strategies that maximize awareness, engagement, and ROI.
//             </p>

//             <div className="hero-buttons-1 opacity-0 flex justify-center lg:justify-start">
//               <a
//                 href="#"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   window.location.href = '/yellowmarketing';
//                 }}
//                 className="btn bg-primary text-white hover:bg-primary/90 min-w-[160px] group"
//               >
//                 <span>Learn More</span>
//                 <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
//               </a>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Navigation dots */}
//       <div className="absolute bottom-6 w-full flex justify-center gap-3 z-30">
//         {[0, 1].map((i) => (
//           <button
//             key={i}
//             onClick={() => setActiveSlide(i)}
//             className={`w-3 h-3 rounded-full transition-all ${
//               activeSlide === i ? 'bg-primary scale-125' : 'bg-white/50'
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Hero;