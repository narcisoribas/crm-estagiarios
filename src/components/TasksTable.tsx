// =============================================
// TasksTable Component
// This component displays a table of recent
// tasks with their client and status badge.
// =============================================

// Define the type for a Task object
interface Task {
  id: number;
  task: string;
  client: string;
  status: "in-progress" | "pending" | "completed";
}

// Define the props type
interface TasksTableProps {
  tasks: Task[];
}

function TasksTable(props: TasksTableProps) {
  const { tasks } = props;

  // Helper function to get the display text for a status
  function getStatusText(status: string): string {
    if (status === "in-progress") return "In Progress";
    if (status === "pending") return "Pending";
    return "Completed";
  }

  return (
    <div className="card">
      <h2 className="card-title">Recent Tasks</h2>

      <table className="data-table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Client</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td className="name">{task.task}</td>
              <td>{task.client}</td>
              <td>
                {/* Status badge with dynamic class */}
                <span className={`status-badge ${task.status}`}>
                  {getStatusText(task.status)}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TasksTable;
