// =============================================
// Modal Component
// Generic modal/dialog used to host forms.
// =============================================

import type { ReactNode } from "react";
import { X } from "lucide-react";

interface ModalProps {
  open: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
}

function Modal(props: ModalProps) {
  if (!props.open) return null;

  return (
    <div className="modal-backdrop" onClick={props.onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{props.title}</h3>
          <button className="modal-close" onClick={props.onClose} aria-label="Close">
            <X size={18} />
          </button>
        </div>
        <div className="modal-body">{props.children}</div>
      </div>
    </div>
  );
}

export default Modal;