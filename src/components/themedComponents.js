/*
    Author: Vahid Eyorokon
*/

/*
    Imports
*/
import {Button as RButton, Heading as RHeading} from "rebass";
import {Text as CText, Box as CBox, Flex as CFlex} from "./core";
import {themedComponent} from "lib";
import styled from "styled-components";
import {borderRadius} from "styled-system";

const Video = themedComponent(styled.video``);
const Text = themedComponent(CText, ["overflow: hidden;"]);
const Box = themedComponent(CBox, [borderRadius]);
const Flex = themedComponent(CFlex);
const Button = themedComponent(RButton, ["cursor: pointer"]);
const Heading = themedComponent(RHeading);
const Input = themedComponent(styled.input``);

export {Text, Box, Flex, Button, Heading, Input, Video};
