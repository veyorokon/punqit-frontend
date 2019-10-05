import styled from "styled-components";
import {layout, typography, margin, padding, space, color} from "styled-system";
import {css} from "styled-components";
import {fontWeight, fontSize} from "theme";

const genericFields = css`
  ${(layout, typography, margin, padding, space, color)}
  ${(fontWeight, fontSize)}
`;

function themedComponent(ComponentToLoad, fields = []) {
  return styled(ComponentToLoad)`
    ${fields}
    ${genericFields}
  `;
}

function formatValues(values) {
  let fmt;
  fmt = values.replace(/x-/g, "x -");
  fmt = fmt.replace(/m-/g, "m -");
  fmt = fmt.replace(/l-/g, "l -");
  fmt = fmt.split(">").join(" ");

  if (fmt[0] === "-") {
    fmt = fmt.replace("-", "initial ");
  }
  fmt = fmt.split(" ");

  fmt = fmt.filter(elem => elem !== "");
  return fmt;
}

function responsive(values) {
  let fmt = formatValues(values);
  let output = [];
  let lastElem = fmt[0];

  fmt.forEach(function(value) {
    if (value.includes("-")) {
      for (var i = 0; i < value.length; i++) {
        if (value[i] === "-") {
          output.push(lastElem);
        }
      }
    } else {
      if (+value) {
        output.push(+value);
        lastElem = +value;
      } else {
        output.push(value);
        lastElem = value;
      }
    }
  });
  return output;
}

export {themedComponent, responsive};
