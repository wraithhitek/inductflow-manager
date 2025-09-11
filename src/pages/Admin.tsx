import { Sidebar } from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Settings, Shield, Database } from "lucide-react";

const Admin = () => {
  const adminSections = [
    {
      title: "User Management",
      description: "Manage system users and permissions",
      icon: Users,
      stats: "12 Active Users"
    },
    {
      title: "System Settings",
      description: "Configure system parameters and preferences",
      icon: Settings,
      stats: "Last updated: 2 days ago"
    },
    {
      title: "Security",
      description: "Security settings and access control",
      icon: Shield,
      stats: "All systems secure"
    },
    {
      title: "Database",
      description: "Database management and backups",
      icon: Database,
      stats: "Last backup: Today"
    }
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Admin Panel</h1>
            <p className="text-muted-foreground">System administration and management</p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {adminSections.map((section) => {
              const IconComponent = section.icon;
              return (
                <Card key={section.title} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <IconComponent className="h-5 w-5 text-primary" />
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">{section.description}</p>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{section.stats}</Badge>
                      <Button variant="outline" size="sm">
                        Manage
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>System Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-2xl font-bold text-green-600">98.5%</div>
                  <div className="text-sm text-green-700">System Uptime</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="text-2xl font-bold text-blue-600">1,247</div>
                  <div className="text-sm text-blue-700">Total Records</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="text-2xl font-bold text-purple-600">24/7</div>
                  <div className="text-sm text-purple-700">Monitoring</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Admin;