import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import AiPromptBar from "./components/AiPromptBar";
import DomainTaskItem from "./components/DomainTaskItem";

import { Briefcase, Plus, Sparkles } from "lucide-react";
import { useState } from "react";

export default function TasksWork() {
    const [tasks, setTasks] = useState(["Send launch brief","Review Q3 roadmap","Prepare client handoff","Update analytics notes"]);
    const [done, setDone] = useState<number[]>([2]);
  return (
   <div className="w-full min-w-0 overflow-x-hidden">
      <div className="mx-auto max-w-5xl w-full min-w-0">
          <section><div className="mb-7 flex flex-wrap items-center justify-between gap-4 border-l-4 border-l-primary pl-4"><div><div className="flex items-center gap-2"><Briefcase className="h-5 w-5 text-primary"/><Badge>Work</Badge></div><h1 className="mt-2 text-3xl font-semibold">Work tasks</h1><p className="text-muted-foreground">4 of 7 priorities moving forward</p><Progress value={57} className="mt-3 w-64" /></div><Button onClick={() => setTasks((current) => [...current,"Follow up with client"])}><Plus className="h-4 w-4"/>New work task</Button></div><div className="space-y-3">{tasks.map((task,index) => <DomainTaskItem key={task} title={task} domain="work" time={index === 0 ? "Today · 11:00" : "Tomorrow"} completed={done.includes(index)} onToggle={() => setDone((current) => current.includes(index) ? current.filter((i) => i !== index) : [...current,index])}/>)}</div></section>
  <section><h2 className="mb-3 flex items-center gap-2 font-semibold"><Sparkles className="h-4 w-4 text-primary"/>Focus planning</h2><AiPromptBar placeholder="Find focus time or rebalance deadlines" onSubmit={() => undefined}/></section>
      </div>
    </div>
  );
}