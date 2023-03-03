import React from "react";
import Popup from "./Popup";

function SignMeUp({ component }) {
  return (
    <div>
      <h2 className="text-5xl">{component.heroSection.rightSideHeading}</h2>

      {/* email button */}
      <Popup component={component} />
    </div>
  );
}

export default SignMeUp;
