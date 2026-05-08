// =============================================
// SettingsPage
// Simple settings screen following the visual
// pattern (card + form fields).
// =============================================

import { useState } from "react";
import type { FormEvent } from "react";

function SettingsPage() {
  const [orgName, setOrgName] = useState("Mini CRM");
  const [contactEmail, setContactEmail] = useState("john@minicrm.io");
  const [notifications, setNotifications] = useState(true);

  function handleSave(e: FormEvent) {
    e.preventDefault();
    // In a real app, persist these values to the backend.
  }

  return (
    <div className="dashboard">
      <div className="card" style={{ maxWidth: 640 }}>
        <h2 className="card-title">Definições gerais</h2>
        <form className="form" onSubmit={handleSave}>
          <label className="form-field">
            <span>Nome da organização</span>
            <input
              value={orgName}
              onChange={(e) => setOrgName(e.target.value)}
              maxLength={100}
            />
          </label>
          <label className="form-field">
            <span>Email de contacto</span>
            <input
              type="email"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              maxLength={255}
            />
          </label>
          <label className="form-field form-field-inline">
            <input
              type="checkbox"
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
            />
            <span>Receber notificações por email</span>
          </label>
          <div className="form-actions">
            <button type="submit" className="btn-primary">
              Guardar alterações
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SettingsPage;