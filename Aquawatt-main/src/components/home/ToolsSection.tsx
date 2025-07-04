
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Calculator } from "lucide-react";
import { HomeCalendar } from "@/components/HomeCalendar";
import { HomeCalculator } from "@/components/HomeCalculator";

export function ToolsSection({ ref }: { ref: React.RefObject<HTMLDivElement> }) {
  return (
    <div ref={ref} className="py-16 px-6 bg-muted/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Useful Tools</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="transition-all duration-300 hover:shadow-xl hover:scale-105 backdrop-blur-sm bg-background/80">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Calendar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <HomeCalendar />
            </CardContent>
          </Card>
          
          <Card className="transition-all duration-300 hover:shadow-xl hover:scale-105 backdrop-blur-sm bg-background/80">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5 text-primary" />
                Usage Calculator
              </CardTitle>
            </CardHeader>
            <CardContent>
              <HomeCalculator />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
