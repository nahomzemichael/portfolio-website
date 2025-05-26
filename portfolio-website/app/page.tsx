import Hero from "@/components/hero";
import Grid from "@/components/grid";
import RecentProjects from "@/components/recent-projects"
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import Footer from "@/components/footer"

export default function Home() {
  
  return (
    <main>
      <div>
        <h1 className="text-3xl text-blue-400 relative left-5">hello</h1>
        <FloatingNav navItems={navItems}/>
        <Hero  />
        <Grid />
        <RecentProjects/>
        <Footer />
      </div>
    </main>
  );
}
