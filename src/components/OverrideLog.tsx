import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const overrideLogs = [
  "2023-11-15 10:30 - Admin Jane Approved (Emergency service request for TRN-1003.)",
  "2023-11-12 14:00 - Ops Manager Rejected (Insufficient information for TRN-1002.)",
  "2023-11-08 09:45 - Admin Jane Approved (Expedited cleaning for TRN-1004.)"
];

export function OverrideLog() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Override Log</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {overrideLogs.map((log, index) => (
            <li key={index} className="text-xs text-foreground leading-relaxed">
              {log}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}