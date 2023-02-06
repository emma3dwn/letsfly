import React, { useState } from "react";
import modalStyles from "../styles/popup.module.css";
import btnStyles from "../styles/button.module.css";
import SignMeUpStyle from "../styles/signMeUp.module.css";
import mobileNavStyle from "../styles/navbar.module.css";

const Popup = ({ post, inNav, inMobileNav }) => {
  const [isShown, setIsShown] = useState(false);

  const toggleModal = () => {
    setIsShown(!isShown);
  };

  return (
    <div>
      <button
        className={
          inNav
            ? btnStyles.signMeUpBtnInNav
            : inMobileNav
            ? mobileNavStyle.signMeUpMobileNavLink
            : btnStyles.signMeUpBtn
        }
        onClick={toggleModal}
      >
        {inNav ? post.signUpButton : post.heroSection.emailInput}
      </button>

      {isShown ? (
        <div className={modalStyles.modalOverlay} onClick={toggleModal}>
          <div className={modalStyles.modalWrapper}>
            <div className={modalStyles.modal}>
              <div className={modalStyles.modalHeader}>
                <a
                  className={modalStyles.closeClick}
                  href="#"
                  onClick={toggleModal}
                >
                  Close
                </a>
              </div>
              <div className={modalStyles.modalBody}>
                <p className={modalStyles.modalParagraph}>
                  {post.heroSection.leftSideParagraph}
                </p>
                <div className={SignMeUpStyle.signMeUpWrapper}>
                  <h2 className={SignMeUpStyle.signMeUpHeading}>
                    {" "}
                    {post.heroSection.rightSideHeading}{" "}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Popup;
