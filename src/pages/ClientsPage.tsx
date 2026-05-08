// =============================================
// ClientsPage
// Full CRUD-style listing for clients.
// =============================================

import { useState } from "react";
import type { FormEvent } from "react";
import DataPage from "../components/DataPage";
import type { Column } from "../components/DataPage";

interface Client {
  id: number;
  name: string;
  email: string;
  company: string;
}

interface ClientsPageProps {
  clients: Client[];
  onAdd: (client: Omit<Client, "id">) => void;
}

function ClientsPage(props: ClientsPageProps) {
  const columns: Column<Client>[] = [
    { key: "name", label: "Nome", className: "name" },
    { key: "email", label: "Email" },
    { key: "company", label: "Empresa" },
  ];

  return (
    <DataPage<Client>
      title="Clientes"
      addLabel="Adicionar Cliente"
      modalTitle="Novo Cliente"
      rows={props.clients}
      columns={columns}
      searchKeys={["name", "email", "company"]}
      renderForm={(close) => <ClientForm onSubmit={props.onAdd} onClose={close} />}
    />
  );
}

function ClientForm(props: { onSubmit: (c: Omit<Client, "id">) => void; onClose: () => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !company.trim()) return;
    props.onSubmit({ name: name.trim(), email: email.trim(), company: company.trim() });
    props.onClose();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form-field">
        <span>Nome</span>
        <input value={name} onChange={(e) => setName(e.target.value)} maxLength={100} required />
      </label>
      <label className="form-field">
        <span>Email</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          maxLength={255}
          required
        />
      </label>
      <label className="form-field">
        <span>Empresa</span>
        <input
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          maxLength={100}
          required
        />
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

export default ClientsPage;