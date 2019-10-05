import {system} from "styled-system";

const theme = {
  breakpoints: ["32.5em", "40em", "48em", "52em", "60.625em", "75em"],
  space: [0, 4, 8, 16, 32, 64, 128],
  fonts: {
    sans:
      "-apple-system, BlinkMacSystemFont, Oxygen, Ubuntu, Cantarell, Fira Sans, system-ui, sans-serif",
    mono: "Menlo, monospace"
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72, 96],
  fontWeights: {
    normal: 400,
    bold: 700
  },
  colors: {
    black: ["#000"],
    white: ["#fff"]
  },
  radii: [0, 2, 4]
};

const config = {
  fontWeight: {
    property: "fontWeight",
    scale: "fontWeights"
  }
};

config.fw = config.fontWeight;
const fontWeight = system(config);

export default theme;
export {fontWeight};
