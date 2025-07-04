
import { Search, Languages, Filter, MessageSquare } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import { toast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useLanguage, languages } from "@/contexts/LanguageContext";

// Search suggestions for autocomplete
const searchSuggestions = [
  "Water usage",
  "Electricity consumption",
  "Kitchen devices",
  "Bathroom devices",
  "Garden irrigation",
  "Energy saving tips",
  "Water saving tips",
  "Billing history",
  "Device status"
];

export function DashboardHeader() {
  const { language, setLanguage, translate } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const [showChatbot, setShowChatbot] = useState(false);

  useEffect(() => {
    // Filter suggestions based on search term
    if (searchTerm.trim()) {
      const filtered = searchSuggestions.filter(
        suggestion => suggestion.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
    
    // Add click outside handler to close suggestions
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchTerm]);

  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
    handleSearch({ preventDefault: () => {} } as React.FormEvent);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      toast({
        title: translate("search_initiated"),
        description: `${translate("searching_for")} "${searchTerm}"`,
      });
      // In a real app, we would perform the actual search here
      console.log("Searching for:", searchTerm);
    }
  };

  const handleLanguageChange = (value: string) => {
    setLanguage(value);
  };

  return (
    <div className="flex flex-col space-y-6 sm:flex-row sm:space-x-4 sm:space-y-0 justify-between items-center p-6 bg-background/60 backdrop-blur-lg border-b transition-colors duration-300">
      <h1 className="text-2xl font-semibold tracking-tight transition-colors hover:text-primary cursor-default">{translate("dashboard")}</h1>
      <div className="flex items-center gap-4">
        <div ref={searchRef} className="relative w-full max-w-sm">
          <form onSubmit={handleSearch} className="relative flex">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground pointer-events-none" />
            <Input 
              placeholder={`${translate("search")}...`} 
              className="pl-8 pr-16 transition-all duration-300 focus:ring-2 focus:ring-primary focus:border-transparent" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => {
                if (searchTerm.trim()) setShowSuggestions(true);
              }}
            />
            <Button 
              type="submit" 
              size="sm" 
              className="absolute right-0 rounded-l-none transition-all duration-300 hover:scale-105"
            >
              {translate("search")}
            </Button>
          </form>
          
          {showSuggestions && filteredSuggestions.length > 0 && (
            <div className="absolute z-10 mt-1 w-full bg-background rounded-md shadow-lg border border-border max-h-60 overflow-auto animate-fade-in">
              {filteredSuggestions.map((suggestion, index) => (
                <div 
                  key={index} 
                  className="px-4 py-2 hover:bg-accent cursor-pointer transition-colors duration-200"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </div>
              ))}
            </div>
          )}
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="icon" className="transition-all duration-300 hover:scale-105">
              <Filter className="h-5 w-5" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{translate("advanced_filters")}</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <p className="text-sm font-medium">{translate("filter_options")}</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="water" className="h-4 w-4" />
                    <label htmlFor="water" className="text-sm">{translate("water_usage")}</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="electricity" className="h-4 w-4" />
                    <label htmlFor="electricity" className="text-sm">{translate("electricity")}</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="kitchen" className="h-4 w-4" />
                    <label htmlFor="kitchen" className="text-sm">{translate("kitchen")}</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="bedroom" className="h-4 w-4" />
                    <label htmlFor="bedroom" className="text-sm">{translate("bedroom")}</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <Button>{translate("apply_filters")}</Button>
            </div>
          </DialogContent>
        </Dialog>
        
        <Select value={language} onValueChange={handleLanguageChange}>
          <SelectTrigger className="w-[120px] transition-transform duration-300 hover:scale-105">
            <Languages className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent>
            {languages.map(lang => (
              <SelectItem key={lang.code} value={lang.code}>
                {lang.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <Button 
          variant="outline" 
          size="icon"
          className="transition-all duration-300 hover:scale-105"
          onClick={() => setShowChatbot(!showChatbot)}
        >
          <MessageSquare className="h-5 w-5" />
        </Button>
        
        <ThemeToggle />
      </div>
      
      {showChatbot && (
        <div className="fixed bottom-4 right-4 w-80 h-96 bg-background border border-border rounded-lg shadow-lg z-50 flex flex-col animate-fade-in">
          <div className="p-3 border-b flex justify-between items-center">
            <h3 className="font-semibold">AquaWatt Assistant</h3>
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-6 w-6 p-0"
              onClick={() => setShowChatbot(false)}
            >
              ✕
            </Button>
          </div>
          <div className="flex-1 overflow-auto p-3 space-y-2">
            <div className="bg-muted p-2 rounded-lg text-sm max-w-[85%]">
              Hello! How can I help you with your water and electricity management today?
            </div>
          </div>
          <div className="p-3 border-t flex gap-2">
            <Input placeholder="Type your message..." className="flex-1" />
            <Button size="sm">Send</Button>
          </div>
        </div>
      )}
    </div>
  );
}
