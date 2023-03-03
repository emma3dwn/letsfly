import React from "react";

function InfoSectionTwo({ component }) {
  return (
    <section className="bg-full bg-fly-2x-light-grey ">
      <div className="container mx-auto  text-fly-black pt-2">
        <div className="flex flex-col items-center gap-4 pt-0 pb-8    md:py-16 md:flex-row-reverse ">
          <div className=" p-2 w-full md:w-1/2 flex justify-around	">
            <img
              className="h-[400px] md:h-[380px] lg:h-[500px]"
              src={component.infoSection.infoSectionImgTwo.mediaItemUrl}
              alt="Info Section Image Two"
            />
          </div>

          <div className="py-10 pb-0 w-full md:w-1/2 text-center">
            <h3 className="py-10 text-xl md:mb-20 md:text-3xl md:font-semibold md:text-center lg:text-4xl ">
              {component.infoSection.infoSectionTextTwo}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoSectionTwo;
