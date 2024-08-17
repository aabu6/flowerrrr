"use client";
import React from "react";
import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

interface FlipLinkProps {
   children: string;
   href: string;
}

const FlipLink: React.FC<FlipLinkProps> = ({ children, href }) => {
   return (
      <motion.div
         initial="initial"
         whileHover="hovered"
         className="font-humane relative block overflow-hidden whitespace-nowrap text-7xl font-black uppercase  md:text-8xl lg:text-9xl"
         style={{ lineHeight: 0.75 }}
      >
         <a href={href} target="_blank" rel="noopener noreferrer">
            <div>
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
            </div>
            <div className="absolute inset-0">
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
            </div>
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
      <section className="grid place-content-center gap-2  px-8 py-24  ">
         <FlipLink href={insta}>Instagram </FlipLink>
         <FlipLink href={gmail}>GMAIL</FlipLink>
      </section>
   );
};

export default Streaming;
