import React, { useState } from "react";

const Popup = ({ post, inNav, inMobileNav }) => {
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
        {inNav ? post.navbar.signUpButton : post.heroSection.emailInput}
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
                <p>{post.heroSection.leftSideParagraph}</p>
                <div>
                  <h2>{post.heroSection.rightSideHeading} </h2>
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
