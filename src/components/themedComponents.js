/*
    Author: Vahid Eyorokon
*/

/*
    Imports
*/
import {
  Text as RText,
  Box as RBox,
  Flex as RFlex,
  Button as RButton,
  Heading as RHeading
} from "rebass";
import {themedComponent} from "lib";
import styled from "styled-components";
import {borderRadius} from "styled-system";

const Text = themedComponent(RText, ["overflow: hidden;"]);
const Box = themedComponent(RBox, [borderRadius]);
const Flex = themedComponent(RFlex);
const Button = themedComponent(RButton);
const Heading = themedComponent(RHeading);
const Input = themedComponent(styled.input``);

export {Text, Box, Flex, Button, Heading, Input};
