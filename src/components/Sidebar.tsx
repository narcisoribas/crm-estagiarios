// =============================================
// Sidebar Component
// This component displays the left navigation
// menu with links and a user profile section.
// =============================================

import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  CheckSquare, 
  UserCircle, 
  Settings, 
  LogOut,
  Zap
} from "lucide-react";

// Define the props type


function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Logo section */}
      <div className="sidebar-logo">
        <div className="logo-icon">
          <Zap size={20} fill="white" />
        </div>
        <span>Mini CRM</span>
      </div>

      {/* Navigation links */}
      <ul className="sidebar-nav">
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <span className="nav-icon"><LayoutDashboard size={18} /></span>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clients"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <span className="nav-icon"><Users size={18} /></span>
            Clientes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tasks"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <span className="nav-icon"><CheckSquare size={18} /></span>
            Tarefas
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <span className="nav-icon"><UserCircle size={18} /></span>
            Utilizadores
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <span className="nav-icon"><Settings size={18} /></span>
            Definições
          </NavLink>
        </li>
      </ul>

      {/* Profile section */}
      <div className="sidebar-profile">
        <div className="profile-info">
          <div className="profile-name">John Doe</div>
          <div className="profile-role">Administrator</div>
        </div>
        <NavLink to="/login" className="logout-btn">
          <LogOut size={18} />
        </NavLink>
      </div>
    </aside>
  );
}

export default Sidebar;
