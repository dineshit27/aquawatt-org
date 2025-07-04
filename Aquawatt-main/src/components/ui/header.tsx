
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 h-16 bg-background/95 backdrop-blur flex items-center justify-between border-b px-6">
      <div className="flex-1 flex items-center">
        <h2 className="text-xl font-semibold">AQUAWATT</h2>
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        <Button variant="outline" size="sm">
          Account
        </Button>
      </div>
    </header>
  );
};

export default Header;
