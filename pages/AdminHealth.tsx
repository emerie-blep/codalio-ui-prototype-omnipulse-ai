import React from "react";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

import { Activity, CheckCircle2, RefreshCw } from "lucide-react";
export default function AdminHealth() {
  return (
    <div className="w-full min-w-0 overflow-x-hidden">
      <div className="mx-auto max-w-[1500px] w-full min-w-0">
          <section><div className="mb-5 flex items-end justify-between"><div><h1 className="text-3xl font-semibold">Service health</h1><p className="text-muted-foreground">Provider sync and action infrastructure.</p></div><Button variant="outline"><RefreshCw className="h-4 w-4"/>Refresh</Button></div><Alert className="mb-5 border-emerald-200 bg-emerald-50 text-emerald-900"><CheckCircle2 className="h-4 w-4"/><AlertTitle>All systems operational</AlertTitle><AlertDescription>Last updated less than a minute ago.</AlertDescription></Alert><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{["Gmail sync","Google Calendar","Outlook Mail","Microsoft Calendar","iCloud Mail","AI actions"].map((service,index) => <Card key={service}><CardHeader className="flex-row items-center justify-between"><CardTitle className="text-base">{service}</CardTitle><Badge variant="secondary">Operational</Badge></CardHeader><CardContent><div className="flex justify-between text-sm text-muted-foreground"><span>Success rate</span><span>{99-index/10}%</span></div><Progress value={99-index/10} className="mt-2"/><p className="mt-3 flex items-center gap-1 text-xs text-muted-foreground"><Activity className="h-3.5 w-3.5"/>{120+index*18}ms latency</p></CardContent></Card>)}</div><Card className="mt-5"><CardHeader><CardTitle>Health telemetry</CardTitle></CardHeader><CardContent className="overflow-x-auto"><Table><TableHeader><TableRow><TableHead>Service</TableHead><TableHead>Region</TableHead><TableHead>Success rate</TableHead><TableHead>Latency</TableHead><TableHead>Last incident</TableHead></TableRow></TableHeader><TableBody>{[["Gmail sync","us-west","99.98%","128ms","14d ago"],["Outlook Mail","us-east","99.95%","164ms","21d ago"],["AI actions","global","99.99%","312ms","None"]].map((row) => <TableRow key={row[0]}>{row.map((cell) => <TableCell key={cell}>{cell}</TableCell>)}</TableRow>)}</TableBody></Table></CardContent></Card></section>
  <section><Card><CardHeader><CardTitle>Recent incidents</CardTitle></CardHeader><CardContent className="flex flex-col items-center py-10 text-center"><CheckCircle2 className="h-10 w-10 text-emerald-600"/><p className="mt-3 font-medium">No active incidents</p><p className="text-sm text-muted-foreground">All provider connections are within healthy thresholds.</p></CardContent></Card></section>
      </div>
    </div>
  );
}