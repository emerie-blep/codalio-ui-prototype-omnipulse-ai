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

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  return (
   <div className="w-full min-w-0 bg-[radial-gradient(circle_at_top,_hsl(var(--secondary)),_hsl(var(--background))_55%)] overflow-x-hidden">
      <div className="w-full min-w-0">
          <section className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-md items-center"><Card className="w-full shadow-lg"><CardHeader className="text-center"><div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground"><Sparkles className="h-6 w-6"/></div><CardTitle className="mt-3 text-2xl">Welcome back</CardTitle><p className="text-sm text-muted-foreground">Log in to your OmniPulse AI workspace</p></CardHeader><CardContent><div className="grid grid-cols-3 gap-2">{["Google","Microsoft","Apple"].map((provider) => <Button key={provider} variant="outline" size="sm">{provider}</Button>)}</div><div className="my-5 flex items-center gap-3"><Separator className="flex-1"/><span className="text-xs text-muted-foreground">or continue with email</span><Separator className="flex-1"/></div><form className="space-y-4" onSubmit={(event) => {event.preventDefault();navigate("/")}}><div className="grid gap-2"><Label>Email</Label><Input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required/></div><div className="grid gap-2"><Label>Password</Label><Input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required/></div><label className="flex items-center gap-2 text-sm"><Checkbox/>Remember me</label><Button type="submit" className="w-full">Log in</Button></form></CardContent><CardFooter className="justify-center text-sm text-muted-foreground">New here? <Link className="ml-1 font-medium text-primary" to="/signup">Create an account</Link></CardFooter></Card></section>
      </div>
    </div>
  );
}