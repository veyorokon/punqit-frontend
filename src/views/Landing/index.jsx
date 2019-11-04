import React from "react";
import {Text, Animate} from "components";
import {responsive as r} from "lib";
import {keyframes} from "styled-components";

const appear = keyframes`
  from {
    opacity: 0; }
  to {
    opacity: 1; }
`;

class Landing extends React.Component {
  render() {
    return (
      <Text fs={r("30px --> 30rem")} fw="bold" color={"white.0"} bg={"black.0"}>
        <Animate animation={appear} duration={".5s"} function={"ease-in-out"}>
          test
        </Animate>
      </Text>
    );
  }
}

export default Landing;
