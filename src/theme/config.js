import {system} from "styled-system";

function configure(prop, shortName = [], scale = null) {
  let config = {[prop]: {property: prop}};
  if (scale) {
    config = {[prop]: {property: prop, scale: scale}};
  }
  if (shortName && shortName.constructor === Array) {
    shortName.forEach(function(value) {
      config[value] = config[prop];
    });
  } else if (shortName && shortName.constructor === String) {
    config[shortName] = config[prop];
  }
  return system(config);
}

const fontWeight = configure("fontWeight", "fw", "fontWeights");
const fontSize = configure("fontSize", "fs", "fontSizes");

export default configure;
export {fontWeight, fontSize};
