import { Sidebar } from "@/components/Sidebar";
import { DataUpload } from "@/components/DataUpload";
import { TrainTable } from "@/components/TrainTable";
import { HistoryLog } from "@/components/HistoryLog";
import { OverrideLog } from "@/components/OverrideLog";
import { CriticalAlert } from "@/components/CriticalAlert";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="grid grid-cols-4 gap-6">
          <div className="col-span-3 space-y-6">
            <DataUpload />
            <TrainTable />
          </div>
          <aside className="col-span-1 space-y-6">
            <CriticalAlert />
            <HistoryLog />
            <OverrideLog />
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Index;
