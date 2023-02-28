import React from "react";

function IntroImgRightSide({ post }) {
  return (
    <section className="bg-full bg-fly-dark-grey ">
      <div className="container mx-auto  text-white pt-2">
        <div className="flex flex-col items-center gap-4 pt-0 pb-8 md:py-8  md:flex-row-reverse ">
          <div className="p-2 w-full md:w-1/2 flex justify-around	">
            <img
              className="h-[400px] md:h-[380px] lg:h-[500px]"
              src={post.introSection.introSectionImgTwo.mediaItemUrl}
              alt="Intro Section Image Two"
            />
          </div>
          <div className=" p-2 w-full md:w-1/3 text-left">
            <h2 className="text-3xl mb-5 md:mb-20 md:text-5xl md:items-end">
              {post.introSection.introSectionHeadingTwo}
            </h2>
            <p className="font-thin md:font-extralight md:leading-relaxed">
              {post.introSection.introSectionTextTwo}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroImgRightSide;
