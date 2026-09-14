import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "../components/ui/toggle-group";
import AiPromptBar from "./components/AiPromptBar";

import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { useState } from "react";

export default function Calendar() {
    const [view, setView] = useState("week");
    const events = [{day:1,title:"Team stand-up",time:"9:00",top:55,height:65,domain:"work"},{day:1,title:"Data systems",time:"3:15",top:355,height:90,domain:"school"},{day:2,title:"Focus block",time:"10:00",top:110,height:125,domain:"work"},{day:3,title:"Dentist",time:"1:30",top:290,height:70,domain:"life"},{day:4,title:"Launch review",time:"11:00",top:170,height:85,domain:"work"}];
  return (
   <div className="w-full min-w-0 overflow-x-hidden">
      <div className="mx-auto max-w-[1500px] w-full min-w-0">
          <section><div className="mb-5 flex flex-wrap items-center justify-between gap-3"><div><h1 className="text-3xl font-semibold">Calendar</h1><p className="text-muted-foreground">May 13–19, 2025</p></div><div className="flex items-center gap-2"><Button variant="outline" size="icon"><ChevronLeft className="h-4 w-4"/></Button><Button variant="outline">Today</Button><Button variant="outline" size="icon"><ChevronRight className="h-4 w-4"/></Button><ToggleGroup type="single" value={view} onValueChange={(next) => next && setView(next)}><ToggleGroupItem value="day">Day</ToggleGroupItem><ToggleGroupItem value="week">Week</ToggleGroupItem><ToggleGroupItem value="month">Month</ToggleGroupItem></ToggleGroup><Button><Plus className="h-4 w-4"/>Event</Button></div></div><Card className="overflow-hidden"><CardContent className="overflow-x-auto p-0"><div className="min-w-[900px]"><div className="grid grid-cols-[80px_repeat(5,_1fr)] border-b bg-muted/50 text-center text-sm font-medium"><div className="p-3"/>{["Mon 13","Tue 14","Wed 15","Thu 16","Fri 17"].map((day) => <div key={day} className="border-l p-3">{day}</div>)}</div><div className="relative grid h-[620px] grid-cols-[80px_repeat(5,_1fr)] bg-[linear-gradient(to_bottom,_transparent_59px,_hsl(var(--border))_60px)] bg-[length:100%_60px]">{["8 AM","10 AM","12 PM","2 PM","4 PM","6 PM"].map((time,index) => <span key={time} className="absolute left-3 text-xs text-muted-foreground" style={{top:index*100+15}}>{time}</span>)}{[0,1,2,3,4].map((day) => <div key={day} className="relative border-l">{events.filter((event) => event.day === day).map((event) => <button key={event.title} className={`absolute left-2 right-2 rounded-lg border p-2 text-left text-xs shadow-sm ${event.domain === "work" ? "border-primary bg-primary/15 text-primary" : event.domain === "school" ? "border-amber-500 bg-amber-500/15 text-amber-800" : "border-rose-400 bg-rose-400/15 text-rose-700"}`} style={{top:event.top,height:event.height}}><strong className="block">{event.title}</strong><span>{event.time}</span></button>)}</div>)}</div></div></CardContent></Card><div className="mt-3 flex flex-wrap gap-2"><Badge variant="outline">Work</Badge><Badge variant="outline">School</Badge><Badge variant="outline">Life</Badge></div></section>
  <section className="sticky bottom-4"><AiPromptBar placeholder="Schedule my priorities around existing commitments" onSubmit={() => undefined}/></section>
      </div>
    </div>
  );
}