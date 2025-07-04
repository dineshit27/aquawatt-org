
import { Info } from "lucide-react";
import { RandomFact } from "@/components/RandomFact";

export function FactsSection({ ref }: { ref: React.RefObject<HTMLDivElement> }) {
  return (
    <div ref={ref} className="py-16 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2">
          <Info className="h-6 w-6 text-primary" />
          Did You Know?
        </h2>
        <RandomFact />
      </div>
    </div>
  );
}
