import React, { useEffect, useState } from "react";
import styles from '../styles/popup.module.css'

const Modal = ({ children, title }) => {
  const [isShown, setIsShown] = useState(false);

  const showModal = () => {
    setIsShown(true);
  };

  const closeModal = () => {
    setIsShown(false);
  };

  useEffect(() => {
    if (!sessionStorage.popupModal) {
      const timer = setTimeout(() => {
        setIsShown(true);
        sessionStorage.popupModal = 1;
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  return isShown ? (
    <div className={styles.modalOverlay} onClick={closeModal}>
      <div className={styles.modalWrapper}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <a className={styles.closeClick} href="#" onClick={closeModal}>
              Close
            </a>
          </div>
          {title && <div className={styles.modalTitle}>{title}</div>}
          <div className={styles.modalBody}>{children}</div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;