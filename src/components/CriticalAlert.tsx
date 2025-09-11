import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

export function CriticalAlert() {
  return (
    <Alert className="border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive bg-error-light">
      <AlertTriangle className="h-4 w-4" />
      <AlertDescription className="font-semibold">
        <div className="font-bold text-sm mb-1">⚠️ Critical Warning</div>
        <div className="text-sm">
          No available train meets brand + fitness for 6am slot.
        </div>
      </AlertDescription>
    </Alert>
  );
}