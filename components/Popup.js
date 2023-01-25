import React, { useEffect, useState } from 'react';
import styles from '../styles/popup.module.css';
import SignMeUp from './SignMeUp';

const Modal = ({ post }) => {
  const [isShown, setIsShown] = useState(false);

  const showModal = () => {
    setIsShown(true);
  };

  const closeModal = () => {
    setIsShown(false);
  };

  /*   useEffect(() => {
    if (!sessionStorage.popupModal) {
      const timer = setTimeout(() => {
        setIsShown(true);
        sessionStorage.popupModal = 1;
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []); */

  return (
    <div className={styles.modalOverlay} onClick={closeModal}>
      <div className={styles.modalWrapper}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <a className={styles.closeClick} href="#" onClick={closeModal}>
              Close
            </a>
          </div>
          <div className={styles.modalBody}>
            <p className={styles.modalParagraph}>
              {post.heroSection.leftSideParagraph}
            </p>
            <div className={styles.signMeUpWrapper}>
            <SignMeUp
              key={post.id}
              post={post}
              heading={post.heroSection.rightSideHeading}
              paragraph={post.heroSection.emailInput}
            ></SignMeUp>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
