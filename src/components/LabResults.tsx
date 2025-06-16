
import { FlaskConical, TrendingUp, TrendingDown, Minus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface LabResult {
  name: string;
  value: string;
  unit: string;
  referenceRange: string;
  status: "normal" | "high" | "low" | "critical";
  date: string;
  trend: "up" | "down" | "stable";
}

export function LabResults() {
  const labResults: LabResult[] = [
    {
      name: "Hemoglobin A1C",
      value: "6.8",
      unit: "%",
      referenceRange: "< 5.7",
      status: "high",
      date: "2024-06-10",
      trend: "down"
    },
    {
      name: "Total Cholesterol",
      value: "195",
      unit: "mg/dL",
      referenceRange: "< 200",
      status: "normal",
      date: "2024-06-10",
      trend: "stable"
    },
    {
      name: "LDL Cholesterol",
      value: "118",
      unit: "mg/dL",
      referenceRange: "< 100",
      status: "high",
      date: "2024-06-10",
      trend: "down"
    },
    {
      name: "HDL Cholesterol",
      value: "58",
      unit: "mg/dL",
      referenceRange: "> 40",
      status: "normal",
      date: "2024-06-10",
      trend: "up"
    },
    {
      name: "Creatinine",
      value: "1.1",
      unit: "mg/dL",
      referenceRange: "0.7-1.3",
      status: "normal",
      date: "2024-06-10",
      trend: "stable"
    },
    {
      name: "eGFR",
      value: "78",
      unit: "mL/min/1.73m²",
      referenceRange: "> 60",
      status: "normal",
      date: "2024-06-10",
      trend: "stable"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "normal": return "bg-green-100 text-green-800 border-green-200";
      case "high": return "bg-red-100 text-red-800 border-red-200";
      case "low": return "bg-blue-100 text-blue-800 border-blue-200";
      case "critical": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up": return <TrendingUp className="w-4 h-4 text-green-600" />;
      case "down": return <TrendingDown className="w-4 h-4 text-red-600" />;
      case "stable": return <Minus className="w-4 h-4 text-gray-600" />;
      default: return <Minus className="w-4 h-4 text-gray-600" />;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <FlaskConical className="w-5 h-5 mr-2 text-blue-600" />
          Recent Lab Results
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {labResults.map((lab, index) => (
            <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="font-medium text-gray-900">{lab.name}</h3>
                    <Badge className={getStatusColor(lab.status)}>
                      {lab.status}
                    </Badge>
                    {getTrendIcon(lab.trend)}
                  </div>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-lg font-semibold text-gray-900">
                      {lab.value}
                    </span>
                    <span className="text-sm text-gray-500">{lab.unit}</span>
                    <span className="text-sm text-gray-400">
                      (Ref: {lab.referenceRange})
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{lab.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
