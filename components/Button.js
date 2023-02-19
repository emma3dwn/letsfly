import React from "react";

function Button(props) {
  return (
    <button className="bg-transparent text-white font-bold py-2 px-4 border border-white rounded-full hover:border-blue-200 inline-flex items-center">
      {props.children}
    </button>
  );
}

export default Button;
