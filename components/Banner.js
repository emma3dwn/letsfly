import React from "react";

function Banner(props) {
  return (
    <section className="bg-black py-16 text-4xl flex  items-center justify-center">
      <h3 className="w-1/2  text-white text-center"> {props.text}</h3>
    </section>
  );
}

export default Banner;
