import React from "react";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ScrollArea } from "../components/ui/scroll-area";
import { Textarea } from "../components/ui/textarea";

import { Bot, Check, Paperclip, Plus, Send, Sparkles, User, X } from "lucide-react";
import { useState } from "react";

export default function AiAssistant() {
    const [prompt, setPrompt] = useState("");
    const [messages, setMessages] = useState([{ role: "assistant", text: "I’m ready to help you organize your day. Choose a starter or ask anything." }]);
    const ask = (text: string) => { if (!text.trim()) return; setMessages((current) => [...current, { role: "user", text }, { role: "assistant", text: "I found a clear path through your connected tasks and calendar. Here is a suggested plan you can preview before applying." }]); setPrompt(""); };
  return (
   <div className="w-full min-w-0 overflow-x-hidden">
      <div className="mx-auto max-w-5xl w-full min-w-0">
          <section><div className="mb-5 flex flex-wrap items-center justify-between gap-3"><div><div className="flex items-center gap-2"><h1 className="text-3xl font-semibold">AI Assistant</h1><Badge variant="secondary">All domains</Badge></div><p className="text-muted-foreground">Uses connected context with preview controls.</p></div><Button variant="outline" onClick={() => setMessages([])}><Plus className="h-4 w-4"/>New chat</Button></div><Card><CardContent className="p-0"><ScrollArea className="h-[560px] p-5"><div className="space-y-5">{messages.length===0 && <div className="mx-auto max-w-xl py-16 text-center"><div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary"><Sparkles className="h-7 w-7"/></div><h2 className="mt-4 text-xl font-semibold">What can I help organize?</h2><div className="mt-6 grid gap-2 sm:grid-cols-3">{["Plan my day","Turn urgent emails into tasks","Find scheduling conflicts"].map((starter) => <Button key={starter} variant="outline" className="h-auto py-3 text-wrap" onClick={() => ask(starter)}>{starter}</Button>)}</div></div>}{messages.map((message,index) => <div key={index} className={`flex gap-3 ${message.role==="user" ? "justify-end" : ""}`}>{message.role!=="user" && <Avatar><AvatarFallback><Bot className="h-4 w-4"/></AvatarFallback></Avatar>}<div className={`max-w-2xl rounded-xl p-4 text-sm leading-6 ${message.role==="user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}`}>{message.text}{message.role==="assistant" && <div className="mt-4 rounded-lg border bg-card p-3 text-foreground"><p className="font-medium">Action preview</p><p className="text-muted-foreground">Create 2 focus blocks and move 1 flexible task.</p><div className="mt-3 flex gap-2"><Button size="sm"><Check className="h-4 w-4"/>Approve</Button><Button size="sm" variant="outline"><X className="h-4 w-4"/>Reject</Button></div></div>}</div>{message.role==="user" && <Avatar><AvatarFallback><User className="h-4 w-4"/></AvatarFallback></Avatar>}</div>)}</div></ScrollArea><div className="border-t p-3"><div className="flex gap-2"><Button variant="ghost" size="icon"><Paperclip className="h-4 w-4"/></Button><Textarea value={prompt} onChange={(event) => setPrompt(event.target.value)} placeholder="Ask OmniPulse to organize, draft, or schedule" className="min-h-11"/><Button size="icon" onClick={() => ask(prompt)}><Send className="h-4 w-4"/></Button></div></div></CardContent></Card></section>
      </div>
    </div>
  );
}