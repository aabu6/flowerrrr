import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Image from "next/image";

const reviews = [
   {
      title: "Business Card ",
      backgroundImage: "/businesscard.png",
   },
   {
      title: "Book Cover Design",
      backgroundImage: "/bookcover.png",
   },
   {
      title: "Poster Design",
      backgroundImage: "/smoothie.jpg",
   },
   {
      title: "Mockup Design",
      backgroundImage: "/mockupse.png",
   },
   {
      title: "Menu Design",
      backgroundImage: "/menu.png",
   },
   {
      title: "Visual Element Design",
      backgroundImage: "/Mantra.png",
   },
   {
      title: "Logo Design",
      backgroundImage: "/giftaayo.jpg",
   },
   {
      title: "Flyers Design",
      backgroundImage: "/flyers.png",
   },
   {
      title: "Mockup Design",
      backgroundImage: "/mockupfi.png",
   },
   {
      title: "Merch Design",
      backgroundImage: "/merch.png",
   },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
   title,
   backgroundImage,
}: {
   title: string;
   backgroundImage: string;
}) => {
   return (
      <figure
         className={cn(
            "relative w-64 cursor-pointer overflow-hidden rounded-xl",
            "bg-gray-950/[.01] hover:bg-gray-950/[.05]",
            "dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
         )}
      >
         <div className="relative h-80 overflow-hidden">
            <img
               src={backgroundImage}
               alt=""
               className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0  p-4">
               <h2 className="text-center  text-[#efefef] font-bold  font-humane uppercase text-[2rem]">
                  {title}
               </h2>
            </div>
         </div>
      </figure>
   );
};

export function Work() {
   return (
      <div className="relative flex h-[800px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background ">
         <h3 className=" text-[6rem] font-humane uppercase lg:text-[7rem]">
            MY LATEST WORK
         </h3>{" "}
         <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review, index) => (
               <ReviewCard key={index} {...review} />
            ))}
         </Marquee>
         <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review, index) => (
               <ReviewCard key={index} {...review} />
            ))}
         </Marquee>
         <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
         <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
   );
}
