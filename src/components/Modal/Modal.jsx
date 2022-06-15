import React from 'react'
import styles from './Modal.module.css'
import { CgClose } from 'react-icons/cg';
import Divider from '../Divider/Divider';

const Modal = ({ 
  children, 
  title, 
  hide,
}) => {
  return (
    <div data-testid="modal">
      <div className={styles.modalContainer}>
        <div className={styles.modal}>
          <header className={styles.header}>
            <h2>{title}</h2>
            <button className={styles.buttonClose} onClick={hide}>
              <CgClose size={28} />
            </button>
          </header>
          <Divider />
          <section className={styles.modalBody}>
            {children}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Modal;