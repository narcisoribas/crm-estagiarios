// =============================================
// StatCard Component
// This component displays a single statistic
// card with a title, number, subtitle, and icon.
// =============================================

import type { ReactNode } from "react";

// Define the props type
interface StatCardProps {
  title: string;
  value: number;
  subtitle: string;
  subtitleColor: string;
  icon: ReactNode;
  iconColor: string;
}

function StatCard(props: StatCardProps) {
  const { title, value, subtitle, subtitleColor, icon, iconColor } = props;

  return (
    <div className="stat-card">
      {/* Left side: text info */}
      <div className="stat-info">
        <h3>{title}</h3>
        <div className="stat-number">{value}</div>
        <div className={`stat-sub ${subtitleColor}`}>{subtitle}</div>
      </div>

      {/* Right side: icon */}
      <div className={`stat-icon ${iconColor}`}>
        {icon}
      </div>
    </div>
  );
}

export default StatCard;
