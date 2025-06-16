
import { Pill, Clock, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Medication {
  name: string;
  dosage: string;
  frequency: string;
  prescriber: string;
  startDate: string;
  status: "active" | "discontinued" | "on-hold";
  instructions: string;
}

export function Medications() {
  const medications: Medication[] = [
    {
      name: "Lisinopril",
      dosage: "10mg",
      frequency: "Once daily",
      prescriber: "Dr. Smith",
      startDate: "2024-01-15",
      status: "active",
      instructions: "Take with or without food"
    },
    {
      name: "Metformin",
      dosage: "500mg",
      frequency: "Twice daily",
      prescriber: "Dr. Johnson",
      startDate: "2023-11-20",
      status: "active",
      instructions: "Take with meals"
    },
    {
      name: "Atorvastatin",
      dosage: "20mg",
      frequency: "Once daily at bedtime",
      prescriber: "Dr. Smith",
      startDate: "2024-02-01",
      status: "active",
      instructions: "Take at bedtime"
    },
    {
      name: "Ibuprofen",
      dosage: "400mg",
      frequency: "As needed",
      prescriber: "Dr. Wilson",
      startDate: "2024-06-01",
      status: "discontinued",
      instructions: "For pain relief - discontinued due to stomach irritation"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800 border-green-200";
      case "discontinued": return "bg-red-100 text-red-800 border-red-200";
      case "on-hold": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Pill className="w-5 h-5 mr-2 text-blue-600" />
          Current Medications
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {medications.map((med, index) => (
            <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="font-semibold text-gray-900">{med.name}</h3>
                    <Badge className={getStatusColor(med.status)}>
                      {med.status}
                    </Badge>
                  </div>
                  <div className="text-lg font-medium text-blue-600 mb-1">
                    {med.dosage}
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <Clock className="w-4 h-4 mr-1" />
                    {med.frequency}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{med.instructions}</p>
                  <div className="text-xs text-gray-500">
                    Prescribed by {med.prescriber} • Started {med.startDate}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
          <div className="flex items-center">
            <AlertTriangle className="w-4 h-4 text-amber-600 mr-2" />
            <p className="text-sm text-amber-800">
              Always consult your healthcare provider before making changes to your medications.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
