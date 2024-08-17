"use client";
import React, { useRef } from "react";
import {
   useMotionValue,
   motion,
   useSpring,
   useTransform,
   MotionValue,
} from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

interface LinkProps {
   heading: string;
   subheading: string;
   imgSrc: string;
   href: string;
}

const Link: React.FC<LinkProps> = ({ heading, imgSrc, subheading, href }) => {
   const ref = useRef<HTMLAnchorElement>(null);
   const x = useMotionValue(0);
   const y = useMotionValue(0);

   const mouseXSpring = useSpring(x);
   const mouseYSpring = useSpring(y);

   const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
   const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

   const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const xPct = mouseX / rect.width - 0.5;
      const yPct = mouseY / rect.height - 0.5;

      x.set(xPct);
      y.set(yPct);
   };

   return (
      <motion.a
         href={href}
         ref={ref}
         onMouseMove={handleMouseMove}
         initial="initial"
         whileHover="whileHover"
         className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
      >
         <div>
            <motion.span
               variants={{
                  initial: { x: 0 },
                  whileHover: { x: -16 },
               }}
               transition={{
                  type: "spring",
                  staggerChildren: 0.075,
                  delayChildren: 0.25,
               }}
               className="relative z-10 block tracking-wider text-4xl font-humane  uppercase text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-[5rem]"
            >
               {heading.split("").map((l, i) => (
                  <motion.span
                     variants={{
                        initial: { x: 0 },
                        whileHover: { x: 16 },
                     }}
                     transition={{ type: "spring" }}
                     className="inline-block"
                     key={i}
                  >
                     {l}
                  </motion.span>
               ))}
            </motion.span>
            <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
               {subheading}
            </span>
         </div>

         <motion.img
            style={{
               top,
               left,
               translateX: "-50%",
               translateY: "-50%",
            }}
            variants={{
               initial: { scale: 0, rotate: "-12.5deg" },
               whileHover: { scale: 1, rotate: "12.5deg" },
            }}
            transition={{ type: "spring" }}
            src={imgSrc}
            className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
            alt={`Image representing a link for ${heading}`}
         />

         <motion.div
            variants={{
               initial: {
                  x: "25%",
                  opacity: 0,
               },
               whileHover: {
                  x: "0%",
                  opacity: 1,
               },
            }}
            transition={{ type: "spring" }}
            className="relative z-10 p-4"
         >
            <FiArrowRight className="text-5xl text-neutral-50" />
         </motion.div>
      </motion.a>
   );
};

export const Category: React.FC = () => {
   return (
      <section className="bg-[#1c1c1c] p-4 md:p-8">
         <div className="mx-auto max-w-5xl">
            <header>
               <h4 className="font-humane text-[#fff] uppercase text-[5rem] lg:text-[7rem] text-center ">
                  What I am Good At
               </h4>
            </header>
            <Link
               heading="Brand Identity"
               subheading="logo design , business card, brand elements"
               imgSrc="/brandidentity.jpg"
               href="/"
            />
            <Link
               heading="Visual Elements Design"
               subheading="mockups ,marketing materials "
               imgSrc="/mockupfi.png"
               href="/-all-time"
            />

            <Link
               heading="Flyers and Marketing Elements"
               subheading="Flyers, menu mockups , Business Elements"
               imgSrc="/mockupse.png"
               href="/"
            />
            <Link
               heading="Calligraphy"
               subheading="Flyers, menu mockups , Business Elements"
               imgSrc="/calli.jpeg"
               href="/"
            />
            <Link
               heading="Graphic Designer"
               subheading="Flyers, menu mockups , Business Elements"
               imgSrc="/giftaayo.jpg"
               href="/"
            />

            <Link
               heading="Thumbnail Design"
               subheading="social media , thumbnail design , socialmedia marketing"
               imgSrc="/thumbnail.png"
               href="/"
            />
            <Link
               heading="Merchandise Design"
               subheading="social media , thumbnail design , socialmedia marketing"
               imgSrc="/hoodie.png"
               href="/"
            />
         </div>
      </section>
   );
};