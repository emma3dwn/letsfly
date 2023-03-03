import React, { useState } from "react";

const Popup = ({ component, inNav, inMobileNav }) => {
  const [isShown, setIsShown] = useState(false);

  const toggleModal = () => {
    setIsShown(!isShown);
  };

  return (
    <div>
      <button
        className="hover:text-white/20 hover:border-white/20"
        onClick={toggleModal}
      >
        {inNav ? component.navbar.signUpButton : component.heroSection.emailInput}
      </button>

      {isShown ? (
        <div className="" onClick={toggleModal}>
          <div className="">
            <div className="">
              <div className="">
                <a className="" href="#" onClick={toggleModal}>
                  Close
                </a>
              </div>
              <div>
                <p>{component.heroSection.leftSideParagraph}</p>
                <div>
                  <h2>{component.heroSection.rightSideHeading} </h2>
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
