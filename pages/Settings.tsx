import React from "react";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Switch } from "../components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

import { Save, ShieldCheck } from "lucide-react";
import { useState } from "react";

export default function Settings() {
    const [name, setName] = useState("Alex Morgan");
    const [saved, setSaved] = useState(false);
  return (
   <div className="w-full min-w-0 overflow-x-hidden">
      <div className="mx-auto max-w-6xl w-full min-w-0">
          <section><div className="mb-5"><h1 className="text-3xl font-semibold">Settings</h1><p className="text-muted-foreground">Shape OmniPulse around how you work and live.</p></div><Tabs defaultValue="profile"><TabsList className="w-full justify-start overflow-x-auto"><TabsTrigger value="profile">Profile</TabsTrigger><TabsTrigger value="domains">Domains</TabsTrigger><TabsTrigger value="privacy">AI & privacy</TabsTrigger><TabsTrigger value="notifications">Notifications</TabsTrigger><TabsTrigger value="shortcuts">Shortcuts</TabsTrigger></TabsList><TabsContent value="profile" className="pt-5"><Card className="max-w-2xl"><CardHeader><CardTitle>Profile preferences</CardTitle></CardHeader><CardContent className="grid gap-5"><div className="grid gap-2"><Label>Display name</Label><Input value={name} onChange={(event) => setName(event.target.value)}/></div><div className="grid gap-2"><Label>Time zone</Label><Select defaultValue="pt"><SelectTrigger><SelectValue/></SelectTrigger><SelectContent><SelectItem value="pt">Pacific Time</SelectItem><SelectItem value="et">Eastern Time</SelectItem><SelectItem value="utc">UTC</SelectItem></SelectContent></Select></div><Button className="w-fit" onClick={() => setSaved(true)}><Save className="h-4 w-4"/>{saved ? "Saved" : "Save changes"}</Button></CardContent></Card></TabsContent><TabsContent value="domains" className="pt-5"><Card className="max-w-2xl"><CardHeader><CardTitle>Domain preferences</CardTitle></CardHeader><CardContent className="space-y-4">{["Work","School","Life"].map((domain) => <div key={domain} className="flex items-center justify-between rounded-lg border p-4"><div><p className="font-medium">{domain}</p><p className="text-sm text-muted-foreground">Visible across tasks and calendar</p></div><Switch defaultChecked/></div>)}</CardContent></Card></TabsContent><TabsContent value="privacy" className="pt-5"><Card className="max-w-2xl"><CardHeader><CardTitle>AI & privacy</CardTitle></CardHeader><CardContent className="space-y-5"><Alert><ShieldCheck className="h-4 w-4"/><AlertTitle>Preview before action</AlertTitle><AlertDescription>OmniPulse will always show changes before applying or sending.</AlertDescription></Alert>{["Email scanning","Auto-categorization","Smart scheduling","Draft generation"].map((control) => <div key={control} className="flex items-center justify-between"><Label>{control}</Label><Switch defaultChecked/></div>)}</CardContent></Card></TabsContent><TabsContent value="notifications" className="pt-5"><Card className="max-w-2xl"><CardContent className="p-6 text-muted-foreground">Notification settings are ready to customize.</CardContent></Card></TabsContent><TabsContent value="shortcuts" className="pt-5"><Card className="max-w-2xl"><CardContent className="p-6 text-muted-foreground">Press ⌘ K anywhere to open quick capture.</CardContent></Card></TabsContent></Tabs></section>
      </div>
    </div>
  );
}