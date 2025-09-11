import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const logs = [
  { date: "November 1st, 2023" },
  { date: "September 6th, 2025" },
];

const historyItems = [
  { id: "H-001", plan: "IND-2023-01", admin: "Admin Jane" },
  { id: "H-002", plan: "IND-2023-02", admin: "Ops Manager" },
  { id: "H-003", plan: "IND-2023-03", admin: "Admin Jane" },
  { id: "H-004", plan: "IND-2023-04", admin: "System" },
  { id: "H-005", plan: "IND-2023-05", admin: "Admin John" },
];

export function HistoryLog() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">History Log</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-1">
          {logs.map((log) => (
            <div key={log.date} className="text-sm text-muted-foreground font-medium">
              {log.date}
            </div>
          ))}
        </div>
        
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-xs">ID</TableHead>
                <TableHead className="text-xs">Plan ID</TableHead>
                <TableHead className="text-xs">By</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {historyItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="text-xs">{item.id}</TableCell>
                  <TableCell className="text-xs">{item.plan}</TableCell>
                  <TableCell className="text-xs">{item.admin}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}