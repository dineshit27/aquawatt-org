
import { DashboardHeader } from "@/components/DashboardHeader";
import { Sidebar } from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Phone, Mail, Bot, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useRef, useEffect } from "react";
import { toast } from "@/hooks/use-toast";

const About = () => {
  const [chatMessages, setChatMessages] = useState<{ sender: string; message: string }[]>([
    { sender: "bot", message: "Hello! How can I help you today with AQUAWATT?" }
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom of chat when new messages arrive
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    // Add user message
    setChatMessages([...chatMessages, { sender: "user", message: newMessage }]);
    
    // Simulate bot thinking
    setIsTyping(true);
    
    // Generate bot response based on user message
    setTimeout(() => {
      let response = "";
      const userMessage = newMessage.toLowerCase();
      
      if (userMessage.includes("pricing") || userMessage.includes("cost") || userMessage.includes("rate") || userMessage.includes("bill")) {
        response = "AQUAWATT offers competitive rates for water and electricity monitoring. Current rates are ₹3.50 per kL for water and ₹8.50 per kWh for electricity. You can view your detailed billing information in the Billing section.";
      } else if (userMessage.includes("device") || userMessage.includes("control") || userMessage.includes("turn on") || userMessage.includes("turn off")) {
        response = "You can control all your connected devices from the Devices section. Simply toggle the switches to turn devices on or off. We support various smart devices for both water and electricity management.";
      } else if (userMessage.includes("usage") || userMessage.includes("consumption") || userMessage.includes("analytics")) {
        response = "AQUAWATT provides detailed analytics on your water and electricity usage. Visit the Analytics section to view your consumption patterns, trends, and recommendations for optimization.";
      } else if (userMessage.includes("contact") || userMessage.includes("support") || userMessage.includes("help")) {
        response = "You can contact our support team at +91 8122129450 or email us at m.dinesh.it27@gmail.com. We're available 24/7 to assist you with any questions or concerns.";
      } else if (userMessage.includes("hello") || userMessage.includes("hi") || userMessage.includes("hey")) {
        response = "Hello! Welcome to AQUAWATT. How can I assist you today?";
      } else {
        response = "Thank you for your message. I'm AQUAWATT's assistant, designed to help with information about our water and electricity monitoring services. Can you please provide more details about what you'd like to know?";
      }
      
      setChatMessages(prev => [...prev, { sender: "bot", message: response }]);
      setIsTyping(false);
    }, 1500);
    
    setNewMessage("");
  };

  const handleCall = () => {
    window.location.href = "tel:+918122129450";
    toast({
      title: "Initiating Call",
      description: "Calling +91 8122129450",
    });
  };

  const handleEmail = () => {
    window.location.href = "mailto:m.dinesh.it27@gmail.com";
    toast({
      title: "Composing Email",
      description: "Opening email client to m.dinesh.it27@gmail.com",
    });
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <div className="flex-1 overflow-auto p-6">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>About AQUAWATT</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                AQUAWATT is a comprehensive utility management system designed to help households
                monitor and optimize their water and electricity consumption. Our platform provides
                real-time tracking, detailed analytics, and smart device control capabilities to
                promote sustainable resource usage.
              </p>
              <p>
                By combining advanced monitoring technologies with user-friendly interfaces,
                AQUAWATT empowers users to make informed decisions about their utility consumption,
                leading to cost savings and environmental benefits.
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Contact Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="ghost" 
                    className="text-sm text-muted-foreground hover:text-foreground p-0 h-auto flex items-center gap-2"
                    onClick={handleCall}
                  >
                    <Phone className="h-4 w-4" /> +91 8122129450
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="ghost" 
                    className="text-sm text-muted-foreground hover:text-foreground p-0 h-auto flex items-center gap-2"
                    onClick={handleEmail}
                  >
                    <Mail className="h-4 w-4" /> m.dinesh.it27@gmail.com
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <Card className="md:row-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="h-5 w-5" />
                  Live Chat
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col h-[300px]">
                  <div 
                    ref={chatContainerRef}
                    className="flex-1 overflow-y-auto mb-4 space-y-4 pr-2"
                  >
                    {chatMessages.map((chat, index) => (
                      <div 
                        key={index} 
                        className={`flex ${chat.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div 
                          className={`rounded-lg px-4 py-2 max-w-[80%] transition-all ${
                            chat.sender === 'user' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-muted'
                          }`}
                        >
                          {chat.message}
                        </div>
                      </div>
                    ))}
                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="rounded-lg px-4 py-2 bg-muted">
                          <div className="flex space-x-1">
                            <div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce"></div>
                            <div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                            <div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Input 
                      placeholder="Type your message..." 
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <Button size="icon" onClick={handleSendMessage}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
