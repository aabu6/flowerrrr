"use client";

import RetroGrid from "@/components/magicui/retro-grid";

export function Hero() {
   return (
      <div className=" flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
         {/* <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
            Retro Grid
         </span> */}
         <h1 className="font-humane text-center  text-[13rem] lg:text-[17rem]  uppercase leading-[.8]">
            HI , I'm <br /> FLO CHI
         </h1>

         <RetroGrid />
      </div>
   );
}
