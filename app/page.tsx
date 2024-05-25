import { StarGrid } from "@/components/starGrid";
import { BentoBox } from "@/components/bentoBox"
import { TechSection } from "@/components/tech"
import { Hero } from "@/components/heroSection"
import { HowToUse } from "@/components/howTo"
import { Faq } from "@/components/faq"
export default function Home() {
  return (
    <main className="flex flex-col w-full h-full  ">
      {/* hero section */}
      <div className="w-full">
        <StarGrid />
        <Hero />
      </div>

      {/* bento section */}
      <BentoBox />

      {/* tech section */}
      <TechSection />

      {/* how to section  */}
      <HowToUse />

      {/* faq */}
      <Faq />

      <div className="h-[35vh]"></div>

    </main>
  );
}
