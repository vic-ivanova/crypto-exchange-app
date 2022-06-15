import React from "react";
import { createPortal } from "react-dom";

export const ModalPortal = React.memo(({ children }) => {
  const modalElement = document.getElementById('modal');

  if (!modalElement) return null;
  const modalBg = <div className="modal-background"></div>;
  
  return createPortal(
    <div className="modal is-active">
      {modalBg}
      {children}
    </div>,
    modalElement
  );
});