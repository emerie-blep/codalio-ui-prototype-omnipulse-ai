import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "./ui/sidebar";
import { Bot, CalendarDays, CheckSquare2, HeartPulse, Inbox, LayoutDashboard, Plug, Settings, ShieldCheck, Sparkles } from "lucide-react";

import SyncStatusIndicator from "./SyncStatusIndicator";

const navigation = [
  { label: "Today", to: "/", icon: LayoutDashboard },
  { label: "Tasks", to: "/tasks", icon: CheckSquare2 },
  { label: "Inbox", to: "/inbox", icon: Inbox },
  { label: "Calendar", to: "/calendar", icon: CalendarDays },
  { label: "Integrations", to: "/integrations", icon: Plug },
  { label: "AI Assistant", to: "/ai-assistant", icon: Bot },
  { label: "Settings", to: "/settings", icon: Settings },
  { label: "Admin", to: "/admin", icon: ShieldCheck },
];

export default function Layout() {
  const location = useLocation();
  if (location.pathname === "/login" || location.pathname === "/signup") return <Outlet />;

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon" className="border-r border-sidebar-border">
        <SidebarHeader className="p-4">
          <NavLink to="/" className="flex items-center gap-3 overflow-hidden">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground"><Sparkles className="h-5 w-5" /></span>
            <div className="min-w-0"><p className="truncate font-semibold text-sidebar-foreground">OmniPulse AI</p><p className="truncate text-xs text-muted-foreground">One day, in rhythm</p></div>
          </NavLink>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Workspace</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>{navigation.map(({ label, to, icon: Icon }) => <SidebarMenuItem key={to}><SidebarMenuButton asChild isActive={location.pathname === to || (to !== "/" && location.pathname.startsWith(`${to}/`))} tooltip={label}><NavLink to={to}><Icon className="h-4 w-4" /><span>{label}</span></NavLink></SidebarMenuButton></SidebarMenuItem>)}</SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="p-3">
          <div className="flex items-center gap-3 rounded-lg border border-sidebar-border bg-sidebar-accent/50 p-2">
            <Avatar className="h-8 w-8"><AvatarFallback>AX</AvatarFallback></Avatar>
            <div className="min-w-0 flex-1 overflow-hidden"><p className="truncate text-sm font-medium text-sidebar-foreground">Alex Morgan</p><p className="truncate text-xs text-muted-foreground">Personal workspace</p></div>
          </div>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset className="min-w-0 bg-background">
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background/90 px-4 backdrop-blur md:px-6">
          <div className="flex items-center gap-3"><SidebarTrigger /><span className="hidden text-sm font-medium text-muted-foreground sm:inline">OmniPulse AI</span></div>
          <div className="flex items-center gap-2"><SyncStatusIndicator /><Button variant="ghost" size="icon" aria-label="Wellbeing"><HeartPulse className="h-5 w-5 text-teal-600" /></Button></div>
        </header>
        <main className="w-full min-w-0 flex-1"><Outlet /></main>
      </SidebarInset>
    </SidebarProvider>
  );
}