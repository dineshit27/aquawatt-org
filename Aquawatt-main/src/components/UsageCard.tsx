
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DropletIcon, LightbulbIcon } from "lucide-react";

interface UsageCardProps {
  title: string;
  type: "water" | "electricity";
  value: string;
  change?: string;
  className?: string;
}

export function UsageCard({ title, type, value, change, className }: UsageCardProps) {
  const Icon = type === "water" ? DropletIcon : LightbulbIcon;
  const colorClass = type === "water" ? "text-water-dark" : "text-energy-dark";
  const bgClass = type === "water" ? "bg-water-light" : "bg-energy-light";

  return (
    <Card className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${className}`}>
      <CardHeader className={`${bgClass} flex flex-row items-center justify-between space-y-0 pb-7`}>
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className={`h-4 w-4 ${colorClass}`} />
      </CardHeader>
      <CardContent className="pt-6">
        <div className="text-2xl font-bold">{value}</div>
        {change && (
          <p className="text-xs text-muted-foreground">
            {change}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
