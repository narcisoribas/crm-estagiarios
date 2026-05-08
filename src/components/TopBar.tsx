// =============================================
// TopBar Component
// This component displays the top navigation bar
// with the page title, search input, and icons.
// =============================================

import { Search, Bell, PanelLeft } from "lucide-react";

// Define the props type
interface TopBarProps {
  title: string;
}

function TopBar(props: TopBarProps) {
  return (
    <div className="topbar">
      {/* Page title */}
      <div className="topbar-title">
        <span className="title-icon"><PanelLeft size={20} /></span>
        <span>{props.title}</span>
      </div>

      {/* Right side actions */}
      <div className="topbar-actions">
        {/* Search input */}
        <div className="search-container">
          <Search size={16} className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
          />
        </div>

        {/* Notification bell */}
        <button className="topbar-icon-btn">
          <Bell size={20} />
          <span className="badge"></span>
        </button>

        {/* User avatar */}
        <div className="topbar-avatar">JD</div>
      </div>
    </div>
  );
}

export default TopBar;
