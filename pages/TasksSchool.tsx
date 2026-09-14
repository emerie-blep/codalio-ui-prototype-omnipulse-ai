import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import AiPromptBar from "./components/AiPromptBar";
import DomainTaskItem from "./components/DomainTaskItem";

import { BookOpenCheck, GraduationCap, Plus } from "lucide-react";
import { useState } from "react";

export default function TasksSchool() {
    const [tasks, setTasks] = useState(["Submit reading response","Outline systems essay","Review lecture notes","Complete lab worksheet"]);
    const [done, setDone] = useState<number[]>([3]);
  return (
   <div className="w-full min-w-0 overflow-x-hidden">
      <div className="mx-auto max-w-5xl w-full min-w-0">
          <section><div className="mb-7 flex flex-wrap items-center justify-between gap-4 border-l-4 border-l-amber-500 pl-4"><div><div className="flex items-center gap-2"><GraduationCap className="h-5 w-5 text-amber-600"/><Badge className="bg-amber-100 text-amber-800">School</Badge></div><h1 className="mt-2 text-3xl font-semibold">School tasks</h1><p className="text-muted-foreground">Stay ahead across courses and assignments</p><Progress value={42} className="mt-3 w-64" /></div><Button onClick={() => setTasks((current) => [...current,"New course task"])}><Plus className="h-4 w-4"/>Add assignment</Button></div><div className="space-y-3">{tasks.map((task,index) => <DomainTaskItem key={task} title={task} domain="school" time={index === 0 ? "Today · 17:00" : "Friday"} completed={done.includes(index)} onToggle={() => setDone((current) => current.includes(index) ? current.filter((i) => i !== index) : [...current,index])}/>)}</div></section>
  <section><h2 className="mb-3 flex items-center gap-2 font-semibold"><BookOpenCheck className="h-4 w-4 text-amber-600"/>Study copilot</h2><AiPromptBar placeholder="Build a study plan or break down an assignment" onSubmit={() => undefined}/></section>
      </div>
    </div>
  );
}