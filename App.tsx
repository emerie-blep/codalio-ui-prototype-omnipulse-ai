import "./styles.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Landing from "./pages/Landing";
import DashboardSummary from "./pages/DashboardSummary";
import Tasks from "./pages/Tasks";
import TasksWork from "./pages/TasksWork";
import TasksSchool from "./pages/TasksSchool";
import TasksLife from "./pages/TasksLife";
import Inbox from "./pages/Inbox";
import CalendarPage from "./pages/Calendar";
import InboxDrafts from "./pages/InboxDrafts";
import CalendarOverlay from "./pages/CalendarOverlay";
import Integrations from "./pages/Integrations";
import AiAssistant from "./pages/AiAssistant";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminHealth from "./pages/AdminHealth";
import Admin from "./pages/Admin";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>

      <Routes>
        <Route element={<Layout />}>
                <Route path="/" element={<Landing />} />
      <Route path="/dashboard/summary" element={<DashboardSummary />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/tasks/work" element={<TasksWork />} />
      <Route path="/tasks/school" element={<TasksSchool />} />
      <Route path="/tasks/life" element={<TasksLife />} />
      <Route path="/inbox" element={<Inbox />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/inbox/drafts" element={<InboxDrafts />} />
      <Route path="/calendar/overlay" element={<CalendarOverlay />} />
      <Route path="/integrations" element={<Integrations />} />
      <Route path="/ai-assistant" element={<AiAssistant />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/admin/health" element={<AdminHealth />} />
      <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;