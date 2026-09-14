import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Separator } from "../components/ui/separator";

import { Sparkles } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [consent, setConsent] = useState(false);
  return (
   <div className="w-full min-w-0 bg-[radial-gradient(circle_at_top,_hsl(var(--secondary)),_hsl(var(--background))_55%)] overflow-x-hidden">
      <div className="w-full min-w-0">
          <section className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-md items-center"><Card className="w-full shadow-lg"><CardHeader className="text-center"><div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground"><Sparkles className="h-6 w-6"/></div><CardTitle className="mt-3 text-2xl">Create your workspace</CardTitle><p className="text-sm text-muted-foreground">Bring every part of your day into rhythm.</p></CardHeader><CardContent><div className="grid grid-cols-3 gap-2">{["Google","Microsoft","Apple"].map((provider) => <Button key={provider} variant="outline" size="sm">{provider}</Button>)}</div><div className="my-5 flex items-center gap-3"><Separator className="flex-1"/><span className="text-xs text-muted-foreground">or use email</span><Separator className="flex-1"/></div><form className="space-y-4" onSubmit={(event) => {event.preventDefault();if(consent) navigate("/")}}><div className="grid gap-2"><Label>Name</Label><Input value={name} onChange={(event) => setName(event.target.value)} required/></div><div className="grid gap-2"><Label>Email</Label><Input type="email" required/></div><div className="grid gap-2"><Label>Password</Label><Input type="password" required/></div><label className="flex items-start gap-2 text-sm text-muted-foreground"><Checkbox checked={consent} onCheckedChange={(checked) => setConsent(Boolean(checked))}/><span>I agree to the terms and understand how connected context is used.</span></label><Button type="submit" className="w-full" disabled={!consent}>Create account</Button></form></CardContent><CardFooter className="justify-center text-sm text-muted-foreground">Already have an account? <Link className="ml-1 font-medium text-primary" to="/login">Log in</Link></CardFooter></Card></section>
      </div>
    </div>
  );
}