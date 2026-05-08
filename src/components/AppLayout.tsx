import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

function AppLayout() {
  const location = useLocation();

  // Mapeamento de títulos baseado na rota
  const titles: Record<string, string> = {
    "/dashboard": "Dashboard",
    "/clients": "Clientes",
    "/tasks": "Tarefas",
    "/users": "Utilizadores",
    "/settings": "Definições",
  };

  const currentTitle = titles[location.pathname] || "Mini CRM";

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <TopBar title={currentTitle} />
        <main className="page-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
