/*
    Author: Vahid Eyorokon
*/

/*
    Imports
*/
import {borderRadius, themedComponent, flexFields} from "theme";
import styled from "styled-components";

const Box = themedComponent(
  styled.div`
    ${borderRadius}
  `
);
Box.defaultProps = {};

const Button = themedComponent(
  styled.button`
    ${borderRadius}
  `
);

const Flex = themedComponent(
  styled.div`
    ${flexFields}
    ${borderRadius}
  `
);
Flex.defaultProps = {
  display: "flex",
  flexGrow: 1,
  minHeight: "fit-content"
};

const Input = themedComponent(
  styled.input`
    outline: none;
  `
);
Input.defaultProps = {
  border: "1px solid lightslategrey",
  padding: "1rem",
  fontSize: "1.6rem",
  lineHeight: "1",
  borderRadius: "4px"
};

const Text = themedComponent(styled.p`
  margin: ${props => (props.p ? "1rem" : props.h1 ? "2rem" : "initial")};
`);

Text.defaultProps = {
  minHeight: "fit-content",
  width: "fit-content",
  overflow: "hidden"
};

const Video = themedComponent(
  styled.video`
    ${borderRadius}
  `
);

export {Text, Box, Button, Flex, Input, Video};
