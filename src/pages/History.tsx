import { Sidebar } from "@/components/Sidebar";
import { HistoryLog } from "@/components/HistoryLog";

const History = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">History</h1>
            <p className="text-muted-foreground">View complete system history and activity logs</p>
          </header>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <HistoryLog />
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Recent Activity</h2>
              <div className="bg-card rounded-lg p-6 border">
                <div className="space-y-3">
                  <div className="text-sm text-muted-foreground">Today</div>
                  <div className="space-y-2">
                    <div className="text-sm">
                      <span className="font-medium">15:30</span> - Train TRN-1006 status updated
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">14:15</span> - Maintenance schedule created
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">12:45</span> - Data uploaded by Admin Jane
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default History;