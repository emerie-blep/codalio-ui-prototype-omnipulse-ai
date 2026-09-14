import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Textarea } from "../components/ui/textarea";

import { RotateCcw, Save, Send, Sparkles, Trash2 } from "lucide-react";
import { useState } from "react";

export default function InboxDrafts() {
    const drafts = [{subject:"Re: Launch brief",to:"Maya Chen",time:"10m",body:"Hi Maya,\n\nThanks for sending the latest launch brief. I’ll review it and share final feedback by tomorrow afternoon.\n\nBest,\nAlex"},{subject:"Weekend plans",to:"Jordan Lee",time:"1h",body:"Saturday at seven works perfectly. Looking forward to it!"}];
    const [active, setActive] = useState(0);
    const [body, setBody] = useState(drafts[0].body);
    const [sent, setSent] = useState(false);
  return (
   <div className="w-full min-w-0 overflow-x-hidden">
      <div className="mx-auto max-w-6xl w-full min-w-0">
          <section><div className="mb-5"><h1 className="text-3xl font-semibold">AI-assisted drafts</h1><p className="text-muted-foreground">Review, refine, and send with confidence.</p></div><div className="grid gap-4 lg:grid-cols-[22rem_1fr]"><Card><CardHeader><CardTitle className="text-base">Drafts</CardTitle></CardHeader><CardContent className="space-y-2">{drafts.map((draft,index) => <button key={draft.subject} onClick={() => {setActive(index);setBody(draft.body)}} className={`w-full rounded-lg border p-3 text-left ${active===index ? "bg-accent" : "hover:bg-muted"}`}><div className="flex justify-between"><Badge variant="secondary"><Sparkles className="h-3 w-3"/>AI</Badge><span className="text-xs text-muted-foreground">{draft.time}</span></div><p className="mt-2 font-medium">{draft.subject}</p><p className="truncate text-sm text-muted-foreground">To {draft.to}</p></button>)}</CardContent></Card><Card><CardHeader><CardTitle>{drafts[active].subject}</CardTitle><p className="text-sm text-muted-foreground">To {drafts[active].to} · Google Workspace</p></CardHeader><CardContent><Textarea value={body} onChange={(event) => setBody(event.target.value)} className="min-h-80 leading-7"/><div className="mt-4 flex flex-wrap gap-2"><Button variant="outline"><RotateCcw className="h-4 w-4"/>Regenerate</Button><Button variant="outline"><Save className="h-4 w-4"/>Save to provider</Button><Button onClick={() => setSent(true)}><Send className="h-4 w-4"/>{sent ? "Sent" : "Send"}</Button><Button variant="ghost" size="icon"><Trash2 className="h-4 w-4"/></Button></div></CardContent></Card></div></section>
      </div>
    </div>
  );
}