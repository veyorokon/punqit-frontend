import styled from "styled-components";
import {configure} from "theme";

const flexDirection = configure("flexDirection", [], "space");

const Box = styled.div`
  max-height: fit-content;
  display: block;
`;

const Flex = styled(Box)`
  display: flex;
  flex-grow: 1;
  ${flexDirection}
`;

const Text = styled(Box)``;

export {Flex, Text, Box};
