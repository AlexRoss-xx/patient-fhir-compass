
import { Activity, Heart, Thermometer, Weight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface VitalSign {
  name: string;
  value: string;
  unit: string;
  status: "normal" | "elevated" | "critical";
  lastUpdated: string;
  icon: React.ReactNode;
}

export function VitalSigns() {
  const vitals: VitalSign[] = [
    {
      name: "Blood Pressure",
      value: "128/82",
      unit: "mmHg",
      status: "elevated",
      lastUpdated: "2 hours ago",
      icon: <Activity className="w-5 h-5" />
    },
    {
      name: "Heart Rate",
      value: "72",
      unit: "bpm",
      status: "normal",
      lastUpdated: "2 hours ago",
      icon: <Heart className="w-5 h-5" />
    },
    {
      name: "Temperature",
      value: "98.6",
      unit: "°F",
      status: "normal",
      lastUpdated: "2 hours ago",
      icon: <Thermometer className="w-5 h-5" />
    },
    {
      name: "Weight",
      value: "165",
      unit: "lbs",
      status: "normal",
      lastUpdated: "1 week ago",
      icon: <Weight className="w-5 h-5" />
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "normal": return "bg-green-100 text-green-800 border-green-200";
      case "elevated": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "critical": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Activity className="w-5 h-5 mr-2 text-blue-600" />
          Vital Signs
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {vitals.map((vital, index) => (
            <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <div className="text-blue-600">{vital.icon}</div>
                <Badge className={getStatusColor(vital.status)}>
                  {vital.status}
                </Badge>
              </div>
              <h3 className="font-medium text-gray-900 mb-1">{vital.name}</h3>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {vital.value} <span className="text-sm font-normal text-gray-500">{vital.unit}</span>
              </div>
              <p className="text-xs text-gray-500">{vital.lastUpdated}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
