// import React, { useRef, useEffect } from 'react';
// import { CheckCircle } from 'lucide-react';
// import anime from 'animejs';

// const About: React.FC = () => {
//   const features = [
//     'Agile methodology for adaptable project management',
//     'User-centered design approach for intuitive experiences',
//     'Continuous integration and deployment practices',
//     'Rigorous testing and quality assurance protocols',
//     'Ongoing maintenance and support services',
//     'Transparent communication throughout the process'
//   ];

//   const containerRef = useRef<HTMLDivElement>(null);
  
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const timeline = anime.timeline({
//               easing: 'easeOutExpo',
//               duration: 1000
//             });

//             timeline
//               .add({
//                 targets: '.about-title',
//                 opacity: [0, 1],
//                 translateX: ['50%', '0%'],
//               })
//               .add({
//                 targets: '.about-content',
//                 opacity: [0, 1],
//                 translateX: ['100%', '0%'],
//               }, '-=800')
//               .add({
//                 targets: '.feature-item',
//                 opacity: [0, 1],
//                 translateX: [100, 0],
//                 delay: anime.stagger(100)
//               }, '-=600');

//             observer.disconnect();
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     if (containerRef.current) {
//       observer.observe(containerRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     // <section id="about" className="section-padding relative overflow-hidden bg-gray-50 dark:bg-gray-900">
//     //   <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900" />
      
//     //   <div className="container relative" ref={containerRef}>
//     //     <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//     //       <div>
//     //         <h2 className="about-title opacity-0 text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
//     //           <span className="heading">Crafting Digital Excellence Since</span> <span className="gradient-text">2018</span>
//     //         </h2>
            
//     //         <div className="about-content opacity-0">
//     //           <p className="text-gray-600 dark:text-gray-300 mb-6">
//     //             At Yellow Solutions, we combine technical expertise with creative problem-solving to 
//     //             deliver software solutions that exceed expectations. Our team of experienced 
//     //             developers, designers, and strategists work collaboratively to transform complex 
//     //             challenges into elegant digital experiences.
//     //           </p>
              
//     //           <p className="text-gray-600 dark:text-gray-300 mb-8">
//     //             We believe in building long-term partnerships with our clients, focusing on 
//     //             sustainable growth and continuous innovation. Our commitment to quality and 
//     //             attention to detail ensures that every solution we deliver is robust, 
//     //             scalable, and future-proof.
//     //           </p>
              
//     //           <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
//     //             {features.map((feature, index) => (
//     //               <div 
//     //                 key={index} 
//     //                 className="feature-item opacity-0 flex items-start"
//     //               >
//     //                 <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
//     //                 <span className="text-gray-700 dark:text-gray-300">{feature}</span>
//     //               </div>
//     //             ))}
//     //           </div>
              
//     //           <a href="#contact" className="btn btn-primary">
//     //             Start Your Project
//     //           </a>
//     //         </div>
//     //       </div>
          
//     //       <div className="relative h-[600px] bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 rounded-2xl overflow-hidden">
//     //         <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center"></div>
//     //         <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </section>
//     // <div className="w-full h-screen relative overflow-hidden -mt-20">
//     <section id="about" className="section-padding -mt-16 relative overflow-hidden bg-gray-50 dark:bg-gray-900">
//         <img
//           src="/images/industry.png"
//           alt="about"
//           className="w-full max-h-[600px] object-cover -mt-24"
//         />
//     </section>
//       // </div>
//   );
// };

// export default About;




import React, { useRef, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import anime from 'animejs';

const About: React.FC = () => {
  const features = [
    'Agile methodology for adaptable project management',
    'User-centered design approach for intuitive experiences',
    'Continuous integration and deployment practices',
    'Rigorous testing and quality assurance protocols',
    'Ongoing maintenance and support services',
    'Transparent communication throughout the process'
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timeline = anime.timeline({
              easing: 'easeOutExpo',
              duration: 1000
            });

            timeline
              .add({
                targets: '.about-title',
                opacity: [0, 1],
                translateX: ['50%', '0%'],
              })
              .add({
                targets: '.about-content',
                opacity: [0, 1],
                translateX: ['100%', '0%'],
              }, '-=800')
              .add({
                targets: '.feature-item',
                opacity: [0, 1],
                translateX: [100, 0],
                delay: anime.stagger(100)
              }, '-=600');

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

  return (
    <section id="about" className="py-8 md:py-16 -mt-8 md:-mt-16 relative overflow-hidden bg-gray-50 dark:bg-gray-900">
        <img
          src="/images/industry.png"
          alt="about"
          className="w-full max-h-[400px] md:max-h-[600px] object-cover -mt-6 lg:-mt-16 md:-mt-20"
        />
    </section>
  );
};

export default About;