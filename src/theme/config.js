import {system} from "styled-system";

const config = {
  fontWeight: {
    property: "fontWeight",
    scale: "fontWeights"
  }
};

config.fw = config.fontWeight;
const fontWeight = system(config);

export {fontWeight};
