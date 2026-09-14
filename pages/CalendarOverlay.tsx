import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { Label } from "../components/ui/label";
import { Switch } from "../components/ui/switch";

import { AlertTriangle, CalendarDays, RotateCcw } from "lucide-react";
import { useState } from "react";

export default function CalendarOverlay() {
    const [conflicts, setConflicts] = useState(true);
  return (
   <div className="w-full min-w-0 overflow-x-hidden">
      <div className="mx-auto max-w-6xl w-full min-w-0">
          <section><div className="mb-5"><h1 className="text-3xl font-semibold">Calendar overlay</h1><p className="text-muted-foreground">Compare calendars and reveal conflicts at a glance.</p></div><div className="grid gap-4 lg:grid-cols-[18rem_1fr]"><Card className="lg:sticky lg:top-24 lg:self-start"><CardHeader><CardTitle className="text-base">Overlay controls</CardTitle></CardHeader><CardContent className="space-y-5"><div className="flex items-center justify-between"><Label>Conflict detection</Label><Switch checked={conflicts} onCheckedChange={setConflicts}/></div><div><p className="mb-3 text-sm font-medium">Calendars</p>{["Google Workspace","Microsoft 365","iCloud"].map((item) => <label key={item} className="mb-2 flex items-center gap-2 text-sm"><Checkbox defaultChecked/>{item}</label>)}</div><div><p className="mb-3 text-sm font-medium">Domains</p>{["Work","School","Life"].map((item) => <label key={item} className="mb-2 flex items-center gap-2 text-sm"><Checkbox defaultChecked/>{item}</label>)}</div><Button variant="outline" className="w-full"><RotateCcw className="h-4 w-4"/>Reset</Button></CardContent></Card><Card><CardContent className="p-5"><div className="mb-4 flex items-center justify-between"><div className="flex items-center gap-2 font-medium"><CalendarDays className="h-5 w-5 text-primary"/>Tuesday, May 14</div><Badge>{conflicts ? "1 conflict" : "Overlay active"}</Badge></div><div className="relative min-h-[580px] rounded-xl border bg-muted/30 p-5">{[{t:"9:00",n:"Team stand-up",c:"bg-primary/15 border-primary",top:30},{t:"10:00",n:"Focus block",c:"bg-primary/15 border-primary",top:120},{t:"3:00",n:"Data systems lecture",c:"bg-amber-500/15 border-amber-500",top:330},{t:"3:15",n:"Project check-in",c:"bg-rose-400/15 border-rose-400",top:365}].map((event) => <div key={event.n} className={`absolute left-20 right-5 rounded-lg border p-3 ${event.c}`} style={{top:event.top}}><span className="text-xs">{event.t}</span><p className="font-medium">{event.n}</p></div>)}{conflicts && <div className="absolute right-8 top-[350px] z-10 flex items-center gap-2 rounded-lg bg-destructive px-3 py-2 text-xs text-destructive-foreground shadow"><AlertTriangle className="h-4 w-4"/>15 min overlap</div>}</div></CardContent></Card></div></section>
      </div>
    </div>
  );
}