import { Badge } from "./ui/badge";


import { CheckCircle2, RefreshCw } from "lucide-react";

        export default function SyncStatusIndicator({ syncing = false, label = "All synced" }) {
        return (
            <Badge variant="outline" className="gap-1.5 bg-card text-muted-foreground">
    {syncing ? <RefreshCw className="h-3.5 w-3.5 animate-spin text-primary" /> : <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />}
    {syncing ? "Syncing" : label}
    </Badge>
        );
        }