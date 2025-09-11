import { Sidebar } from "@/components/Sidebar";
import { DataUpload } from "@/components/DataUpload";

const UploadData = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Upload Data</h1>
            <p className="text-muted-foreground">Upload your train data files to the system</p>
          </header>
          
          <div className="max-w-2xl">
            <DataUpload />
          </div>
        </div>
      </main>
    </div>
  );
};

export default UploadData;