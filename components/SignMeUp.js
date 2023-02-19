import React from "react";
import Popup from "./Popup";

function SignMeUp({ post }) {
  return (
    <div>
      <h2>{post.heroSection.rightSideHeading}</h2>
      <Popup post={post} />
    </div>
  );
}

export default SignMeUp;
