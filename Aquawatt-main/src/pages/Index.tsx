
import { DashboardHeader } from "@/components/DashboardHeader";
import { Sidebar } from "@/components/Sidebar";
import { useRef, useEffect } from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { FactsSection } from "@/components/home/FactsSection";
import { ToolsSection } from "@/components/home/ToolsSection";
import { AchievementsSection } from "@/components/home/AchievementsSection";
import { NotesSection } from "@/components/home/NotesSection";
import { ChatbotWidget } from "@/components/home/ChatbotWidget";

const Index = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);
  const notesRef = useRef<HTMLDivElement>(null);
  const factsRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroElement = document.getElementById('hero-section');
      
      if (heroElement) {
        heroElement.style.backgroundPositionY = `${scrollY * 0.5}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-auto">
        <DashboardHeader />
        
        <HeroSection onScrollToFeatures={() => scrollToSection(featuresRef)} />
        <FeaturesSection ref={featuresRef} />
        <FactsSection ref={factsRef} />
        <ToolsSection ref={toolsRef} />
        <AchievementsSection ref={achievementsRef} />
        <NotesSection ref={notesRef} />
        <ChatbotWidget />
      </main>
    </div>
  );
};

export default Index;
