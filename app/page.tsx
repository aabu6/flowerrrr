import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import AboutSection from "@/components/ui/About";
import { Category } from "@/components/ui/Category";
import { Hero } from "@/components/ui/Hero";
import Streaming from "@/components/ui/Streaming";
import { Work } from "@/components/ui/Work";
import Image from "next/image";

export default function Home() {
   return (
      <main className="">
         <Hero />
         <AboutSection />
         <Work />
         <Category />
         <Streaming
            insta="https://www.instagram.com/flower_child_090/"
            fb="https://www.instagram.com/flower_child_090/"
            gmail="https://www.instagram.com/flower_child_090/"
         />
         <section>
            <VelocityScroll
               text="Branding , Logo design ,  Visual Identity , Brand Identity, Caligraphy, Grafitti"
               default_velocity={3}
               className="font-humane text-7xl lg:text-8xl uppercase"
            />
         </section>
      </main>
   );
}
