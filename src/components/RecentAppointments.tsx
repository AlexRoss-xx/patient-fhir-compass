
import { Calendar, Clock, MapPin, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Appointment {
  id: string;
  provider: string;
  specialty: string;
  date: string;
  time: string;
  location: string;
  status: "completed" | "scheduled" | "cancelled";
  type: string;
  notes?: string;
}

export function RecentAppointments() {
  const appointments: Appointment[] = [
    {
      id: "1",
      provider: "Dr. Sarah Smith",
      specialty: "Endocrinology",
      date: "2024-06-15",
      time: "10:30 AM",
      location: "Medical Center - Floor 3",
      status: "scheduled",
      type: "Follow-up",
      notes: "Diabetes management review"
    },
    {
      id: "2",
      provider: "Dr. Michael Johnson",
      specialty: "Cardiology",
      date: "2024-06-10",
      time: "2:00 PM",
      location: "Cardiology Clinic",
      status: "completed",
      type: "Consultation",
      notes: "Blood pressure follow-up"
    },
    {
      id: "3",
      provider: "Dr. Emily Wilson",
      specialty: "Primary Care",
      date: "2024-05-28",
      time: "9:15 AM",
      location: "Family Medicine Clinic",
      status: "completed",
      type: "Annual Physical",
      notes: "Complete physical examination"
    },
    {
      id: "4",
      provider: "Dr. James Brown",
      specialty: "Orthopedics",
      date: "2024-05-15",
      time: "11:00 AM",
      location: "Orthopedic Center",
      status: "cancelled",
      type: "Consultation",
      notes: "Knee pain evaluation - rescheduled"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-100 text-green-800 border-green-200";
      case "scheduled": return "bg-blue-100 text-blue-800 border-blue-200";
      case "cancelled": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Calendar className="w-5 h-5 mr-2 text-blue-600" />
          Recent Appointments
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {appointments.map((appointment) => (
            <div key={appointment.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="font-semibold text-gray-900">{appointment.provider}</h3>
                    <Badge className={getStatusColor(appointment.status)}>
                      {appointment.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-blue-600 font-medium mb-2">
                    {appointment.specialty} • {appointment.type}
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-gray-600 mb-2">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1 text-gray-400" />
                  {appointment.date}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1 text-gray-400" />
                  {appointment.time}
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1 text-gray-400" />
                  {appointment.location}
                </div>
              </div>
              
              {appointment.notes && (
                <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded mt-2">
                  {appointment.notes}
                </p>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
