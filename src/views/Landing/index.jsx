import React from "react";
import Hero from "./Sections/Hero";
import Explaination from "./Sections/Explaination";
import Editor from "./Sections/Editor";
export default () => {
  return (
    <React.Fragment>
      <Hero />
      <Explaination />
      <Editor />
    </React.Fragment>
  );
};
