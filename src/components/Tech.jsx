import React from "react";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technologie) => (
        <div className=""></div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
