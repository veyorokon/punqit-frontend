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
export const overflow = configure("overflow", ["overflow"]);

export const top = configure("top", ["top"], "space");
export const bottom = configure("bottom", ["bottom"], "space");
export const left = configure("left", ["left"], "space");
export const right = configure("right", ["right"], "space");

export const width = configure("width", ["w", "width"], "space");
export const height = configure("height", ["h", "height"], "space");

export const background = configure(
  "background",
  ["bg", "background"],
  "colors"
);
export const color = configure("color", "color", "colors");

export const fontWeight = configure("fontWeight", "fw", "fontWeights");
export const fontSize = configure("fontSize", "fs", "fontSizes");
export const typography = compose(
  fontWeight,
  fontSize
);

export const margin = configure("margin", ["margin", "m"], "space");
export const marginTop = configure("marginTop", ["marginTop", "mt"], "space");
export const marginBottom = configure(
  "marginBottom",
  ["marginBottom", "mb"],
  "space"
);
export const marginLeft = configure(
  "marginLeft",
  ["marginLeft", "ml"],
  "space"
);
export const marginRight = configure(
  "marginRight",
  ["marginRight", "mr"],
  "space"
);
export const marginFields = compose(
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight
);

export const padding = configure("padding", ["padding", "p"], "space");
export const paddingTop = configure(
  "paddingTop",
  ["paddingTop", "pt"],
  "space"
);
export const paddingBottom = configure(
  "paddingBottom",
  ["paddingBottom", "pb"],
  "space"
);
export const paddingLeft = configure(
  "paddingLeft",
  ["paddingLeft", "pl"],
  "space"
);
export const paddingRight = configure(
  "paddingRight",
  ["paddingRight", "pr"],
  "space"
);
export const paddingFields = compose(
  padding,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight
);

export const flexDirection = configure("flexDirection");
export const alignItems = configure("alignItems");
export const justifyContent = configure("justifyContent");
export const flexFields = compose(
  flexDirection,
  alignItems,
  justifyContent
);

export const generics = compose(
  typography,
  marginFields,
  paddingFields,
  background,
  color,
  width,
  height,
  overflow,
  top,
  bottom,
  left,
  right
);
