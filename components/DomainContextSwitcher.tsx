import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";


import { Briefcase, GraduationCap, Heart } from "lucide-react";

        export default function DomainContextSwitcher({ value = "all", onChange }) {
        return (
            <ToggleGroup type="single" value={value} onValueChange={(next) => next && onChange?.(next)} className="justify-start rounded-lg bg-muted p-1">
    <ToggleGroupItem value="all" aria-label="All domains">All</ToggleGroupItem>
    <ToggleGroupItem value="work" aria-label="Work"><Briefcase className="h-4 w-4" /> Work</ToggleGroupItem>
    <ToggleGroupItem value="school" aria-label="School"><GraduationCap className="h-4 w-4" /> School</ToggleGroupItem>
    <ToggleGroupItem value="life" aria-label="Life"><Heart className="h-4 w-4" /> Life</ToggleGroupItem>
    </ToggleGroup>
        );
        }