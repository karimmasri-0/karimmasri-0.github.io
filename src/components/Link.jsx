import React from "react";

const Link = ({ children, link }) => {
  return (
    <a className="relative w-fit group" href={link}>
      {children}
      <span className="absolute w-0 h-0.5 duration-500 bg-red-400 -bottom-1 left-1/2 group-hover:w-1/2 transition-all"></span>
      <span className="absolute w-0 h-0.5 duration-500 bg-red-400 -bottom-1 right-1/2 group-hover:w-1/2 transition-all"></span>
    </a>
  );
};

export default Link;
