
import { AlertTriangle, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Allergy {
  allergen: string;
  reaction: string;
  severity: "mild" | "moderate" | "severe";
  dateIdentified: string;
}

interface Condition {
  name: string;
  status: "active" | "resolved" | "chronic";
  dateOnset: string;
  managedBy: string;
}

export function AllergiesAndConditions() {
  const allergies: Allergy[] = [
    {
      allergen: "Penicillin",
      reaction: "Skin rash, hives",
      severity: "moderate",
      dateIdentified: "2015-03-10"
    },
    {
      allergen: "Shellfish",
      reaction: "Swelling, difficulty breathing",
      severity: "severe",
      dateIdentified: "2010-07-22"
    },
    {
      allergen: "Latex",
      reaction: "Contact dermatitis",
      severity: "mild",
      dateIdentified: "2018-01-15"
    }
  ];

  const conditions: Condition[] = [
    {
      name: "Type 2 Diabetes Mellitus",
      status: "chronic",
      dateOnset: "2020-11-15",
      managedBy: "Dr. Smith"
    },
    {
      name: "Hypertension",
      status: "chronic",
      dateOnset: "2019-08-20",
      managedBy: "Dr. Smith"
    },
    {
      name: "Hyperlipidemia",
      status: "active",
      dateOnset: "2021-02-10",
      managedBy: "Dr. Smith"
    },
    {
      name: "Acute Bronchitis",
      status: "resolved",
      dateOnset: "2024-02-05",
      managedBy: "Dr. Wilson"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "mild": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "moderate": return "bg-orange-100 text-orange-800 border-orange-200";
      case "severe": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getConditionColor = (status: string) => {
    switch (status) {
      case "active": return "bg-blue-100 text-blue-800 border-blue-200";
      case "chronic": return "bg-purple-100 text-purple-800 border-purple-200";
      case "resolved": return "bg-green-100 text-green-800 border-green-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Allergies */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
            Allergies & Adverse Reactions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {allergies.map((allergy, index) => (
              <div key={index} className="p-4 border rounded-lg bg-red-50 border-red-200">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">{allergy.allergen}</h3>
                  <Badge className={getSeverityColor(allergy.severity)}>
                    {allergy.severity}
                  </Badge>
                </div>
                <p className="text-sm text-gray-700 mb-2">{allergy.reaction}</p>
                <p className="text-xs text-gray-500">
                  Identified: {allergy.dateIdentified}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Medical Conditions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Activity className="w-5 h-5 mr-2 text-blue-600" />
            Medical Conditions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {conditions.map((condition, index) => (
              <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">{condition.name}</h3>
                  <Badge className={getConditionColor(condition.status)}>
                    {condition.status}
                  </Badge>
                </div>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>Onset: {condition.dateOnset}</p>
                  <p>Managed by: {condition.managedBy}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
