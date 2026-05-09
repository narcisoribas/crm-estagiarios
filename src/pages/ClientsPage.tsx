import { useState, useContext, useEffect } from "react";
import type { FormEvent } from "react";
import DataPage from "../components/DataPage";
import type { Column } from "../components/DataPage";

/**
 * Interface Client
 * Representa a estrutura de dados de um cliente.
 */
import type { Client } from "../models/Client";
import { GlobalContext } from "../context/GlobalContext";



/**
 * Props do Componente ClientsPage
 */


/**
 * ClientsPage Component
 * 
 * Página de gestão de clientes que utiliza o componente genérico DataPage
 * para exibir a listagem, permitir pesquisa e adição de novos clientes.
 */
function ClientsPage() {

  const {clients, onAdd, getClientes} = useContext(GlobalContext)

  useEffect(()=>{
    getClientes();
  },[])

  
  /**
   * Configuração das colunas da tabela de clientes.
   */
  const columns: Column<Client>[] = [
    { key: "nome", label: "Nome", className: "name" },
    { key: "email", label: "Email" },
    { key: "empresa", label: "Empresa" },
  ];


  

  return (
    <DataPage<Client>
      title="Clientes"
      addLabel="Adicionar Cliente"
      modalTitle="Novo Cliente"
      rows={clients}
      columns={columns}
      searchKeys={["nome", "email", "empresa"]}
      renderForm={(close) => <ClientForm onSubmit={onAdd} onClose={close} />}
    />
  );
}

/**
 * ClientForm Component
 * 
 * Formulário interno para criação de um novo cliente, renderizado dentro do modal.
 */
function ClientForm(props: { onSubmit: (c: Omit<Client, "id">) => void; onClose: () => void }) {
  // Estados locais do formulário
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");

  /**
   * Manipulador de submissão do formulário.
   */
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // Validação básica
    if (!name.trim() || !email.trim() || !company.trim()) return;
    
    // Chama a função de adição e fecha o modal
    props.onSubmit({ nome: name.trim(), email: email.trim(), empresa: company.trim(), telefone: "", status: "ativo", observacoes: "", created_at: new Date().toISOString(), updated_at: new Date().toISOString() });
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
