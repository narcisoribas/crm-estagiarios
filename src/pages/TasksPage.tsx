// =============================================
// TasksPage
// Listing of all tasks with add modal.
// =============================================

import { useState } from "react";
import type { FormEvent } from "react";
import DataPage from "../components/DataPage";
import type { Column } from "../components/DataPage";

type TaskStatus = "in-progress" | "pending" | "completed";

interface Task {
  id: number;
  task: string;
  client: string;
  status: TaskStatus;
}

interface TasksPageProps {
  tasks: Task[];
 
  onAdd: (task: Omit<Task, "id">) => void;
}

function statusText(s: TaskStatus) {
  if (s === "in-progress") return "In Progress";
  if (s === "pending") return "Pending";
  return "Completed";
}

function TasksPage(props: TasksPageProps) {
  const columns: Column<Task>[] = [
    { key: "task", label: "Tarefa", className: "name" },
    { key: "client", label: "Cliente" },
    {
      key: "status",
      label: "Estado",
      render: (row) => (
        <span className={`status-badge ${row.status}`}>{statusText(row.status)}</span>
      ),
    },
  ];

  return (
    <DataPage<Task>
      title="Tarefas"
      addLabel="Adicionar Tarefa"
      modalTitle="Nova Tarefa"
      rows={props.tasks}
      columns={columns}
      searchKeys={["task", "client", "status"]}
      renderForm={(close) => (
        <TaskForm clients={[]} onSubmit={props.onAdd} onClose={close} />
      )}
    />
  );
}

function TaskForm(props: {
  clients: { name: string }[];
  onSubmit: (t: Omit<Task, "id">) => void;
  onClose: () => void;
}) {
  const [task, setTask] = useState("");
  const [client, setClient] = useState(props.clients[0]?.name ?? "");
  const [status, setStatus] = useState<TaskStatus>("pending");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!task.trim() || !client) return;
    props.onSubmit({ task: task.trim(), client, status });
    props.onClose();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form-field">
        <span>Tarefa</span>
        <input value={task} onChange={(e) => setTask(e.target.value)} maxLength={120} required />
      </label>
      <label className="form-field">
        <span>Cliente</span>
        <select value={client} onChange={(e) => setClient(e.target.value)} required>
          {props.clients.map((c) => (
            <option key={c.name} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
      </label>
      <label className="form-field">
        <span>Estado</span>
        <select value={status} onChange={(e) => setStatus(e.target.value as TaskStatus)}>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </label>
      <div className="form-actions">
        <button type="button" className="btn-secondary" onClick={props.onClose}>
          Cancelar
        </button>
        <button type="submit" className="btn-primary">
          Guardar
        </button>
      </div>
    </form>
  );
}

export default TasksPage;