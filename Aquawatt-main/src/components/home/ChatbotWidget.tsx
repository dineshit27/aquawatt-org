
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, BookOpen } from "lucide-react";

export function ChatbotWidget() {
  const [showChatbot, setShowChatbot] = useState(false);
  
  return (
    <div className="sticky bottom-4 right-4 flex justify-end pr-4">
      {!showChatbot && (
        <Button 
          onClick={() => setShowChatbot(true)}
          className="rounded-full h-12 w-12 shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-110"
        >
          <MessageSquare className="h-5 w-5" />
        </Button>
      )}
      
      {showChatbot && (
        <div className="w-80 h-96 bg-background border border-border rounded-lg shadow-lg z-50 flex flex-col animate-fade-in">
          <div className="p-3 border-b flex justify-between items-center">
            <h3 className="font-semibold flex items-center">
              <BookOpen className="h-4 w-4 mr-2" />
              AquaWatt Assistant
            </h3>
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
            <input 
              placeholder="Type your message..." 
              className="flex-1 rounded-md border border-input px-3 py-2 text-sm"
            />
            <Button size="sm">Send</Button>
          </div>
        </div>
      )}
    </div>
  );
}
