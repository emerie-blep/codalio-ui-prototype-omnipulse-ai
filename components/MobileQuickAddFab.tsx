import { Button } from "./ui/button";


import { Plus } from "lucide-react";

        export default function MobileQuickAddFab({ onClick }) {
        return (
            <Button onClick={onClick} size="icon" className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full shadow-lg md:hidden" aria-label="Quick add"><Plus className="h-6 w-6" /></Button>
        );
        }