import styled from "styled-components";
import {flexFields} from "theme";
import {themedComponent} from "lib";

const Box = themedComponent(styled.div``);
Box.defaultProps = {
  maxHeight: "fit-content"
};

export {Box};

export const Flex = themedComponent(styled.div`
  display: flex;
  flex-grow: 1;
  ${flexFields}
`);

export const Text = themedComponent(styled.p``);
