/*
    Author: Vahid Eyorokon
*/

/*
    Imports
*/

import configure from "theme/config";
import {compose} from "styled-system";

/*
     Fields
 */
const overflow = configure("overflow");
const textAlign = configure("textAlign");

const width = configure("width", "w", "space");
const height = configure("height", "h", "space");
const minHeight = configure("minHeight");
const maxHeight = configure("maxHeight");

const background = configure("background", ["bg", "background"], "colors");
const backgroundImage = configure("backgroundImage");
const backgroundPosition = configure("backgroundPosition");
const backgroundPositionX = configure("backgroundPositionX", "bpx");
const backgroundPositionY = configure("backgroundPositionY", "bpy");
const backgroundSize = configure("backgroundSize");

const color = configure("color", "color", "colors");

const fontWeight = configure("fontWeight", "fw", "fontWeights");
const fontSize = configure("fontSize", "fs", "fontSizes");
const lineHeight = configure("lineHeight", "lh");
const typography = compose(
  fontWeight,
  fontSize,
  lineHeight
);

const marginTop = configure("marginTop", ["marginTop", "mt"], "space");
const marginBottom = configure("marginBottom", ["marginBottom", "mb"], "space");
const marginLeft = configure("marginLeft", ["marginLeft", "ml"], "space");
const marginRight = configure("marginRight", ["marginRight", "mr"], "space");
const marginAll = configure("margin", "m", "space");

const margin = compose(
  marginAll,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight
);

const paddingTop = configure("paddingTop", ["paddingTop", "pt"], "space");
const paddingBottom = configure(
  "paddingBottom",
  ["paddingBottom", "pb"],
  "space"
);
const paddingLeft = configure("paddingLeft", ["paddingLeft", "pl"], "space");
const paddingRight = configure("paddingRight", ["paddingRight", "pr"], "space");
const paddingAll = configure("padding", "p", "space");

const padding = compose(
  paddingAll,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight
);

const transitionDuration = configure("transitionDuration", "duration");
const transitionTimingFunction = configure("transitionTimingFunction");
const transitionDelay = configure("transitionDelay", "delay");

const transitionFields = compose(
  transitionDuration,
  transitionTimingFunction,
  transitionDelay
);

const position = configure("position");
const top = configure("top");
const right = configure("right");
const bottom = configure("bottom");
const left = configure("left");

const positionFields = compose(
  position,
  top,
  right,
  bottom,
  left
);

const generics = compose(
  overflow,
  typography,
  margin,
  padding,
  background,
  color,
  width,
  height,
  transitionFields,
  positionFields,
  minHeight,
  maxHeight,
  textAlign
);

const animationDuration = configure("animationDuration");
const animationTimingFunction = configure("animationTimingFunction");
const animationDelay = configure("animationDelay");
const animationFillMode = configure("animationFillMode");

const animationFields = compose(
  animationDuration,
  animationTimingFunction,
  animationDelay,
  animationFillMode
);

const display = configure("display");
const flexGrow = configure("flexGrow");
const flexDirection = configure("flexDirection");
const flexWrap = configure("flexWrap");
const justifyContent = configure("justifyContent");
const alignItems = configure("alignItems");

const flexFields = compose(
  display,
  flexGrow,
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems
);

const borderRadius = configure("borderRadius", "br", "radii");
const opacity = configure("opacity");

const gridTemplateColumns = configure("gridTemplateColumns");

export {
  generics,
  background,
  color,
  lineHeight,
  typography,
  fontWeight,
  fontSize,
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  padding,
  paddingTop,
  paddingLeft,
  paddingRight,
  animationFields,
  animationDuration,
  animationTimingFunction,
  animationDelay,
  animationFillMode,
  display,
  flexGrow,
  borderRadius,
  flexDirection,
  flexFields,
  width,
  height,
  paddingBottom,
  transitionFields,
  transitionDuration,
  transitionTimingFunction,
  transitionDelay,
  opacity,
  position,
  top,
  right,
  bottom,
  left,
  positionFields,
  backgroundImage,
  backgroundPosition,
  backgroundSize,
  backgroundPositionX,
  backgroundPositionY,
  minHeight,
  overflow,
  textAlign,
  gridTemplateColumns,
  flexWrap,
  justifyContent,
  alignItems
};
