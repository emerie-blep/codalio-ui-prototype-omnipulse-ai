import { Badge } from "./ui/badge";
import { Checkbox } from "./ui/checkbox";


import { Clock } from "lucide-react";

        export default function DomainTaskItem({ title, domain = "work", time, completed = false, onToggle }) {
        return (
            <div className={`flex items-start gap-3 rounded-lg border bg-card p-3 transition-colors ${completed ? "opacity-60" : "hover:bg-muted/50"}`}>
    <Checkbox checked={completed} onCheckedChange={(checked) => onToggle?.(Boolean(checked))} aria-label={`Complete ${title}`} className="mt-1" />
    <div className="min-w-0 flex-1"><p className={`font-medium text-foreground ${completed ? "line-through" : ""}`}>{title}</p><div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-muted-foreground"><Badge variant="secondary" className={domain === "work" ? "text-primary" : domain === "school" ? "text-amber-700" : "text-rose-600"}>{domain}</Badge>{time && <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{time}</span>}</div></div>
    </div>
        );
        }