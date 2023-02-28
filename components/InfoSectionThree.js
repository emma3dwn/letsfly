import React from "react";

export default function InfoSectionThree({ post }) {
  return (
    <section className="bg-full bg-fly-2x-light-grey">
      <div className="container mx-auto  text-fly-black">
        <div className="flex flex-col items-center gap-4 pt-0 pb-8    md:py-16 md:flex-row">
          <div className=" p-2 w-full md:w-1/2 flex justify-around	">
            <img
              className="h-[400px] md:h-[500px] lg:h-[500px]"
              src={post.infoSection.infoSectionImgThree.mediaItemUrl}
              alt="Info Section Image Three"
            />
          </div>

          <div className=" p-2 w-full md:w-1/3 text-left">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-right text-4xl">01</div>
              <div className="pr-8">
                {post.infoSection.infoSectionThreeTextFieldOneParagraph}
              </div>
              <div className="text-right text-4xl">02</div>
              <div className="pr-8">
                {post.infoSection.infoSectionThreeTextFieldTwoParagraph}
              </div>
              <div className="text-right text-4xl">03</div>

              <div className="pr-8">
                {post.infoSection.infoSectionThreeTextFieldThreeParagraph}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
