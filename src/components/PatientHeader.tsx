
import { User, Calendar, Phone, Mail, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PatientHeaderProps {
  patient: {
    id: string;
    name: string;
    dateOfBirth: string;
    gender: string;
    phone: string;
    email: string;
    address: string;
    mrn: string;
    age: number;
  };
}

export function PatientHeader({ patient }: PatientHeaderProps) {
  return (
    <Card className="mb-6">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <CardTitle className="text-2xl text-gray-900">{patient.name}</CardTitle>
              <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                  MRN: {patient.mrn}
                </Badge>
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {patient.dateOfBirth} (Age {patient.age})
                </span>
                <Badge variant="secondary">
                  {patient.gender}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center text-gray-600">
            <Phone className="w-4 h-4 mr-2 text-blue-600" />
            {patient.phone}
          </div>
          <div className="flex items-center text-gray-600">
            <Mail className="w-4 h-4 mr-2 text-blue-600" />
            {patient.email}
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-2 text-blue-600" />
            {patient.address}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
