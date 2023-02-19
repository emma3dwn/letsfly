import React from "react";

import Image from "next/image";

function infoSectionOne({ post }) {
  return (
    <section>
      <div>
        <Image
          src={post.infoSection.infoSectionImgOne.mediaItemUrl}
          alt="Info Section Image One"
          width={786}
          height={860}
        />
        <div>
          <h2>{post.infoSection.infoSectionHeadingOne}</h2>
          <p>{post.infoSection.infoSectionTextOne}</p>
        </div>
      </div>
    </section>
  );
}

export default infoSectionOne;
