import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Textarea } from "../components/ui/textarea";
import DomainContextSwitcher from "./components/DomainContextSwitcher";
import DomainTaskItem from "./components/DomainTaskItem";

import { LayoutList, Plus, Search, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";

export default function Tasks() {
    const [query, setQuery] = useState("");
    const [domain, setDomain] = useState("all");
    const [priority, setPriority] = useState("all");
    const [items, setItems] = useState([{title:"Send launch brief",domain:"work",time:"Today · 11:00",done:false},{title:"Submit reading response",domain:"school",time:"Today · 17:00",done:false},{title:"Book dentist appointment",domain:"life",time:"This week",done:true},{title:"Review analytics dashboard",domain:"work",time:"Tomorrow",done:false}]);
    const filtered = useMemo(() => items.filter((item) => (domain === "all" || item.domain === domain) && item.title.toLowerCase().includes(query.toLowerCase())), [items, domain, query]);
    const [prompt, setPrompt] = useState("");
    const [preview, setPreview] = useState("");
  return (
   <div className="w-full min-w-0 overflow-x-hidden">
      <div className="mx-auto max-w-5xl w-full min-w-0">
          <section><div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between"><div><h1 className="text-3xl font-semibold">Tasks</h1><p className="text-muted-foreground">Everything you need to move forward, in one place.</p></div><Button onClick={() => setItems((current) => [...current,{title:"New captured task",domain:"work",time:"Today",done:false}])}><Plus className="h-4 w-4" />Create task</Button></div><div className="mb-6 flex flex-col gap-3 rounded-xl border bg-card p-3 lg:flex-row"><div className="relative flex-1"><Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" /><Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search tasks" className="pl-9" /></div><DomainContextSwitcher value={domain} onChange={setDomain} /><Select value={priority} onValueChange={setPriority}><SelectTrigger className="w-full lg:w-40"><SelectValue placeholder="Priority" /></SelectTrigger><SelectContent><SelectItem value="all">Any priority</SelectItem><SelectItem value="high">High</SelectItem><SelectItem value="normal">Normal</SelectItem></SelectContent></Select><Button variant="outline"><LayoutList className="h-4 w-4" />List</Button></div><div className="space-y-3">{filtered.map((task,index) => <DomainTaskItem key={`${task.title}-${index}`} title={task.title} domain={task.domain} time={task.time} completed={task.done} onToggle={(done) => setItems((current) => current.map((item,itemIndex) => itemIndex === index ? {...item,done} : item))} />)}{filtered.length === 0 && <div className="rounded-xl border border-dashed p-12 text-center text-muted-foreground">No tasks match these filters.</div>}</div></section>
  <section className="sticky bottom-4"><Card className="border-primary/20 shadow-lg"><CardContent className="p-4"><div className="flex flex-col gap-3 md:flex-row"><Sparkles className="mt-2 h-5 w-5 text-primary" /><Textarea value={prompt} onChange={(event) => setPrompt(event.target.value)} placeholder="Ask AI to prioritize, break down, or schedule these tasks" className="min-h-10 flex-1" /><Button onClick={() => setPreview(prompt ? `Preview: ${prompt}` : "Preview: Prioritize today’s highest impact tasks")}>Preview</Button></div><div className="mt-3 flex flex-wrap gap-2">{["Prioritize","Break into subtasks","Smart schedule"].map((action) => <Badge key={action} variant="secondary" className="cursor-pointer" onClick={() => setPrompt(action)}>{action}</Badge>)}</div>{preview && <div className="mt-3 flex items-center justify-between rounded-lg bg-accent p-3 text-sm text-accent-foreground"><span>{preview}</span><Button size="sm" onClick={() => setPreview("Applied to your task list")}>Apply</Button></div>}</CardContent></Card></section>
      </div>
    </div>
  );
}