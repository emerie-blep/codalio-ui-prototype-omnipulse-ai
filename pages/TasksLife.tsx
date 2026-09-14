import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import AiPromptBar from "./components/AiPromptBar";
import DomainTaskItem from "./components/DomainTaskItem";

import { Heart, Plus, Route } from "lucide-react";
import { useState } from "react";

export default function TasksLife() {
    const [tasks, setTasks] = useState(["Book dentist appointment","Pick up groceries","Call Mom","Renew renter insurance"]);
    const [done, setDone] = useState<number[]>([2]);
  return (
   <div className="w-full min-w-0 overflow-x-hidden">
      <div className="mx-auto max-w-5xl w-full min-w-0">
          <section><div className="mb-7 flex flex-wrap items-center justify-between gap-4 border-l-4 border-l-rose-400 pl-4"><div><div className="flex items-center gap-2"><Heart className="h-5 w-5 text-rose-500"/><Badge className="bg-rose-100 text-rose-700">Life</Badge></div><h1 className="mt-2 text-3xl font-semibold">Life tasks</h1><p className="text-muted-foreground">Keep the details of everyday life in rhythm</p><Progress value={66} className="mt-3 w-64" /></div><Button onClick={() => setTasks((current) => [...current,"New personal task"])}><Plus className="h-4 w-4"/>Add task</Button></div><div className="space-y-3">{tasks.map((task,index) => <DomainTaskItem key={task} title={task} domain="life" time={index === 0 ? "This week" : "30 min"} completed={done.includes(index)} onToggle={() => setDone((current) => current.includes(index) ? current.filter((i) => i !== index) : [...current,index])}/>)}</div></section>
  <section><h2 className="mb-3 flex items-center gap-2 font-semibold"><Route className="h-4 w-4 text-rose-500"/>Life planning</h2><AiPromptBar placeholder="Group errands or find open time" onSubmit={() => undefined}/></section>
      </div>
    </div>
  );
}