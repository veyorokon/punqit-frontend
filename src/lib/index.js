import styled from "styled-components";
import {layout, typography, margin, padding, space, color} from "styled-system";
import {css} from "styled-components";
import {fontWeight} from "theme";

const genericFields = css`
  ${(layout, typography, margin, padding, space, color)}
  ${fontWeight}
`;

function ThemedComponent(ComponentToLoad, fields = []) {
  return styled(ComponentToLoad)`
    ${fields}
    ${genericFields}
  `;
}

export {ThemedComponent};
