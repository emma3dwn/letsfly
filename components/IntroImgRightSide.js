import React from "react";
import Image from "next/image";

function IntroImgRightSide({ post }) {
  return (
    <section>
      <div>
        <Image
          src={post.introSection.introSectionImgTwo.mediaItemUrl}
          alt="Intro Section Image Two"
          width={764}
          height={860}
        />
        <div>
          <h2>{post.introSection.introSectionHeadingTwo}</h2>
          <p>{post.introSection.introSectionTextTwo}</p>
        </div>
      </div>
    </section>
  );
}

export default IntroImgRightSide;
