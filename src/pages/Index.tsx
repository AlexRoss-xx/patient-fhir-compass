
import { PatientHeader } from "@/components/PatientHeader";
import { VitalSigns } from "@/components/VitalSigns";
import { Medications } from "@/components/Medications";
import { LabResults } from "@/components/LabResults";
import { AllergiesAndConditions } from "@/components/AllergiesAndConditions";
import { RecentAppointments } from "@/components/RecentAppointments";
import { Stethoscope } from "lucide-react";

const Index = () => {
  // Mock patient data - in a real SMART on FHIR app, this would come from the EHR
  const mockPatient = {
    id: "patient-123",
    name: "John Michael Doe",
    dateOfBirth: "1978-05-15",
    gender: "Male",
    phone: "(555) 123-4567",
    email: "john.doe@email.com",
    address: "123 Main St, Springfield, IL 62701",
    mrn: "MRN-789456123",
    age: 46
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Stethoscope className="w-8 h-8 text-blue-600 mr-3" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">SMART on FHIR</h1>
                <p className="text-sm text-gray-600">Patient Summary Dashboard</p>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              Last updated: {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Patient Header */}
        <PatientHeader patient={mockPatient} />

        {/* Dashboard Grid */}
        <div className="space-y-8">
          {/* Vital Signs */}
          <VitalSigns />

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Medications />
            <LabResults />
          </div>

          {/* Allergies and Conditions */}
          <AllergiesAndConditions />

          {/* Recent Appointments */}
          <RecentAppointments />
        </div>

        {/* Footer */}
        <footer className="mt-12 py-8 border-t border-gray-200">
          <div className="text-center text-sm text-gray-500">
            <p className="mb-2">
              This is a demonstration SMART on FHIR patient summary application.
            </p>
            <p className="mb-2">
              Data shown is mock data for demonstration purposes only.
            </p>
            <p>
              In a production environment, this would connect to actual EHR systems using FHIR R4 standards.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
