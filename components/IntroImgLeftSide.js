import React from "react";

function IntroImgLeftSide({ post }) {
  return (
    <section className="bg-full bg-fly-dark-grey  ">
      <div className="container mx-auto  text-white">
        <div className="flex flex-col items-center gap-4 py-8 md:py-16 md:flex-row md:justify-between">
          <div className=" p-2 w-full md:w-1/2 flex justify-center md:justify-start	">
            <img
              className="h-[360px] md:h-[380px] lg:h-[500px]"
              // w-full md:w-3/5
              src={post.introSection.introSectionImgOne.mediaItemUrl}
              alt="Intro Section Image One"
            />
          </div>

          <div className=" p-2 w-full  md:w-1/3 text-right">
            <h2 className="text-3xl mb-5 md:mb-20 md:text-5xl md:items-end">
              {post.introSection.introSectionHeadingOne}
            </h2>
            <p className="md:font-extralight md:leading-relaxed">
              {post.introSection.introSectionTextOne}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroImgLeftSide;
