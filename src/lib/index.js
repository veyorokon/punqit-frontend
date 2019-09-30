import styled from "styled-components";
import genericFields from "components";

function ThemedComponent(ComponentToLoad, fields = []) {
  return styled(ComponentToLoad)`
    ${fields}
    ${genericFields}
  `;
}

export {ThemedComponent};
