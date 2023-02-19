import React from "react";
import Image from "next/image";

function InfoSectionTwo({ post }) {
  return (
    <section>
      <div>
        <Image
          src={post.infoSection.infoSectionImgTwo.mediaItemUrl}
          alt="Info Section Image Two"
          width={434}
          height={860}
        />
        <h3>{post.infoSection.infoSectionTextTwo}</h3>
      </div>
    </section>
  );
}

export default InfoSectionTwo;
