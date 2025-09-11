import { Sidebar } from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Cleaning = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <header className="mb-8 flex items-center gap-4">
            <Button 
              variant="outline" 
              onClick={() => navigate("/dashboard")}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-3">
                <Sparkles className="h-8 w-8" />
                Cleaning
              </h1>
              <p className="text-muted-foreground">Track cleaning status and schedules</p>
            </div>
          </header>

          <Card>
            <CardHeader>
              <CardTitle>Cleaning Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Cleaning management system coming soon. This will include:
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>• Cleaning schedule tracking</li>
                <li>• Status updates and notifications</li>
                <li>• Quality inspection reports</li>
                <li>• Cleaning crew assignments</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Cleaning;