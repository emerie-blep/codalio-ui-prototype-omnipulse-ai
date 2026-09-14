
import { useState } from "react";
import { ArrowUp, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

        export default function AiPromptBar({ placeholder = "Ask OmniPulse to plan, prioritize, or draft…", onSubmit }) {
  const [prompt, setPrompt] = useState("");
        return (
            <form className="flex items-center gap-2 rounded-xl border bg-card p-2 shadow-sm" onSubmit={(event) => { event.preventDefault(); if (prompt.trim()) { onSubmit?.(prompt); setPrompt(""); } }}>
    <Sparkles className="ml-2 h-5 w-5 text-primary" />
    <Input value={prompt} onChange={(event) => setPrompt(event.target.value)} placeholder={placeholder} className="border-0 bg-transparent shadow-none focus-visible:ring-0" />
    <Button type="submit" size="icon" aria-label="Send prompt"><ArrowUp className="h-4 w-4" /></Button>
    </form>
        );
        }