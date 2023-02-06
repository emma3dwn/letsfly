import React from "react";
import styles from "../styles/hero.module.css";
import SignMeUp from "./SignMeUp";
import Image from "next/image";

function Hero({ post }) {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroTextWrapper}>
        {/* HERO-TEXT LEFT SIDE */}
        <div className={styles.heroTextContainerLeft}>
          <h1 className={styles.leftSideHeading}>
            {" "}
            {post.heroSection.leftSideHeading}{" "}
          </h1>
          <p className={styles.leftSideParagraph}>
            {" "}
            {post.heroSection.leftSideParagraph}{" "}
          </p>
          <Image
            className={styles.planeIllustrationDesktop}
            src={post.heroSection.planeIllustration.mediaItemUrl}
            alt="Plane Illustration"
            width={966}
            height={86}
            quality={75}
          />
        </div>

        <div className={styles.emailInputWrapper}>
          <SignMeUp key={post.id} post={post}></SignMeUp>
        </div>

        {/* PLANE ILLUSTRATION MOBILE */}
        <Image
          className={styles.planeIllustrationMobile}
          src={post.heroSection.planeIllustration.mediaItemUrl}
          alt="Plane Illustration"
          width={450}
          height={40}
          quality={75}
        />
      </div>
    </section>
  );
}

export default Hero;
