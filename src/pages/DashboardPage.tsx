import { useContext, useState } from "react";
import { Users, CheckSquare, Clock, CheckCircle } from "lucide-react";
import StatCard from "../components/StatCard";
import ClientsTable from "../components/ClientsTable";
import TaskDistribution from "../components/TaskDistribution";
import TasksTable from "../components/TasksTable";
import { GlobalContext } from "../context/GlobalContext";

/**
 * Props do Componente DashboardPage
 */
interface DashboardPageProps {
  clients?: any[]; // Lista completa de clientes
  tasks: any[];   // Lista completa de tarefas
}

/**
 * DashboardPage Component
 * 
 * Exibe a visão geral do sistema com cartões de estatísticas,
 * distribuição de tarefas e tabelas de dados recentes.
 */
function DashboardPage({ tasks }: DashboardPageProps) {
  const {clients}=useContext(GlobalContext)

  return (
    <div className="dashboard">
      {/* Linha de Cartões de Estatísticas (KPIs) */}
      <div className="stats-row">
        <StatCard
          title="Total de Clientes"
          value={(clients || []).length}
          subtitle="+2 este mês"
          subtitleColor="green"
          icon={<Users size={20} />}
          iconColor="purple"
        />
        <StatCard
          title="Total de Tarefas"
          value={tasks.length}
          subtitle="+5 esta semana"
          subtitleColor="blue"
          icon={<CheckSquare size={20} />}
          iconColor="green"
        />
        <StatCard
          title="Em Progresso"
          value={tasks.filter(t => t.status === "in-progress").length}
          subtitle="Tarefas ativas"
          subtitleColor=""
          icon={<Clock size={20} />}
          iconColor="blue"
        />
        <StatCard
          title="Concluídas"
          value={tasks.filter(t => t.status === "completed").length}
          subtitle="Taxa de 75%"
          subtitleColor="orange"
          icon={<CheckCircle size={20} />}
          iconColor="orange"
        />
      </div>

      {/* Linha do Meio: Tabela de Clientes Recentes e Gráfico de Distribuição */}
      <div className="middle-row">
        {/* Exibe apenas os 5 clientes mais recentes */}
        <ClientsTable clients={[].slice(0, 5)} />
        
        {/* Gráfico circular de distribuição de estados das tarefas */}
        <TaskDistribution />
      </div>

      {/* Tabela de Tarefas Recentes */}
      <TasksTable tasks={tasks.slice(0, 5)} />
    </div>
  );
}

export default DashboardPage;
