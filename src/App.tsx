// =============================================
// App Component - O Componente Principal
// Este é o componente raiz do Mini CRM.
// Ele gerencia o estado global dos dados e o roteamento.
// =============================================

import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Importação de componentes estruturais e de layout
import AppLayout from "./components/AppLayout";
import DashboardPage from "./pages/DashboardPage";
import ClientsPage from "./pages/ClientsPage";
import TasksPage from "./pages/TasksPage";
import UsersPage from "./pages/UsersPage";
import type { User } from "./pages/UsersPage";
import SettingsPage from "./pages/SettingsPage";
import LoginPage from "./pages/LoginPage";

// Importação dos estilos globais da aplicação
import "./styles/app.css";

function App() {
  /**
   * ---- ESTADO GLOBAL (Simulando uma Base de Dados) ----
   * Em uma aplicação real, estes dados viriam de uma API (backend).
   */

  // Estado dos Clientes
  

  // Estado das Tarefas
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

  // Estado dos Utilizadores (Equipa)
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "John Doe", email: "john@minicrm.io", role: "Admin" },
    { id: 2, name: "Maria Silva", email: "maria@minicrm.io", role: "Editor" },
    { id: 3, name: "Liam O'Connor", email: "liam@minicrm.io", role: "Viewer" },
    { id: 4, name: "Priya Nair", email: "priya@minicrm.io", role: "Editor" },
    { id: 5, name: "Carlos Mendes", email: "carlos@minicrm.io", role: "Viewer" },
    { id: 6, name: "Anna Müller", email: "anna@minicrm.io", role: "Admin" },
    { id: 7, name: "Hiroshi Sato", email: "hiroshi@minicrm.io", role: "Viewer" },
  ]);

  /**
   * ---- RENDERIZAÇÃO E ROTEAMENTO ----
   */
  return (
    <Routes>
      {/* Rota pública: Página de Login */}
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Rotas protegidas: Utilizam o AppLayout para manter Sidebar/TopBar consistentes */}
      <Route path="/" element={<AppLayout />}>
        {/* Redirecionamento da raiz para o Dashboard */}
        <Route element={<Navigate to="/dashboard" replace />} />
        
        {/* Página Inicial / Painel de Controlo */}
        <Route 
          path="dashboard" 
          element={<DashboardPage tasks={tasks} />} 
        />
        
        {/* Gestão de Clientes */}
        <Route
          path="clients"
          element={
            <ClientsPage/>
          }
        />
        
        {/* Gestão de Tarefas */}
        <Route
          path="tasks"
          element={
            <TasksPage
              tasks={tasks}
           
              onAdd={(t) => setTasks((prev) => [...prev, { ...t, id: Date.now() }])}
            />
          }
        />
        
        {/* Gestão de Utilizadores (Equipa) */}
        <Route
          path="users"
          element={
            <UsersPage
              users={users}
              onAdd={(u) => setUsers((prev) => [...prev, { ...u, id: Date.now() }])}
            />
          }
        />
        
        {/* Definições do Sistema */}
        <Route path="settings" element={<SettingsPage />} />
      </Route>

      {/* Rota de fallback: Redireciona qualquer URL desconhecida para o Dashboard */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}

export default App;
