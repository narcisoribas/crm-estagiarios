// =============================================
// DataPage Component
// Reusable page layout with: title, search input,
// "Add" button, paginated table and modal form.
// =============================================

import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import { Search, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import Modal from "./Modal";

export interface Column<T> {
  key: keyof T | string;
  label: string;
  render?: (row: T) => ReactNode;
  className?: string;
}

interface DataPageProps<T> {
  title: string;
  addLabel: string;
  modalTitle: string;
  rows: T[];
  columns: Column<T>[];
  searchKeys: (keyof T)[];
  pageSize?: number;
  renderForm: (close: () => void) => ReactNode;
}

function DataPage<T extends { id: number | string }>(props: DataPageProps<T>) {
  const { title, addLabel, modalTitle, rows, columns, searchKeys, renderForm } = props;
  const pageSize = props.pageSize ?? 5;

  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);

  // Filter rows by query against the configured searchable keys
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

  // Pagination math
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * pageSize;
  const pageRows = filtered.slice(start, start + pageSize);

  function handleSearch(value: string) {
    setQuery(value);
    setPage(1);
  }

  return (
    <div className="dashboard">
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

        {/* Pagination controls */}
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

      <Modal open={open} title={modalTitle} onClose={() => setOpen(false)}>
        {renderForm(() => setOpen(false))}
      </Modal>
    </div>
  );
}

export default DataPage;