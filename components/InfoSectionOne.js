import React from "react";
import styles from "../styles/infoSectionOne.module.css";
import Image from "next/image";

function infoSectionOne({ post }) {
  return (
    <section className={styles.infoSectionWrapper}>
      <div className={styles.infoSection}>
        <Image
          className={styles.imgScreenShot}
          src={post.infoSection.infoSectionImgOne.mediaItemUrl}
          alt="Info Section Image One"
          width={100}
          height={100}
        />
        <div className={styles.infoSectionTextContainer}>
          <h2 className={styles.infoSectionTitle}>
            {post.infoSection.infoSectionHeadingOne}
          </h2>
          <p className={styles.infoSectionParagraph}>
            {post.infoSection.infoSectionTextOne}
          </p>
        </div>
      </div>
    </section>
  );
}

export default infoSectionOne;
