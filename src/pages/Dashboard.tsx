import { useNavigate } from "react-router-dom";
import { Sidebar } from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Sparkles, Megaphone } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  const sections = [
    {
      id: "maintenance",
      title: "Maintenance",
      icon: Wrench,
      description: "Manage train maintenance schedules and repairs",
      route: "/maintenance",
      color: "bg-blue-50 hover:bg-blue-100 border-blue-200"
    },
    {
      id: "cleaning",
      title: "Cleaning", 
      icon: Sparkles,
      description: "Track cleaning status and schedules",
      route: "/cleaning",
      color: "bg-green-50 hover:bg-green-100 border-green-200"
    },
    {
      id: "marketing",
      title: "Marketing",
      icon: Megaphone,
      description: "Manage branding and marketing compliance",
      route: "/marketing", 
      color: "bg-purple-50 hover:bg-purple-100 border-purple-200"
    }
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
            <p className="text-muted-foreground">Select which area you'd like to visit</p>
          </header>
          
          <div className="grid grid-cols-1 gap-6">
            {sections.map((section) => {
              const IconComponent = section.icon;
              return (
                <Card 
                  key={section.id}
                  className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${section.color}`}
                  onClick={() => navigate(section.route)}
                >
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <IconComponent className="h-6 w-6" />
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{section.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;