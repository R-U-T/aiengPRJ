import React from 'react';
import './ModalResult.css';
function Modal({ isOpen, children }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                {children}
            </div>
        </div>
    );
}
export default Modal;
