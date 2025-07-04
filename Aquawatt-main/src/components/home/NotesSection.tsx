
import { NotesFeature } from "@/components/NotesFeature";

export function NotesSection({ ref }: { ref: React.RefObject<HTMLDivElement> }) {
  return (
    <div className="py-16 px-6 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-energy-light/50 to-background dark:from-energy-dark/10 dark:to-background opacity-70 pointer-events-none"></div>
      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight mb-2 text-foreground bg-gradient-to-r from-energy-dark to-green-500 bg-clip-text text-transparent">
            Your Notes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Keep track of your thoughts and ideas about water and energy usage
          </p>
        </div>
        <div className="bg-card/50 backdrop-blur-sm shadow-lg rounded-xl p-6 border border-energy/30 animate-fade-in hover:shadow-energy/20 transition-all duration-300">
          <NotesFeature />
        </div>
      </div>
    </div>
  );
}
