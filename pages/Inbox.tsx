import React from "react";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { ScrollArea } from "../components/ui/scroll-area";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "../components/ui/sheet";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Textarea } from "../components/ui/textarea";
import ProviderIdentityBadge from "./components/ProviderIdentityBadge";

import { Archive, Bot, Mail, PenLine, Search, Send, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";

export default function Inbox() {
    const emails = [{sender:"Maya Chen",subject:"Launch brief · final review",preview:"Could you take one last look at the launch brief?",time:"9:42",provider:"Google",action:true,priority:true},{sender:"Professor Klein",subject:"Reading response feedback",preview:"Your response made a thoughtful connection…",time:"8:15",provider:"Microsoft",action:false,priority:true},{sender:"Jordan Lee",subject:"Dinner this weekend?",preview:"Are you free Saturday around seven?",time:"Yesterday",provider:"Google",action:true,priority:false},{sender:"Product Weekly",subject:"Your Tuesday digest",preview:"Seven product signals worth your attention.",time:"Yesterday",provider:"Microsoft",action:false,priority:false}];
    const [query, setQuery] = useState("");
    const [tab, setTab] = useState("priority");
    const [selected, setSelected] = useState<(typeof emails)[number] | null>(null);
    const [open, setOpen] = useState(false);
    const [draft, setDraft] = useState("");
    const filtered = useMemo(() => emails.filter((email) => email.subject.toLowerCase().includes(query.toLowerCase()) && (tab === "all" || (tab === "priority" ? email.priority : email.action))), [emails, query, tab]);
  return (
   <div className="w-full min-w-0 overflow-x-hidden">
      <div className="mx-auto max-w-6xl w-full min-w-0">
          <section><div className="mb-5 flex items-center justify-between"><div><h1 className="text-3xl font-semibold">Smart Inbox</h1><p className="text-muted-foreground">Priority messages across connected inboxes.</p></div><Button><PenLine className="h-4 w-4"/>Compose</Button></div><Card><CardContent className="p-0"><div className="flex flex-col gap-3 border-b p-4 md:flex-row"><div className="relative flex-1"><Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground"/><Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search connected inboxes" className="pl-9"/></div><Tabs value={tab} onValueChange={setTab}><TabsList><TabsTrigger value="priority">Priority</TabsTrigger><TabsTrigger value="all">All</TabsTrigger><TabsTrigger value="action">Needs action</TabsTrigger></TabsList></Tabs></div><ScrollArea className="h-[620px]"><div className="divide-y">{filtered.map((email) => <button key={email.subject} onClick={() => {setSelected(email);setOpen(true)}} className="flex w-full gap-3 p-4 text-left transition-colors hover:bg-muted/60"><Avatar><AvatarFallback>{email.sender.slice(0,2).toUpperCase()}</AvatarFallback></Avatar><div className="min-w-0 flex-1"><div className="flex justify-between gap-3"><p className="font-medium">{email.sender}</p><span className="text-xs text-muted-foreground">{email.time}</span></div><p className="truncate text-sm font-medium">{email.subject}</p><p className="truncate text-sm text-muted-foreground">{email.preview}</p><div className="mt-2 flex gap-2"><ProviderIdentityBadge provider={email.provider}/>{email.action && <Badge className="bg-amber-100 text-amber-800">Needs action</Badge>}</div></div></button>)}</div></ScrollArea></CardContent></Card><Sheet open={open} onOpenChange={setOpen}><SheetContent className="w-full sm:max-w-2xl"><SheetHeader><SheetTitle>{selected?.subject}</SheetTitle><SheetDescription>From {selected?.sender}</SheetDescription></SheetHeader><div className="mt-6 space-y-5"><div className="rounded-xl bg-muted p-5 text-sm leading-7">{selected?.preview} I’d love your feedback before tomorrow afternoon. The latest materials are attached for context.</div><div><div className="mb-2 flex items-center gap-2 font-medium"><Bot className="h-4 w-4 text-primary"/>AI reply draft</div><Textarea value={draft} onChange={(event) => setDraft(event.target.value)} className="min-h-36"/></div><div className="flex flex-wrap gap-2"><Button variant="outline" onClick={() => setDraft("Thanks for sending this over. I’ll review the materials and share feedback by tomorrow afternoon.")}><Sparkles className="h-4 w-4"/>Draft reply</Button><Button variant="outline"><Archive className="h-4 w-4"/>Extract task</Button><Button><Send className="h-4 w-4"/>Save draft</Button></div></div></SheetContent></Sheet></section>
      </div>
    </div>
  );
}