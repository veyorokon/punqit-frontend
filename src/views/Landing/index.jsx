import React from "react";
import {Text} from "components";
import {responsive as r} from "lib";

console.log(r("- 6 -> 30px --> 60rem ->"));
class Landing extends React.Component {
  render() {
    return (
      <Text
        fs={r("- 6 -> 30px --> 60rem ->")}
        fw="bold"
        color={"white.0"}
        bg={"black.0"}
      >
        test
      </Text>
    );
  }
}

export default Landing;
