
import { DashboardHeader } from "@/components/DashboardHeader";
import { Sidebar } from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Droplet, Lightbulb } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const Devices = () => {
  const { translate } = useLanguage();
  
  const [devices, setDevices] = useState([
    { name: "bedroom_electricity", type: "electricity", status: true },
    { name: "bedroom_water", type: "water", status: false },
    { name: "kitchen_electricity", type: "electricity", status: true },
    { name: "kitchen_water", type: "water", status: false },
    { name: "hall_electricity", type: "electricity", status: true },
    { name: "hall_water", type: "water", status: false },
  ]);

  const handleToggle = (index: number) => {
    const updatedDevices = [...devices];
    updatedDevices[index].status = !updatedDevices[index].status;
    setDevices(updatedDevices);
    
    const device = updatedDevices[index];
    toast({
      title: device.status ? translate("device_activated") : translate("device_deactivated"),
      description: `${translate(device.name)} ${translate("is_now")} ${device.status ? translate("on") : translate("off")}`,
    });

    // In a real app, we would send a request to a backend service to control the actual device
    console.log(`Device control: ${translate(device.name)} is now ${device.status ? translate("on") : translate("off")}`);
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <div className="flex-1 overflow-auto p-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {devices.map((device, index) => (
              <Card key={device.name} className="transition-all duration-300 hover:shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {device.type === "water" ? (
                      <Droplet className="h-5 w-5 text-water-dark" />
                    ) : (
                      <Lightbulb className="h-5 w-5 text-energy-dark" />
                    )}
                    {translate(device.name)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Label htmlFor={`device-${index}`} className="transition-colors">
                      {device.status ? translate("on") : translate("off")}
                    </Label>
                    <Switch
                      id={`device-${index}`}
                      checked={device.status}
                      onCheckedChange={() => handleToggle(index)}
                      className="transition-all"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Devices;
