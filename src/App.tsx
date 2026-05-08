// =============================================
// App Component - The Main Component
// This is the root component of our Mini CRM.
// It holds all the data and handles routing.
// =============================================

import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Import our components
import AppLayout from "./components/AppLayout";
import DashboardPage from "./pages/DashboardPage";
import ClientsPage from "./pages/ClientsPage";
import TasksPage from "./pages/TasksPage";
import UsersPage from "./pages/UsersPage";
import type { User } from "./pages/UsersPage";
import SettingsPage from "./pages/SettingsPage";
import LoginPage from "./pages/LoginPage";

// Import styles
import "./styles/app.css";

function App() {
  // ---- DATA STATE ----
  const [clients, setClients] = useState([
    { id: 1, name: "Sarah Chen", email: "sarah@acmecorp.com", company: "Acme Corp" },
    { id: 2, name: "Marcus Johnson", email: "marcus@novatech.io", company: "NovaTech" },
    { id: 3, name: "Elena Rodriguez", email: "elena@brightpath.co", company: "BrightPath" },
    { id: 4, name: "David Kim", email: "david@stellarworks.com", company: "Stellar Works" },
    { id: 5, name: "Aisha Patel", email: "aisha@cloudnine.dev", company: "CloudNine" },
    { id: 6, name: "Tomás Almeida", email: "tomas@finlytics.pt", company: "Finlytics" },
    { id: 7, name: "Yuki Tanaka", email: "yuki@kairo.jp", company: "Kairo" },
  ]);

  const [tasks, setTasks] = useState<
    { id: number; task: string; client: string; status: "in-progress" | "pending" | "completed" }[]
  >([
    { id: 1, task: "Website Redesign", client: "Sarah Chen", status: "in-progress" },
    { id: 2, task: "API Integration", client: "Marcus Johnson", status: "pending" },
    { id: 3, task: "Brand Guidelines", client: "Elena Rodriguez", status: "completed" },
    { id: 4, task: "User Research", client: "David Kim", status: "in-progress" },
    { id: 5, task: "Dashboard Analytics", client: "Aisha Patel", status: "pending" },
    { id: 6, task: "SEO Audit", client: "Tomás Almeida", status: "completed" },
    { id: 7, task: "Mobile App MVP", client: "Yuki Tanaka", status: "in-progress" },
  ]);

  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "John Doe", email: "john@minicrm.io", role: "Admin" },
    { id: 2, name: "Maria Silva", email: "maria@minicrm.io", role: "Editor" },
    { id: 3, name: "Liam O'Connor", email: "liam@minicrm.io", role: "Viewer" },
    { id: 4, name: "Priya Nair", email: "priya@minicrm.io", role: "Editor" },
    { id: 5, name: "Carlos Mendes", email: "carlos@minicrm.io", role: "Viewer" },
    { id: 6, name: "Anna Müller", email: "anna@minicrm.io", role: "Admin" },
    { id: 7, name: "Hiroshi Sato", email: "hiroshi@minicrm.io", role: "Viewer" },
  ]);

  // ---- RENDER ----
  return (
    <Routes>
      {/* Rota pública */}
      <Route path="/login" element={<LoginPage />} />

      {/* Rotas protegidas (via layout) */}
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route 
          path="dashboard" 
          element={<DashboardPage clients={clients} tasks={tasks} />} 
        />
        <Route
          path="clients"
          element={
            <ClientsPage
              clients={clients}
              onAdd={(c) => setClients((prev) => [...prev, { ...c, id: Date.now() }])}
            />
          }
        />
        <Route
          path="tasks"
          element={
            <TasksPage
              tasks={tasks}
              clients={clients.map((c) => ({ name: c.name }))}
              onAdd={(t) => setTasks((prev) => [...prev, { ...t, id: Date.now() }])}
            />
          }
        />
        <Route
          path="users"
          element={
            <UsersPage
              users={users}
              onAdd={(u) => setUsers((prev) => [...prev, { ...u, id: Date.now() }])}
            />
          }
        />
        <Route path="settings" element={<SettingsPage />} />
      </Route>

      {/* Catch-all redir para dashboard */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}

export default App;
