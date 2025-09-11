import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function DataUpload() {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="text-lg">Data Upload</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center gap-6">
          <img 
            src="/upload-icon.svg" 
            alt="Upload" 
            className="w-16 h-16 opacity-70" 
          />
          <div className="flex flex-col md:flex-row items-center gap-4 w-full max-w-md">
            <input 
              type="file" 
              accept=".csv,.xlsx" 
              className="flex-1 text-sm file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-primary/10 file:text-primary hover:file:bg-primary/20 border border-input rounded-lg px-3 py-2 bg-background" 
            />
            <Button className="px-6">
              Upload
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}