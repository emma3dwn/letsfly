import React from "react";

export default function infoSectionOne({ post }) {
  return (
    <section className="bg-full bg-fly-2x-light-grey ">
      <div className="container mx-auto text-fly-black">
        <div className="flex flex-col items-center gap-4 py-8    md:py-16 md:flex-row">
          <div className=" p-2 w-full md:w-1/2 flex justify-around	">
            <img
              className="h-[400px] md:h-[500px] lg:h-[500px]"
              src={post.infoSection.infoSectionImgOne.mediaItemUrl}
              alt="Info Section Image One"
            />
          </div>

          <div className="p-2 w-full md:w-1/2 text-right">
            <h2 className="text-3xl mb-5 md:mb-20 md:text-5xl md:items-end">
              {post.infoSection.infoSectionHeadingOne}
            </h2>
            <p className="font-thin md:font-extralight md:leading-relaxed">
              {post.infoSection.infoSectionTextOne}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
