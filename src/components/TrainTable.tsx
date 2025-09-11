import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type TrainStatus = "Fit" | "Unfit";
type BrandingStatus = "Compliant" | "Non-Compliant";
type CleaningStatus = "Cleaned" | "Pending";
type JobStatus = "Closed" | "Open";
type OverrideStatus = "None" | "Approved" | "Rejected";

interface TrainRow {
  id: string;
  assignment: string;
  fitness: TrainStatus;
  branding: BrandingStatus;
  mileage: string;
  cleaning: CleaningStatus;
  job: JobStatus;
  override: OverrideStatus;
  why: string;
}

const trainRows: TrainRow[] = [
  { 
    id: "TRN-1001", 
    assignment: "Service", 
    fitness: "Fit", 
    branding: "Compliant", 
    mileage: "120k km", 
    cleaning: "Cleaned", 
    job: "Closed", 
    override: "None", 
    why: "" 
  },
  { 
    id: "TRN-1002", 
    assignment: "Standby", 
    fitness: "Unfit", 
    branding: "Non-Compliant", 
    mileage: "150k km", 
    cleaning: "Pending", 
    job: "Open", 
    override: "None", 
    why: "" 
  },
  { 
    id: "TRN-1003", 
    assignment: "IBL", 
    fitness: "Fit", 
    branding: "Compliant", 
    mileage: "80k km", 
    cleaning: "Cleaned", 
    job: "Closed", 
    override: "Approved", 
    why: "" 
  },
  { 
    id: "TRN-1004", 
    assignment: "Service", 
    fitness: "Fit", 
    branding: "Compliant", 
    mileage: "95k km", 
    cleaning: "Cleaned", 
    job: "Closed", 
    override: "Approved", 
    why: "" 
  },
  { 
    id: "TRN-1005", 
    assignment: "Standby", 
    fitness: "Fit", 
    branding: "Compliant", 
    mileage: "110k km", 
    cleaning: "Cleaned", 
    job: "Closed", 
    override: "None", 
    why: "" 
  },
];

function getStatusBadge(status: string, type: 'fitness' | 'branding' | 'cleaning' | 'job' | 'override') {
  switch (type) {
    case 'fitness':
    case 'branding':
      return status === "Fit" || status === "Compliant" 
        ? <Badge variant="success-light">{status}</Badge>
        : <Badge variant="error-light">{status}</Badge>;
    
    case 'cleaning':
      return status === "Cleaned"
        ? <Badge variant="success-light">{status}</Badge>
        : <Badge variant="warning-light">{status}</Badge>;
    
    case 'job':
      return status === "Closed"
        ? <Badge variant="neutral-light">{status}</Badge>
        : <Badge variant="warning-light">{status}</Badge>;
    
    case 'override':
      if (status === "Approved") return <Badge variant="success-light">{status}</Badge>;
      if (status === "Rejected") return <Badge variant="error-light">{status}</Badge>;
      return <Badge variant="neutral-light">{status}</Badge>;
    
    default:
      return <Badge variant="neutral-light">{status}</Badge>;
  }
}

export function TrainTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Induction Plan</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-semibold">Train ID</TableHead>
                <TableHead className="font-semibold">Assignment</TableHead>
                <TableHead className="font-semibold">Fitness Status</TableHead>
                <TableHead className="font-semibold">Branding Status</TableHead>
                <TableHead className="font-semibold">Mileage</TableHead>
                <TableHead className="font-semibold">Cleaning Status</TableHead>
                <TableHead className="font-semibold">Job-card Status</TableHead>
                <TableHead className="font-semibold">Manual Override</TableHead>
                <TableHead className="font-semibold">Why?</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {trainRows.map((train) => (
                <TableRow key={train.id}>
                  <TableCell className="font-medium">{train.id}</TableCell>
                  <TableCell>{train.assignment}</TableCell>
                  <TableCell>{getStatusBadge(train.fitness, 'fitness')}</TableCell>
                  <TableCell>{getStatusBadge(train.branding, 'branding')}</TableCell>
                  <TableCell>{train.mileage}</TableCell>
                  <TableCell>{getStatusBadge(train.cleaning, 'cleaning')}</TableCell>
                  <TableCell>{getStatusBadge(train.job, 'job')}</TableCell>
                  <TableCell>{getStatusBadge(train.override, 'override')}</TableCell>
                  <TableCell>{train.why}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}