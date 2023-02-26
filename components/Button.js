import React from "react";

function Button(props) {
  return (
    <button className="bg-transparent text-white font-bold py-2 px-4 md:border md: border-white rounded-full md: hover:text-white/20 md:hover:border-white/20 inline-flex items-center">
      {props.children}
    </button>
  );
}

export default Button;
