import {system} from "styled-system";

const config = {
  fontWeight: {
    property: "fontWeight",
    scale: "fontWeights"
  },
  fontSize: {
    property: "fontSize",
    scale: "fontSizes"
  }
};

config.fw = config.fontWeight;
config.fs = config.fontSize;

const fontWeight = system(config);
const fontSize = system(config);

export {fontWeight, fontSize};
