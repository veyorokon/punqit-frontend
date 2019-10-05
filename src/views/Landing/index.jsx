import React from "react";
import {Text} from "components";
import {responsive} from "lib";

console.log(responsive("30rem-> 60rem->"));
class Landing extends React.Component {
  render() {
    return (
      <Text
        fs={responsive("30px-> 60rem->")}
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
