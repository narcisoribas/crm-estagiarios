import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

/**
 * AppLayout Component
 * 
 * Este componente define a estrutura base (shell) da aplicação.
 * Ele inclui a Sidebar lateral e a TopBar superior, utilizando o <Outlet />
 * do react-router-dom para renderizar o conteúdo dinâmico das rotas.
 */
function AppLayout() {
  const location = useLocation();

  /**
   * Mapeamento de títulos baseado na rota atual.
   * Usado para atualizar o título na TopBar automaticamente.
   */
  const titles: Record<string, string> = {
    "/dashboard": "Dashboard",
    "/clients": "Clientes",
    "/tasks": "Tarefas",
    "/users": "Utilizadores",
    "/settings": "Definições",
  };

  // Obtém o título correspondente à rota ou usa um padrão
  const currentTitle = titles[location.pathname] || "Mini CRM";

  return (
    <div className="app-container">
      {/* Menu de navegação lateral fixa */}
      <Sidebar />
      
      <div className="main-content">
        {/* Barra superior com título dinâmico e ações */}
        <TopBar title={currentTitle} />
        
        {/* Área onde as páginas das rotas serão injetadas */}
        <main className="page-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
