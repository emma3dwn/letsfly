import React from "react";
import SignMeUp from "./SignMeUp";
import Image from "next/image";

function Hero({ post }) {
  return (
    <section
      className="bg-local bg-center bg-full h-screen pt-20 "
      style={{
        backgroundImage: `url(${post.heroSection.heroBackground.mediaItemUrl})`,
      }}
    >
      <div className="container mx-auto  text-white">
        <div className="flex flex-col items-end gap-4 md:flex-row">
          {/* HERO-TEXT LEFT SIDE  */}
          <div className="bg-blue-900 p-2 w-full md:w-2/3 ">
            <h1 className="text-6xl"> {post.heroSection.leftSideHeading} </h1>
            <p> {post.heroSection.leftSideParagraph} </p>
            <Image
              src={post.heroSection.planeIllustration.mediaItemUrl}
              alt="Plane Illustration"
              width={966}
              height={86}
              quality={75}
            />
          </div>
          {/* HERO-TEXT RIGHT SIDE  */}
          <div className="bg-blue-900 p-2 w-full md:w-1/3 ">
            <SignMeUp key={post.id} post={post}></SignMeUp>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

/*


return (
    <section className={styles.heroSection}>
      <div className={styles.heroTextWrapper}>

        HERO-TEXT LEFT SIDE 
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

         PLANE ILLUSTRATION MOBILE 
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
  */
