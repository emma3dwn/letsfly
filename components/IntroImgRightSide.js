import React from "react";
import styles from "../styles/introImgRightSide.module.css";
import Image from "next/image";

function IntroImgRightSide({ post }) {
  return (
    <section className={styles.introSectionWrapper}>
      <div className={styles.introSection}>
        <Image
          className={styles.imgScreenShot}
          src={post.introSection.introSectionImgTwo.mediaItemUrl}
          alt="Intro Section Image Two"
          width={384}
          height={432}
        />
        <div className={styles.introSectionTextContainer}>
          <h2 className={styles.introSectionTitle}>
            {post.introSection.introSectionHeadingTwo}
          </h2>
          <p className={styles.introSectionParagraph}>
            {post.introSection.introSectionTextTwo}
          </p>
        </div>
      </div>
    </section>
  );
}

export default IntroImgRightSide;
