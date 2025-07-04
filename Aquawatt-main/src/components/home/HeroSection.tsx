
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HeroSectionProps {
  onScrollToFeatures: () => void;
}

export function HeroSection({ onScrollToFeatures }: HeroSectionProps) {
  const navigate = useNavigate();

  return (
    <div id="hero-section" className="relative h-[80vh] flex items-center justify-center bg-gradient-to-b from-water-light to-background dark:from-water-dark/30 dark:to-background">
      <div className="max-w-4xl mx-auto text-center p-8 bg-background/70 dark:bg-background/20 backdrop-blur-md rounded-lg animate-fade-in border border-water-dark/20 shadow-lg">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-water-dark to-primary bg-clip-text text-transparent">Welcome to AQUAWATT</h1>
        <p className="text-xl text-foreground/80 mb-8">
          Monitor and optimize your water and electricity usage with our smart solutions
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            onClick={() => navigate("/dashboard")}
            className="group transition-all duration-300 hover:scale-105 bg-water-dark hover:bg-water-dark/80"
          >
            Get Started 
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={onScrollToFeatures}
            className="transition-all duration-300 hover:scale-105"
          >
            Learn More
          </Button>
        </div>
      </div>
      
      <button 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-foreground animate-bounce"
        onClick={onScrollToFeatures}
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </div>
  );
}
