import React from "react";

export default function InfoSectionThree({ post }) {
  return (
    <section className="bg-full bg-fly-2x-light-grey">
      <div className="container mx-auto  text-fly-black">
        <div className="flex flex-col items-center gap-4 py-0 md:justify-between  md:py-16 md:flex-row">
          <div className=" p-2 w-full md:w-1/2 flex justify-around	">
            <img
              className="h-[500px] md:h-[400px] lg:h-[500px]"
              src={post.infoSection.infoSectionImgThree.mediaItemUrl}
              alt="Info Section Image Three"
            />
          </div>

          <div className=" px-2 py-10 w-full md:w-1/3 text-left">
            <div className="grid grid-cols-5       md:grid-cols-3 gap-x-4 gap-y-16">
              <div className="text-right text-4xl font-mono">01</div>
              <div className=" col-span-4 md:col-span-2 ">
                {post.infoSection.infoSectionThreeTextFieldOneParagraph}
              </div>
              <div className="text-right text-4xl font-mono">02</div>
              <div className=" col-span-4 md:col-span-2 ">
                {post.infoSection.infoSectionThreeTextFieldTwoParagraph}
              </div>
              <div className="text-right text-4xl font-mono">03</div>

              <div className="col-span-4 md:col-span-2 ">
                {post.infoSection.infoSectionThreeTextFieldThreeParagraph}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
