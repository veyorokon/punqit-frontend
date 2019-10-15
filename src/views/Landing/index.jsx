import React from "react";
import {Text} from "components";
import {responsive as r} from "lib";

//ADD PERCENTAGES TO 'responsive'

class Landing extends React.Component {
  render() {
    return (
      <Text fs={r("30px --> 30rem")} fw="bold" color={"white.0"} bg={"black.0"}>
        test
      </Text>
    );
  }
}

export default Landing;
