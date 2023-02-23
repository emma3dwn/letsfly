import React from "react";
import SignMeUp from "./SignMeUp";

function Hero({ post }) {
  return (
    <section
      className="bg-local bg-cover bg-center bg-full h-screen "
      style={{
        backgroundImage: `url(${post.heroSection.heroBackground.mediaItemUrl})`,
      }}
    >
      <div className="container mx-auto  text-white bg-blue-200/20 h-full ">
        <div className="flex flex-col items-end gap-4 md:flex-row bg-slate-500/30 h-full pt-20 pb-5 md:py-20">
          {/* HERO-TEXT LEFT SIDE  */}
          <div className=" p-2 w-full md:w-1/2 ">
            <h1 className="text-7xl w-4/6 mb-10">
              {" "}
              {post.heroSection.leftSideHeading}{" "}
            </h1>
            <p className=" text-2xl text-normal tracking-wide leading-relaxed">
              {" "}
              {post.heroSection.leftSideParagraph}{" "}
            </p>
            <img
              className="hidden md:block"
              src={post.heroSection.planeIllustration.mediaItemUrl}
              alt="Plane Illustration"
            />
          </div>

          <div className="flex-grow"></div>

          {/* HERO-TEXT RIGHT SIDE  */}
          <div className=" p-2 w-full text-center md:w-1/4 md:text-left  ">
            <div>
              <h2 className="text-5xl">{post.heroSection.rightSideHeading}</h2>

              <img
                className="md:hidden"
                src={post.heroSection.planeIllustration.mediaItemUrl}
                alt="Plane Illustration"
              />
            </div>
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
