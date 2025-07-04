
import { useState } from "react";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Sidebar } from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
  PieChart, Pie, Cell, LineChart, Line, AreaChart, Area 
} from 'recharts';
import { 
  MapPin, Calendar, Filter, Download, ZoomIn, 
  ZoomOut, RefreshCw, Languages, Eye
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AnalyticsMap } from "@/components/AnalyticsMap";
import { AnalyticsSearch } from "@/components/AnalyticsSearch";
import { toast } from "@/hooks/use-toast";

const monthlyData = [
  { name: 'Jan', water: 320, electricity: 240 },
  { name: 'Feb', water: 300, electricity: 220 },
  { name: 'Mar', water: 340, electricity: 280 },
  { name: 'Apr', water: 280, electricity: 200 },
  { name: 'May', water: 290, electricity: 210 },
  { name: 'Jun', water: 350, electricity: 260 },
];

const distributionData = [
  { name: 'Kitchen', value: 35 },
  { name: 'Bathroom', value: 25 },
  { name: 'Garden', value: 20 },
  { name: 'Laundry', value: 15 },
  { name: 'Other', value: 5 },
];

const hourlyData = [
  { time: '00:00', water: 30, electricity: 25 },
  { time: '03:00', water: 20, electricity: 18 },
  { time: '06:00', water: 35, electricity: 30 },
  { time: '09:00', water: 70, electricity: 65 },
  { time: '12:00', water: 90, electricity: 85 },
  { time: '15:00', water: 85, electricity: 80 },
  { time: '18:00', water: 95, electricity: 90 },
  { time: '21:00', water: 65, electricity: 55 },
];

const yearlyData = [
  { year: '2020', water: 3200, electricity: 2900 },
  { year: '2021', water: 3500, electricity: 3100 },
  { year: '2022', water: 3300, electricity: 3000 },
  { year: '2023', water: 3600, electricity: 3200 },
  { year: '2024', water: 2800, electricity: 2500 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const Analytics = () => {
  const [timeRange, setTimeRange] = useState("monthly");
  const [chartType, setChartType] = useState("bar");
  const [showMap, setShowMap] = useState(false);
  const [language, setLanguage] = useState("en");

  // Translations for basic UI elements
  const translations = {
    en: {
      title: "Advanced Analytics",
      monthlyTrends: "Monthly Usage Trends",
      usageDistribution: "Usage Distribution",
      hourlyPatterns: "Hourly Usage Patterns",
      yearlyComparison: "Yearly Comparison",
      water: "Water (L)",
      electricity: "Electricity (kWh)",
      timeRange: "Time Range",
      chartType: "Chart Type",
      viewMap: "View Usage Map",
      hideMap: "Hide Map",
      export: "Export Data",
      refresh: "Refresh Data"
    },
    es: {
      title: "Análisis Avanzado",
      monthlyTrends: "Tendencias de Uso Mensual",
      usageDistribution: "Distribución de Uso",
      hourlyPatterns: "Patrones de Uso por Hora",
      yearlyComparison: "Comparación Anual",
      water: "Agua (L)",
      electricity: "Electricidad (kWh)",
      timeRange: "Período de Tiempo",
      chartType: "Tipo de Gráfico",
      viewMap: "Ver Mapa de Uso",
      hideMap: "Ocultar Mapa",
      export: "Exportar Datos",
      refresh: "Actualizar Datos"
    },
    hi: {
      title: "उन्नत विश्लेषण",
      monthlyTrends: "मासिक उपयोग प्रवृत्तियां",
      usageDistribution: "उपयोग वितरण",
      hourlyPatterns: "घंटेवार उपयोग पैटर्न",
      yearlyComparison: "वार्षिक तुलना",
      water: "पानी (लीटर)",
      electricity: "बिजली (किलोवाट घंटा)",
      timeRange: "समय सीमा",
      chartType: "चार्ट प्रकार",
      viewMap: "उपयोग मानचित्र देखें",
      hideMap: "मानचित्र छिपाएं",
      export: "डेटा निर्यात करें",
      refresh: "डेटा रिफ्रेश करें"
    }
  };
  
  const t = translations[language as keyof typeof translations];

  const handleExport = () => {
    toast({
      title: "Export initiated",
      description: "Analytics data is being prepared for download",
    });
    // In a real app, this would generate and download the data
  };

  const handleRefresh = () => {
    toast({
      title: "Data refreshed",
      description: "Analytics data has been updated to the latest values",
    });
    // In a real app, this would refresh the data from the server
  };

  // Choose the data based on time range
  const getChartData = () => {
    switch(timeRange) {
      case "hourly": return hourlyData;
      case "yearly": return yearlyData;
      default: return monthlyData;
    }
  };

  // Get the x-axis key name based on time range
  const getXAxisKey = () => {
    switch(timeRange) {
      case "hourly": return "time";
      case "yearly": return "year";
      default: return "name";
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <div className="flex-1 overflow-auto p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">{t.title}</h1>
            <div className="flex items-center gap-2">
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="w-[120px]">
                  <Languages className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Español</SelectItem>
                  <SelectItem value="hi">हिन्दी</SelectItem>
                </SelectContent>
              </Select>
              <AnalyticsSearch />
              <Button variant="outline" size="sm" onClick={handleRefresh}>
                <RefreshCw className="h-4 w-4 mr-2" />
                {t.refresh}
              </Button>
              <Button variant="outline" size="sm" onClick={handleExport}>
                <Download className="h-4 w-4 mr-2" />
                {t.export}
              </Button>
            </div>
          </div>

          <div className="flex gap-4 mb-6">
            <Card className="w-full">
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-4 md:items-center">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <Select value={timeRange} onValueChange={setTimeRange}>
                      <SelectTrigger className="w-[150px]">
                        <SelectValue placeholder={t.timeRange} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hourly">Hourly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="yearly">Yearly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center gap-2">
                    <Filter className="h-4 w-4 text-muted-foreground" />
                    <Select value={chartType} onValueChange={setChartType}>
                      <SelectTrigger className="w-[150px]">
                        <SelectValue placeholder={t.chartType} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bar">Bar Chart</SelectItem>
                        <SelectItem value="line">Line Chart</SelectItem>
                        <SelectItem value="area">Area Chart</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowMap(!showMap)}
                    className="ml-auto"
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    {showMap ? t.hideMap : t.viewMap}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {showMap && (
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Regional Usage Map</CardTitle>
                <CardDescription>View your water and electricity usage by location</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-[400px] rounded-b-lg overflow-hidden">
                  <AnalyticsMap />
                </div>
              </CardContent>
            </Card>
          )}

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>{timeRange === "monthly" ? t.monthlyTrends : 
                            timeRange === "hourly" ? t.hourlyPatterns : t.yearlyComparison}</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  {chartType === "bar" ? (
                    <BarChart data={getChartData()}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey={getXAxisKey()} />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="water" fill="#7FB3D5" name={t.water} />
                      <Bar dataKey="electricity" fill="#82C785" name={t.electricity} />
                    </BarChart>
                  ) : chartType === "line" ? (
                    <LineChart data={getChartData()}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey={getXAxisKey()} />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="water" stroke="#7FB3D5" name={t.water} />
                      <Line type="monotone" dataKey="electricity" stroke="#82C785" name={t.electricity} />
                    </LineChart>
                  ) : (
                    <AreaChart data={getChartData()}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey={getXAxisKey()} />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Area type="monotone" dataKey="water" fill="#7FB3D5" stroke="#5A8DB3" name={t.water} />
                      <Area type="monotone" dataKey="electricity" fill="#82C785" stroke="#5EA568" name={t.electricity} />
                    </AreaChart>
                  )}
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{t.usageDistribution}</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <PieChart>
                    <Pie
                      data={distributionData}
                      cx="50%"
                      cy="50%"
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {distributionData.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Analytics;
