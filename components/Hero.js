import React from "react";
import SignMeUp from "./SignMeUp";

function Hero({ component }) {
  return (
    <section
      className="bg-local bg-cover bg-center bg-full h-screen -mt-24"
      style={{
        backgroundImage: `url(${component.heroSection.heroBackground.mediaItemUrl})`,
      }}
    >
      <div className="container mx-auto text-white  h-full md:px-0">
        <div className="flex flex-col items-end gap-4 h-full pt-32 pb-5 md:flex-row md:py-20">
          {/* HERO-TEXT LEFT SIDE  */}
          <div className="mt-20 md:mt-0 p-2 w-full md:w-1/2 ">
            <h1 className="mb-10 font-normal text-5xl sm:text-7xl w-2/3 md:text-8xl lg:text-9xl md:font-medium md:w-full ">
              {" "}
              {component.heroSection.leftSideHeading}{" "}
            </h1>
            <p className="font-thin md:font-light tra md:tracking-wider md:leading-relaxed md:text-2xl ">
              {" "}
              {component.heroSection.leftSideParagraph}{" "}
            </p>
            <img
              className="hidden md:block"
              src={component.heroSection.planeIllustration.mediaItemUrl}
              alt="Plane Illustration"
            />
          </div>

          <div className="flex-grow"></div>

          {/* HERO-TEXT RIGHT SIDE  */}
          <div className=" p-2 w-full text-center md:w-1/4 md:text-left  ">
            <div>
              <h2 className="text-3xl w-1/2 mx-auto md:w-full md:text-5xl ">
                {component.heroSection.rightSideHeading}
              </h2>

              <img
                className=" w-full mx-auto md:hidden "
                src={component.heroSection.planeIllustration.mediaItemUrl}
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
            {componentheroSection.leftSideHeading}{" "}
          </h1>
          <p className={styles.leftSideParagraph}>
            {" "}
            {componentheroSection.leftSideParagraph}{" "}
          </p>
          <Image
            className={styles.planeIllustrationDesktop}
            src={componentheroSection.planeIllustration.mediaItemUrl}
            alt="Plane Illustration"
            width={966}
            height={86}
            quality={75}
          />
        </div>

        <div className={styles.emailInputWrapper}>
          <SignMeUp key={componentid} post={post}></SignMeUp>
        </div>

         PLANE ILLUSTRATION MOBILE 
        <Image
          className={styles.planeIllustrationMobile}
          src={componentheroSection.planeIllustration.mediaItemUrl}
          alt="Plane Illustration"
          width={450}
          height={40}
          quality={75}
        />
      </div>
    </section>
  );
  */
