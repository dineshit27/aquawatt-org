
import { DashboardHeader } from "@/components/DashboardHeader";
import { Sidebar } from "@/components/Sidebar";
import { UsageCard } from "@/components/UsageCard";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', water: 120, electricity: 45 },
  { name: 'Tue', water: 98, electricity: 42 },
  { name: 'Wed', water: 105, electricity: 48 },
  { name: 'Thu', water: 115, electricity: 50 },
  { name: 'Fri', water: 90, electricity: 40 },
  { name: 'Sat', water: 85, electricity: 38 },
  { name: 'Sun', water: 95, electricity: 43 },
];

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <div className="flex-1 overflow-auto p-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <UsageCard
              title="Kitchen Water Usage"
              type="water"
              value="120L"
              change="+5% from last week"
            />
            <UsageCard
              title="Kitchen Electricity"
              type="electricity"
              value="45kWh"
              change="-2% from last week"
            />
            <UsageCard
              title="Bathroom Water Usage"
              type="water"
              value="85L"
              change="+3% from last week"
            />
            <UsageCard
              title="Bathroom Electricity"
              type="electricity"
              value="30kWh"
              change="Same as last week"
            />
          </div>
          <div className="mt-6 bg-card p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Weekly Usage Trends</h2>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="water" stroke="#7FB3D5" name="Water (L)" />
                <Line yAxisId="right" type="monotone" dataKey="electricity" stroke="#82C785" name="Electricity (kWh)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
