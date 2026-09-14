import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

import { Activity, Building2, Download, KeyRound, ServerCog, ShieldCheck } from "lucide-react";
export default function Admin() {
  return (
    <div className="w-full min-w-0 overflow-x-hidden">
      <div className="mx-auto max-w-[1500px] w-full min-w-0">
          <section><div className="mb-5"><Badge variant="outline">Admin only</Badge><h1 className="mt-2 text-3xl font-semibold">Platform operations</h1><p className="text-muted-foreground">Monitor organizations, providers, and OAuth health.</p></div><div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{[{l:"Active integrations",v:"2,418",i:Building2,p:84},{l:"Sync success rate",v:"99.96%",i:Activity,p:99},{l:"OAuth refreshes",v:"18.2k",i:KeyRound,p:72},{l:"API quota",v:"68%",i:ServerCog,p:68}].map(({l,v,i:Icon,p}) => <Card key={l}><CardHeader className="flex-row items-center justify-between"><CardTitle className="text-sm text-muted-foreground">{l}</CardTitle><Icon className="h-5 w-5 text-primary"/></CardHeader><CardContent><p className="text-3xl font-semibold">{v}</p><Progress value={p} className="mt-4"/></CardContent></Card>)}</div><Card className="mt-5"><CardHeader><CardTitle>Provider operations</CardTitle></CardHeader><CardContent className="overflow-x-auto"><Table><TableHeader><TableRow><TableHead>Provider</TableHead><TableHead>Organization</TableHead><TableHead>Accounts</TableHead><TableHead>Status</TableHead><TableHead>Quota</TableHead><TableHead/></TableRow></TableHeader><TableBody>{[["Google","Northstar Labs","842","Healthy","64%"],["Microsoft","Arc & Co.","519","Healthy","71%"],["Apple","Independent","1,057","Watching","82%"]].map((row) => <TableRow key={row[0]}>{row.map((cell,index) => <TableCell key={cell}>{index===3 ? <Badge variant="secondary">{cell}</Badge> : cell}</TableCell>)}<TableCell><Button variant="outline" size="sm">Inspect</Button></TableCell></TableRow>)}</TableBody></Table></CardContent></Card></section>
  <section><Card><CardHeader className="flex-row items-center justify-between"><CardTitle className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-primary"/>Compliance and AI activity</CardTitle><Button variant="outline" size="sm"><Download className="h-4 w-4"/>Export</Button></CardHeader><CardContent><Tabs defaultValue="ai"><TabsList><TabsTrigger value="ai">AI actions</TabsTrigger><TabsTrigger value="roles">Role assignments</TabsTrigger><TabsTrigger value="compliance">Compliance</TabsTrigger></TabsList>{["ai","roles","compliance"].map((tab) => <TabsContent key={tab} value={tab} className="space-y-3 pt-4">{["Action preview approved by Alex M.","Provider scope updated for Northstar Labs","Audit export completed successfully"].map((item,index) => <div key={item} className="flex items-center gap-3 rounded-lg border p-3"><Badge variant="outline">{tab}</Badge><p className="flex-1 text-sm">{item}</p><span className="text-xs text-muted-foreground">{index+2}h ago</span></div>)}</TabsContent>)}</Tabs></CardContent></Card></section>
      </div>
    </div>
  );
}