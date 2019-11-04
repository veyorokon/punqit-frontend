import styled from "styled-components";
import {Box} from "rebass";
import {compose} from "styled-system";
import configure from "theme/config";

const animationDuration = configure("animationDuration", "duration");
const animationTimingFunction = configure("animationTimingFunction", "timing");

const animationFields = compose(
  animationDuration,
  animationTimingFunction
);

const Animate = styled(Box)`
  animation-name: ${props => props.animation};
  ${animationFields};
`;

export {Animate};
