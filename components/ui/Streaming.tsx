// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const DURATION = 0.25;
// const STAGGER = 0.025;

// interface FlipLinkProps {
//    children: string;
//    href: string;
// }

// const FlipLink: React.FC<FlipLinkProps> = ({ children, href }) => {
//    return (
//       <motion.div
//          initial="initial"
//          whileHover="hovered"
//          className="font-humane relative block overflow-hidden whitespace-nowrap text-7xl font-black uppercase  md:text-8xl lg:text-9xl"
//          style={{ lineHeight: 0.75 }}
//       >
//          <a href={href} target="_blank" rel="noopener noreferrer">
//             <div>
//                {children.split("").map((letter, index) => (
//                   <motion.span
//                      key={index}
//                      variants={{
//                         initial: { y: 0 },
//                         hovered: { y: "-100%" },
//                      }}
//                      transition={{
//                         duration: DURATION,
//                         ease: "easeInOut",
//                         delay: STAGGER * index,
//                      }}
//                      className="inline-block"
//                   >
//                      {letter}
//                   </motion.span>
//                ))}
//             </div>
//             <div className="absolute inset-0">
//                {children.split("").map((letter, index) => (
//                   <motion.span
//                      key={index}
//                      variants={{
//                         initial: { y: "100%" },
//                         hovered: { y: 0 },
//                      }}
//                      transition={{
//                         duration: DURATION,
//                         ease: "easeInOut",
//                         delay: STAGGER * index,
//                      }}
//                      className="inline-block"
//                   >
//                      {letter}
//                   </motion.span>
//                ))}
//             </div>
//          </a>
//       </motion.div>
//    );
// };

// interface StreamingProps {
//    insta: string;
//    gmail: string;
// }
// const Streaming: React.FC<StreamingProps> = ({ insta, gmail }) => {
//    return (
//       <section className="grid place-content-center gap-2  px-8 py-24  ">
//          <FlipLink href={insta}>Instagram </FlipLink>
//          <FlipLink href={gmail}>GMAIL</FlipLink>
//       </section>
//    );
// };

// export default Streaming;
"use client";
import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

interface FlipLinkProps {
   children: string;
   href: string;
}

const FlipLink: React.FC<FlipLinkProps> = ({ children, href }) => {
   const [isHovered, setIsHovered] = useState(false);
   const controls = useAnimation();

   const handleHoverStart = () => {
      setIsHovered(true);
      controls.start("hovered");
   };

   const handleHoverEnd = () => {
      setIsHovered(false);
      controls.start("initial");
   };

   return (
      <motion.div
         className="font-humane relative block overflow-hidden whitespace-nowrap text-[8rem]  uppercase sm:text-6xl md:text-7xl lg:text-[7rem] xl:text-[10rem]"
         style={{ lineHeight: 0.75 }}
         onHoverStart={handleHoverStart}
         onHoverEnd={handleHoverEnd}
         onTouchStart={handleHoverStart}
         onTouchEnd={handleHoverEnd}
      >
         <a href={href} target="_blank" rel="noopener noreferrer">
            <motion.div animate={controls} initial="initial">
               {children.split("").map((letter, index) => (
                  <motion.span
                     key={index}
                     variants={{
                        initial: { y: 0 },
                        hovered: { y: "-100%" },
                     }}
                     transition={{
                        duration: DURATION,
                        ease: "easeInOut",
                        delay: STAGGER * index,
                     }}
                     className="inline-block"
                  >
                     {letter}
                  </motion.span>
               ))}
            </motion.div>
            <motion.div
               className="absolute inset-0"
               animate={controls}
               initial="initial"
            >
               {children.split("").map((letter, index) => (
                  <motion.span
                     key={index}
                     variants={{
                        initial: { y: "100%" },
                        hovered: { y: 0 },
                     }}
                     transition={{
                        duration: DURATION,
                        ease: "easeInOut",
                        delay: STAGGER * index,
                     }}
                     className="inline-block"
                  >
                     {letter}
                  </motion.span>
               ))}
            </motion.div>
         </a>
      </motion.div>
   );
};

interface StreamingProps {
   insta: string;
   gmail: string;
}

const Streaming: React.FC<StreamingProps> = ({ insta, gmail }) => {
   return (
      <section className="grid place-content-center gap-2 px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:py-24">
         <FlipLink href={insta}>Instagram</FlipLink>
         <FlipLink href={gmail}>GMAIL</FlipLink>
      </section>
   );
};

export default Streaming;
