import React from "react";
import {Text as RText} from "rebass";
import {fontWeight} from "theme";
import {ThemedComponent} from "lib";

const Text = ThemedComponent(RText, [fontWeight]);

class Landing extends React.Component {
  render() {
    return (
      <Text fw="bold" color={"white.0"} bg={"black.0"}>
        test
      </Text>
    );
  }
}

export default Landing;
