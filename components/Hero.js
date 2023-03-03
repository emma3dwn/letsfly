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
      <div className="container mx-auto text-white h-full md:px-0">
        <div className="flex flex-col items-end gap-4 h-full pb-5 md:flex-row md:pt-40 md:pb-10 md:px-5">
          <div className="flex-grow md:flex-grow-0"></div>

          {/* HERO-TEXT LEFT SIDE  */}
          <div className="mt-40 md:mt-0 w-full md:w-1/2 ">
            <h1 className="mb-10 font-normal text-5xl sm:text-7xl w-2/3 md:text-8xl lg:text-9xl md:font-medium md:w-full ">
              {" "}
              {component.heroSection.leftSideHeading}{" "}
            </h1>
            <p className=" font-light text-base    md:text-3xl md:font-regular md:tracking-wider md:leading-relaxed  ">
              {" "}
              {component.heroSection.leftSideParagraph}{" "}
            </p>
            <img
              className="hidden md:block"
              src={component.heroSection.planeIllustration.mediaItemUrl}
              alt="Plane Illustration"
            />
          </div>

          <div className="md:flex-grow"></div>

          {/* HERO-TEXT RIGHT SIDE  */}
          <div className=" w-full text-center md:w-1/4 md:text-left ">
            <div>
              <h2 className="w-1/3 text-2xl mx-auto items-center      md:w-auto md:ml-0 md:text-3xl lg:w-2/3 lg:text-5xl lg:font-medium  ">
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

