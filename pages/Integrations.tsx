import React from "react";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

import { CheckCircle2, Cloud, MoreHorizontal, RefreshCw, ShieldCheck } from "lucide-react";
import { useState } from "react";

export default function Integrations() {
    const providers = [{name:"Google Workspace",account:"alex@pulse.ai",coverage:96,color:"bg-blue-100 text-blue-700"},{name:"Microsoft 365",account:"alex@company.co",coverage:88,color:"bg-orange-100 text-orange-700"},{name:"Apple iCloud",account:"alex@icloud.com",coverage:72,color:"bg-slate-100 text-slate-700"}];
    const [syncing, setSyncing] = useState(false);
    const [managed, setManaged] = useState<number | null>(null);
  return (
   <div className="w-full min-w-0 overflow-x-hidden">
      <div className="mx-auto max-w-6xl w-full min-w-0">
          <section><div className="mb-5 flex flex-wrap items-end justify-between gap-3"><div><h1 className="text-3xl font-semibold">Connected ecosystems</h1><p className="text-muted-foreground">Bring mail and calendars together without losing provider identity.</p></div><Button onClick={() => setSyncing(true)}><RefreshCw className={`h-4 w-4 ${syncing ? "animate-spin" : ""}`}/>Sync all</Button></div><Alert className="mb-5 bg-accent/60"><ShieldCheck className="h-4 w-4"/><AlertTitle>Your data boundaries stay visible</AlertTitle><AlertDescription>OAuth permissions and sync boundaries are always visible and under your control.</AlertDescription></Alert><div className="grid gap-4 lg:grid-cols-3">{providers.map((provider,index) => <Card key={provider.name}><CardHeader><div className="flex items-start justify-between"><div className={`grid h-11 w-11 place-items-center rounded-xl ${provider.color}`}><Cloud className="h-5 w-5"/></div><Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4"/></Button></div><CardTitle className="pt-3">{provider.name}</CardTitle><p className="text-sm text-muted-foreground">{provider.account}</p></CardHeader><CardContent><div className="flex gap-2"><Badge variant="secondary">Mail</Badge><Badge variant="secondary">Calendar</Badge></div><div className="mt-5 flex justify-between text-sm"><span>Sync coverage</span><span>{provider.coverage}%</span></div><Progress value={provider.coverage} className="mt-2"/></CardContent><CardFooter className="justify-between"><span className="flex items-center gap-1 text-xs text-emerald-600"><CheckCircle2 className="h-3.5 w-3.5"/>Connected</span><Button variant="outline" size="sm" onClick={() => setManaged(index)}>Manage</Button></CardFooter></Card>)}</div>{managed !== null && <p className="mt-4 rounded-lg bg-muted p-3 text-sm">Permissions opened for {providers[managed].name}.</p>}</section>
  <section><Card><CardHeader><CardTitle>Sync activity</CardTitle></CardHeader><CardContent className="overflow-x-auto"><Table><TableHeader><TableRow><TableHead>Provider</TableHead><TableHead>Account</TableHead><TableHead>Last sync</TableHead><TableHead>Status</TableHead><TableHead className="text-right">Items</TableHead></TableRow></TableHeader><TableBody>{[["Google","alex@pulse.ai","2 min ago","Healthy","1,248"],["Microsoft","alex@company.co","6 min ago","Healthy","894"],["Apple","alex@icloud.com","12 min ago","Delayed","322"]].map((row) => <TableRow key={row[0]}>{row.map((cell,index) => <TableCell key={cell} className={index===4 ? "text-right" : ""}>{index===3 ? <Badge variant={cell==="Healthy" ? "secondary" : "outline"}>{cell}</Badge> : cell}</TableCell>)}</TableRow>)}</TableBody></Table></CardContent></Card></section>
      </div>
    </div>
  );
}