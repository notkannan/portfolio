'use client';

import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import DarkVeil from "@/components/ui/DarkVeil";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col mx-auto overflow-clip">
      <div className="fixed inset-0 w-screen h-[125%] -z-30">
        <DarkVeil />
      </div>
      <div className="max-w-7xl w-full sticky top-0 z-0 sm:px-10 px-5"> 
        <FloatingNav navItems={navItems} />
        <Hero />
      </div>
      <div className="w-full bg-black-100 relative z-10 flex justify-center mt-[calc(100vh-12rem)]">
        <div className="w-full sm:px-10 px-5">
          <div className="pt-24 max-w-7xl mx-auto">
            <Grid />
            <Experience />
          </div>
          <RecentProjects />
          <div className="max-w-7xl mx-auto">
            <Footer />
          </div>
        </div>
      </div>
    </main> 
  );
}
