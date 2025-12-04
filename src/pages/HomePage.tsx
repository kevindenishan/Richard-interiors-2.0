import { NavBar } from "../Components/NavBar";
import { ThemeToggle } from "../Components/ThemeToggle";
import { HeroSection } from "../Components/HeroSection";
import { HowWeWorks } from "../Components/Howweworks";
import { Footer } from "../Components/Footer";

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* {theme toggle} */}
      <ThemeToggle />
      {/* {Navigation bar} */}
      <NavBar />
      {/* {background images and effects} */}

      {/* {Main content} */}
      <main>
        <HeroSection />
        
      </main>
      <HowWeWorks />
      {/* {Footer} */}
      <Footer />
    </div>
  );
};
