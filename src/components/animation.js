/*
    Author: Vahid Eyorokon
*/

/*
    Imports
*/
import styled from "styled-components";
import {compose} from "styled-system";
import configure from "theme/config";
import {keyframes} from "styled-components";
import {themedComponent} from "lib";

/*
    Globals & Constants
*/
const animationDuration = configure("animationDuration", "duration");
const animationTimingFunction = configure("animationTimingFunction", "timing");
const animationDelay = configure("animationDelay", "delay");
const animationFillMode = configure("animationFillMode", "fillMode");
const animationIterationCount = configure(
  "animationIterationCount",
  "iterations"
);

const animationFields = compose(
  animationDuration,
  animationTimingFunction,
  animationDelay,
  animationFillMode,
  animationIterationCount
);

/*
    Keyframes
*/
const appear = keyframes`
  from {
    opacity: 0; }
  to {
    opacity: 1; }
`;

const Animate = styled.span`
  animation-name: ${props => props.animation};
  ${animationFields};
`;

Animate.defaultProps = {
  fillMode: "both"
};

export default themedComponent(Animate);
export {appear};
