// import { useEffect, useRef } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';

// const VideoSection = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const videoRef = useRef<HTMLVideoElement>(null);
  
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ['start start', 'end start']
//   });

//   // Transform values for video scaling and positioning
//   const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);
//   const x = useTransform(scrollYProgress, [0, 0.5], ['0%', '-25%']);
//   const borderRadius = useTransform(scrollYProgress, [0, 0.5], ['0rem', '1rem']);

//   // Transform values for text content
//   const textOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
//   const textX = useTransform(scrollYProgress, [0.3, 0.6], ['100%', '0%']);

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.play();
//     }
//   }, []);

//   return (
//     <div ref={containerRef} className="relative h-[200vh]">
//       {/* Fixed video container */}
//       <div className="sticky top-0 h-screen overflow-hidden">
//         <motion.video
//           ref={videoRef}
//           style={{
//             scale,
//             x,
//             borderRadius
//           }}
//           className="absolute inset-0 w-full h-full object-cover mt-20"
//           autoPlay
//           muted
//           loop
//           playsInline
//         >
//           <source src="/images/meeting.mp4" type="video/mp4" />
//         </motion.video>

//         {/* Marketing Text content that slides in */}
//         <motion.div
//           style={{
//             opacity: textOpacity,
//             x: textX
//           }}
//           className="absolute right-0 top-0 w-1/2 h-full flex items-center justify-center p-12 mt-20"
//         >
//           <div className="bg-card/90 backdrop-blur-md rounded-2xl p-8 max-w-md">
//             <motion.h2 
//               className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//             >
//               Marketing That Moves
//             </motion.h2>
//             <motion.p 
//               className="text-muted-foreground text-lg leading-relaxed"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//             >
//               From digital to traditional, we create campaigns that capture attention, build trust, and drive measurable growth. 
//               Experience how storytelling and strategy come together to elevate your brand in every market.
//             </motion.p>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default VideoSection;












import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const VideoSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Transform values for video scaling and positioning
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);
  const x = useTransform(scrollYProgress, [0, 0.5], ["0%", "-25%"]);
  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["0rem", "1.5rem"]
  );

  // Transform values for text content
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
  const textX = useTransform(scrollYProgress, [0.3, 0.6], ["100%", "0%"]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      {/* Fixed video container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.video
          ref={videoRef}
          style={{
            scale,
            x,
            borderRadius,
          }}
          className="absolute inset-0 w-full h-full object-cover mt-20"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/meeting-poster.jpg"
        >
          <source src="/images/meeting.mp4" type="video/mp4" />
        </motion.video>

        {/* Marketing Text content inside a card */}
        <motion.div
          style={{
            opacity: textOpacity,
            x: textX,
          }}
          className="absolute right-0 top-0 w-1/2 h-full flex items-center justify-center pl-2 p-0 lg:p-8 mt-20 lg:mt-20"
        >
          <motion.div
            className="bg-[#111111]/90 backdrop-blur-md border border-[#F79031]/40 shadow-2xl rounded-2xl p-10 max-w-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h2
              className="text-lg lg:text-4xl font-extrabold mb-6 tracking-tight"
              style={{ color: "#F79031" }} // fixed color
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Marketing That Moves
            </motion.h2>
            <motion.p
              className="text-gray-300 text-sm lg:text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              From digital to traditional, we create campaigns that capture
              attention, build trust, and drive measurable growth. Experience
              how storytelling and strategy come together to elevate your brand
              in every market.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default VideoSection;
