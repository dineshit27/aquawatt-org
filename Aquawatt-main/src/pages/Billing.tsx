
import { DashboardHeader } from "@/components/DashboardHeader";
import { Sidebar } from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Billing = () => {
  // Get current date for billing period
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
  const currentYear = currentDate.getFullYear();

  // Function to handle bill download
  const handleDownload = (month: string) => {
    // In a real app, we would generate and download a PDF here
    // This is a simplified version for demonstration purposes
    
    // Create a placeholder for PDF content
    const billContent = `
      AQUAWATT - Utility Bill
      Billing Period: ${month}
      
      Water Usage: 3.50 kL
      Water Charges: ₹1,575.00
      
      Electricity Usage: 210 kWh
      Electricity Charges: ₹2,310.00
      
      Total Amount: ₹3,885.00
      
      Thank you for using AQUAWATT services!
    `;
    
    // Create a Blob containing the text content
    const blob = new Blob([billContent], { type: 'application/pdf' });
    
    // Create a URL for the Blob
    const url = URL.createObjectURL(blob);
    
    // Create a temporary anchor element and trigger download
    const a = document.createElement('a');
    a.href = url;
    a.download = `AQUAWATT-Bill-${month.replace(/\s/g, '-')}.pdf`;
    document.body.appendChild(a);
    a.click();
    
    // Clean up
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Bill Download Started",
      description: `Your ${month} bill is being downloaded as PDF`,
    });
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <div className="flex-1 overflow-auto p-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Current Bill ({currentMonth} {currentYear})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Water Usage (3.50 kL)</span>
                    <span className="font-semibold">₹1,575.00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Electricity Usage (210 kWh)</span>
                    <span className="font-semibold">₹2,310.00</span>
                  </div>
                  <div className="flex justify-between items-center border-t pt-4">
                    <span className="font-semibold">Total Amount</span>
                    <span className="font-bold text-lg">₹3,885.00</span>
                  </div>
                  <div className="flex justify-end">
                    <Button variant="outline" onClick={() => handleDownload(`${currentMonth} ${currentYear}`)}>
                      <Download className="mr-2 h-4 w-4" />
                      Download Bill
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Billing History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { month: `March ${currentYear}`, amount: "₹3,715.50", status: "Paid" },
                    { month: `February ${currentYear}`, amount: "₹3,925.75", status: "Paid" },
                    { month: `January ${currentYear}`, amount: "₹4,132.00", status: "Paid" },
                  ].map((bill) => (
                    <div key={bill.month} className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">{bill.month}</p>
                        <p className="text-sm text-muted-foreground">{bill.status}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span>{bill.amount}</span>
                        <Button variant="outline" size="icon" onClick={() => handleDownload(bill.month)}>
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Billing;
