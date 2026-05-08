import { useState } from "react";
import { Users, CheckSquare, Clock, CheckCircle } from "lucide-react";
import StatCard from "../components/StatCard";
import ClientsTable from "../components/ClientsTable";
import TaskDistribution from "../components/TaskDistribution";
import TasksTable from "../components/TasksTable";

interface DashboardPageProps {
  clients: any[];
  tasks: any[];
}

function DashboardPage({ clients, tasks }: DashboardPageProps) {
  return (
    <div className="dashboard">
      {/* Row of stat cards */}
      <div className="stats-row">
        <StatCard
          title="Total Clients"
          value={clients.length}
          subtitle="+2 this month"
          subtitleColor="green"
          icon={<Users size={20} />}
          iconColor="purple"
        />
        <StatCard
          title="Total Tasks"
          value={tasks.length}
          subtitle="+5 this week"
          subtitleColor="blue"
          icon={<CheckSquare size={20} />}
          iconColor="green"
        />
        <StatCard
          title="In Progress"
          value={tasks.filter(t => t.status === "in-progress").length}
          subtitle=""
          subtitleColor=""
          icon={<Clock size={20} />}
          iconColor="blue"
        />
        <StatCard
          title="Completed"
          value={tasks.filter(t => t.status === "completed").length}
          subtitle="75% rate"
          subtitleColor="orange"
          icon={<CheckCircle size={20} />}
          iconColor="orange"
        />
      </div>

      {/* Middle row: Clients table + Donut chart */}
      <div className="middle-row">
        <ClientsTable clients={clients.slice(0, 5)} />
        <TaskDistribution />
      </div>

      {/* Recent tasks table */}
      <TasksTable tasks={tasks.slice(0, 5)} />
    </div>
  );
}

export default DashboardPage;
