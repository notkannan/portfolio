
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import { HoverEffect } from "@/components/ui/card-hover";
import { skills } from "@/data";
import { Skills } from "@/components/Skills";

export default function Home() {

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto overflow-clip sm:px-10 px-5">
      <div className="max-w-7xl w-full"> 
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Skills />
        <RecentProjects />
        <Experience />
        <Footer />
      </div>
    </main> 
  );
}
