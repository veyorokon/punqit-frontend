import styled from "styled-components";
import {height, fontSize, width, margin, space} from "styled-system";
import configure from "theme/config";
const background = configure("background", "bg", "colors");

const Label = styled.label`
  justify-content: center;
  display: flex !important;
  color: white;
  ${background};
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.17);
  backface-visibility: hidden;
  text-transform: uppercase;
  font-weight: bold;
  ${fontSize}
  ${height}
  ${width}
  border-radius: 2px;
  align-items: center;
  transition: all 0.2s;
  ${margin}
  ${space}
  position: relative;

&:focus {
    outline: none;
  }
  &:active {
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.19);
    filter: brightness(0.97);
  }
  &:hover {
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.17);
    cursor: ${props => (props.disabled ? "wait" : "pointer")}
  }
`;

export default Label;
