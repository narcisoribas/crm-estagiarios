// =============================================
// ClientsTable Component
// This component displays a table with recent
// clients data (name, email, company).
// =============================================

// Define the type for a Client object
interface Client {
  id: number;
  name: string;
  email: string;
  company: string;
}

// Define the props type
interface ClientsTableProps {
  clients: Client[];
}

function ClientsTable(props: ClientsTableProps) {
  const { clients } = props;

  return (
    <div className="card">
      <h2 className="card-title">Recent Clients</h2>

      {/* Table to display client data */}
      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {/* .map() loops through each client */}
          {clients.map((client) => (
            <tr key={client.id}>
              <td className="name">{client.name}</td>
              <td>{client.email}</td>
              <td>{client.company}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClientsTable;
