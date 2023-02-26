import React from "react";
import Popup from "./Popup";

function SignMeUp({ post }) {
  return (
    <div>
      <h2 className="text-5xl">{post.heroSection.rightSideHeading}</h2>

      {/* email button */}
      <Popup post={post} />
    </div>
  );
}

export default SignMeUp;
