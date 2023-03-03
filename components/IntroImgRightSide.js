import React from "react";

function IntroImgRightSide({ component }) {
  return (
    <section className="bg-full bg-fly-dark-grey ">
      <div className="container mx-auto  text-white pt-2">
        <div className="flex flex-col items-center gap-4 py-8  md:pb-16 md:flex-row-reverse md:justify-between">
          <div className="p-2 w-full md:w-1/2 flex	">
            <img
              className="h-[300px] md:h-[380px] lg:h-[500px]"
              //w-full md:w-3/5
              src={component.introSection.introSectionImgTwo.mediaItemUrl}
              alt="Intro Section Image Two"
            />
          </div>
          <div className=" p-2 w-full md:w-1/3 text-left">
            <h2 className="text-3xl mb-5 md:mb-20 md:text-5xl md:items-end">
              {component.introSection.introSectionHeadingTwo}
            </h2>
            <p className="font-thin md:font-extralight md:leading-relaxed">
              {component.introSection.introSectionTextTwo}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroImgRightSide;
