import React from "react";
import Image from "next/image";

function IntroImgLeftSide({ post }) {
  return (
    <section>
      <div>
        <Image
          src={post.introSection.introSectionImgOne.mediaItemUrl}
          alt="Intro Section Image One"
          width={442}
          height={868}
        />
        <div>
          <h2>{post.introSection.introSectionHeadingOne}</h2>
          <p>{post.introSection.introSectionTextOne}</p>
        </div>
      </div>
    </section>
  );
}

export default IntroImgLeftSide;
