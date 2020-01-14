import React from "react";
import Hero from "./Sections/Hero";
import Explanation from "./Sections/Explanation";
import Editor from "./Sections/Editor";

export default () => {
  return (
    <React.Fragment>
      <Hero />
      <Explanation />
      <Editor />
    </React.Fragment>
  );
};
