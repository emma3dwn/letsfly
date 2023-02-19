import React from "react";
import Image from "next/image";

export default function InfoSectionThree({ post }) {
  return (
    <section>
      <div>
        <Image
          src={post.infoSection.infoSectionImgThree.mediaItemUrl}
          alt="Info Section Image Three"
          width={726}
          height={860}
        />

        <div>
          <ol>
            <li>{post.infoSection.infoSectionThreeTextFieldOneParagraph}</li>
            <li>{post.infoSection.infoSectionThreeTextFieldTwoParagraph}</li>
            <li>{post.infoSection.infoSectionThreeTextFieldThreeParagraph}</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
