import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

import { Activity, ArrowRight, Bot, CheckCircle2, Inbox, Sparkles, Timer } from "lucide-react";
export default function DashboardSummary() {
  return (
    <div className="w-full min-w-0 overflow-x-hidden">
      <div className="mx-auto max-w-[1500px] w-full min-w-0">
          <section><div className="mb-6"><Badge variant="secondary">This week</Badge><h1 className="mt-2 text-3xl font-semibold">Productivity summary</h1><p className="mt-1 text-muted-foreground">See where your time went and what OmniPulse improved.</p></div><div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{[{label:"Completed tasks",value:"24",icon:CheckCircle2,p:82},{label:"Scheduled focus",value:"11.5h",icon:Timer,p:72},{label:"Inbox processed",value:"46",icon:Inbox,p:91},{label:"AI actions",value:"18",icon:Bot,p:64}].map(({label,value,icon:Icon,p}) => <Card key={label}><CardHeader className="flex-row items-center justify-between"><CardTitle className="text-sm text-muted-foreground">{label}</CardTitle><Icon className="h-5 w-5 text-primary" /></CardHeader><CardContent><p className="text-3xl font-semibold">{value}</p><Progress value={p} className="mt-4" /></CardContent></Card>)}</div><Card className="mt-6"><CardHeader><CardTitle>Domain balance</CardTitle></CardHeader><CardContent><Tabs defaultValue="week"><TabsList><TabsTrigger value="week">Week</TabsTrigger><TabsTrigger value="month">Month</TabsTrigger></TabsList>{["week","month"].map((period) => <TabsContent key={period} value={period} className="pt-6"><div className="flex min-h-64 items-end justify-around gap-6 rounded-xl bg-muted/50 p-6">{[{n:"Work",h:"78%",c:"bg-primary"},{n:"School",h:"52%",c:"bg-amber-500"},{n:"Life",h:"65%",c:"bg-rose-400"}].map((bar) => <div key={bar.n} className="flex h-52 flex-1 flex-col justify-end gap-2 text-center"><div className={`${bar.c} mx-auto w-full max-w-24 rounded-t-lg`} style={{height:bar.h}} /><span className="text-sm font-medium">{bar.n}</span></div>)}</div></TabsContent>)}</Tabs></CardContent></Card></section>
  <section><Card><CardHeader><CardTitle className="flex items-center gap-2"><Sparkles className="h-5 w-5 text-primary" />Recent intelligence</CardTitle></CardHeader><CardContent className="space-y-3">{["Moved roadmap review to protect a 90-minute focus block","Turned 3 urgent emails into actionable tasks","Flagged a calendar conflict for Thursday"].map((item,index) => <div key={item} className="flex items-center gap-3 rounded-lg border p-4"><Badge variant="secondary">AI</Badge><p className="flex-1 text-sm">{item}</p><span className="text-xs text-muted-foreground">{index+1}h ago</span><Button size="icon" variant="ghost"><ArrowRight className="h-4 w-4" /></Button></div>)}</CardContent></Card></section>
      </div>
    </div>
  );
}