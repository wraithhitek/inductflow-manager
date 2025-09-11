import { Sidebar } from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Megaphone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Marketing = () => {
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
                <Megaphone className="h-8 w-8" />
                Marketing
              </h1>
              <p className="text-muted-foreground">Manage branding and marketing compliance</p>
            </div>
          </header>

          <Card>
            <CardHeader>
              <CardTitle>Marketing & Branding</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Marketing management system coming soon. This will include:
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>• Branding compliance tracking</li>
                <li>• Marketing campaign management</li>
                <li>• Asset and logo monitoring</li>
                <li>• Brand guideline enforcement</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Marketing;