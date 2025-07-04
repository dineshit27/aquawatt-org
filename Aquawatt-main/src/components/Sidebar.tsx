
import {
  HomeIcon,
  InfoIcon,
  LayoutDashboardIcon,
  CreditCardIcon,
  SettingsIcon,
  BarChartIcon,
  MenuIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useLocation, Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const { translate } = useLanguage();

  const menuItems = [
    { icon: HomeIcon, label: "home", href: "/" },
    { icon: LayoutDashboardIcon, label: "dashboard", href: "/dashboard" },
    { icon: CreditCardIcon, label: "billing", href: "/billing" },
    { icon: SettingsIcon, label: "devices", href: "/devices" },
    { icon: BarChartIcon, label: "analytics", href: "/analytics" },
    { icon: InfoIcon, label: "about", href: "/about" },
  ];

  return (
    <div
      className={cn(
        "h-screen flex flex-col border-r bg-background/60 backdrop-blur-lg transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="p-4 flex justify-between items-center">
        <h2 className={cn("font-semibold", collapsed && "hidden")}>AQUAWATT</h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="h-8 w-8"
        >
          <MenuIcon className="h-4 w-4" />
        </Button>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center space-x-3 p-2 rounded-lg transition-colors",
                    isActive ? "bg-accent text-accent-foreground" : "hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {!collapsed && <span>{translate(item.label)}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
