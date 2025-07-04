
import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";

export function HomeCalendar() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  
  // Example usage dates - in a real app, these would come from an API
  const waterHighUsageDates = [
    new Date(new Date().getFullYear(), new Date().getMonth(), 5),
    new Date(new Date().getFullYear(), new Date().getMonth(), 12),
    new Date(new Date().getFullYear(), new Date().getMonth(), 19),
    new Date(new Date().getFullYear(), new Date().getMonth(), 26)
  ];
  
  const electricityHighUsageDates = [
    new Date(new Date().getFullYear(), new Date().getMonth(), 3),
    new Date(new Date().getFullYear(), new Date().getMonth(), 10),
    new Date(new Date().getFullYear(), new Date().getMonth(), 17),
    new Date(new Date().getFullYear(), new Date().getMonth(), 24)
  ];
  
  return (
    <div className="space-y-4">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border max-w-full"
        modifiers={{
          waterHighUsage: waterHighUsageDates,
          electricityHighUsage: electricityHighUsageDates,
        }}
        modifiersClassNames={{
          waterHighUsage: "bg-water-light text-water-dark font-medium",
          electricityHighUsage: "bg-energy-light text-energy-dark font-medium",
        }}
      />
      
      <div className="flex justify-center gap-4 text-sm">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-water-light rounded-full mr-2"></div>
          <span>High Water Usage</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-energy-light rounded-full mr-2"></div>
          <span>High Electricity Usage</span>
        </div>
      </div>
      
      {date && (
        <Card>
          <CardContent className="pt-4">
            <p className="text-sm text-center">
              {date.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
            <div className="mt-2 text-xs text-muted-foreground text-center">
              Click on a date to see usage details
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
