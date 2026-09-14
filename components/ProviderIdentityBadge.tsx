import { Badge } from "./ui/badge";


    
    export default function ProviderIdentityBadge({ provider = "Google", account }) {
    return (
        <Badge variant="secondary" className="gap-2 font-normal">
<span className={`h-2 w-2 rounded-full ${provider === "Google" ? "bg-blue-500" : provider === "Microsoft" ? "bg-orange-500" : "bg-primary"}`} />
{provider}{account ? ` · ${account}` : ""}
</Badge>
    );
    }