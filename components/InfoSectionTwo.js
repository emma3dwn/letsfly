import React from "react";
import styles from "../styles/infoSectionTwo.module.css";
import Image from "next/image";

function InfoSectionTwo({ post }) {
  return (
    <section className={styles.infoSectionWrapper}>
      <div className={styles.infoSection}>
        <Image
          className={styles.imgScreenShot}
          src={post.infoSection.infoSectionImgTwo.mediaItemUrl}
          alt="Info Section Image Two"
          width={434}
          height={860}
        />
        <h3 className={styles.infoSectionText}>
          {post.infoSection.infoSectionTextTwo}
        </h3>
      </div>
    </section>
  );
}

export default InfoSectionTwo;
