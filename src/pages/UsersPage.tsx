// =============================================
// UsersPage
// User management screen with paginated table.
// =============================================

import { useState } from "react";
import type { FormEvent } from "react";
import DataPage from "../components/DataPage";
import type { Column } from "../components/DataPage";

export interface User {
  id: number;
  name: string;
  email: string;
  role: "Admin" | "Editor" | "Viewer";
}

interface UsersPageProps {
  users: User[];
  onAdd: (user: Omit<User, "id">) => void;
}

function UsersPage(props: UsersPageProps) {
  const columns: Column<User>[] = [
    { key: "name", label: "Nome", className: "name" },
    { key: "email", label: "Email" },
    { key: "role", label: "Função" },
  ];

  return (
    <DataPage<User>
      title="Utilizadores"
      addLabel="Adicionar Utilizador"
      modalTitle="Novo Utilizador"
      rows={props.users}
      columns={columns}
      searchKeys={["name", "email", "role"]}
      renderForm={(close) => <UserForm onSubmit={props.onAdd} onClose={close} />}
    />
  );
}

function UserForm(props: { onSubmit: (u: Omit<User, "id">) => void; onClose: () => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<User["role"]>("Viewer");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    props.onSubmit({ name: name.trim(), email: email.trim(), role });
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
        <span>Função</span>
        <select value={role} onChange={(e) => setRole(e.target.value as User["role"])}>
          <option value="Admin">Admin</option>
          <option value="Editor">Editor</option>
          <option value="Viewer">Viewer</option>
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

export default UsersPage;