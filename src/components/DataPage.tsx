import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import { Search, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import Modal from "./Modal";

/**
 * Interface Column
 * Define a estrutura de cada coluna da tabela no DataPage.
 */
export interface Column<T> {
  key: keyof T | string; // Chave do dado no objeto
  label: string;         // Rótulo exibido no cabeçalho
  render?: (row: T) => ReactNode; // Função opcional para renderização personalizada
  className?: string;    // Classe CSS opcional para a célula
}

/**
 * Props do Componente DataPage
 */
interface DataPageProps<T> {
  title: string;         // Título da seção
  addLabel: string;      // Texto do botão de adicionar
  modalTitle: string;    // Título do modal de formulário
  rows: T[];             // Array de dados para a tabela
  columns: Column<T>[];  // Configuração das colunas
  searchKeys: (keyof T)[]; // Chaves usadas para a pesquisa global
  pageSize?: number;     // Tamanho da página (padrão: 5)
  renderForm: (close: () => void) => ReactNode; // Função que renderiza o formulário no modal
}

/**
 * DataPage Component
 * 
 * Um componente genérico reutilizável para páginas de listagem de dados.
 * Oferece funcionalidades de:
 * - Pesquisa global em campos específicos
 * - Paginação de dados
 * - Tabela dinâmica
 * - Modal para criação de novos registros
 */
function DataPage<T extends { id: number | string }>(props: DataPageProps<T>) {
  const { title, addLabel, modalTitle, rows, columns, searchKeys, renderForm } = props;
  const pageSize = props.pageSize ?? 5;

  // Estados locais para controle de UI e dados
  const [query, setQuery] = useState(""); // Termo de pesquisa
  const [page, setPage] = useState(1);    // Página atual
  const [open, setOpen] = useState(false); // Estado do modal

  /**
   * Lógica de Filtragem (Memoized)
   * Filtra as linhas com base no termo de pesquisa contra as chaves configuradas.
   */
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter((row) =>
      searchKeys.some((k) => {
        const value = row[k];
        return value != null && String(value).toLowerCase().includes(q);
      })
    );
  }, [rows, query, searchKeys]);

  /**
   * Lógica de Paginação
   */
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * pageSize;
  const pageRows = filtered.slice(start, start + pageSize);

  // Reseta para a primeira página ao pesquisar
  function handleSearch(value: string) {
    setQuery(value);
    setPage(1);
  }

  return (
    <div className="dashboard">
      {/* Barra de ferramentas da página */}
      <div className="page-toolbar">
        <div className="search-container toolbar-search">
          <Search size={16} className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Pesquisar..."
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <button className="btn-primary" onClick={() => setOpen(true)}>
          <Plus size={18} />
          {addLabel}
        </button>
      </div>

      {/* Cartão contendo a tabela */}
      <div className="card">
        <h2 className="card-title">{title}</h2>

        <table className="data-table">
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={String(col.key)}>{col.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pageRows.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="empty-row">
                  Nenhum registo encontrado.
                </td>
              </tr>
            ) : (
              pageRows.map((row) => (
                <tr key={String(row.id)}>
                  {columns.map((col) => (
                    <td key={String(col.key)} className={col.className}>
                      {col.render
                        ? col.render(row)
                        : String((row as Record<string, unknown>)[col.key as string] ?? "")}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* Controlos de Paginação */}
        <div className="pagination">
          <span className="pagination-info">
            {filtered.length === 0
              ? "0 resultados"
              : `${start + 1}-${Math.min(start + pageSize, filtered.length)} de ${filtered.length}`}
          </span>
          <div className="pagination-controls">
            <button
              className="page-btn"
              disabled={currentPage === 1}
              onClick={() => setPage(currentPage - 1)}
            >
              <ChevronLeft size={16} />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                className={`page-btn ${p === currentPage ? "active" : ""}`}
                onClick={() => setPage(p)}
              >
                {p}
              </button>
            ))}
            <button
              className="page-btn"
              disabled={currentPage === totalPages}
              onClick={() => setPage(currentPage + 1)}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Modal genérico para o formulário de adição */}
      <Modal open={open} title={modalTitle} onClose={() => setOpen(false)}>
        {renderForm(() => setOpen(false))}
      </Modal>
    </div>
  );
}

export default DataPage;
