import styled from "styled-components";
import {Text} from "components/core";
import {appear} from "components/core/animation";

import React from "react";

/*
==============================================
                 Title & Subtitle
*/
const AnimatedText = styled(Text)`
  animation-name: ${appear};
  animation-duration: 0.6s;
  -webkit-animation-duration: 400ms;
  animation-duration: 400ms;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transition: all 0.3s ease-in-out;
`;

const SubTitleWrapper = styled(AnimatedText)`
  letter-spacing: 1px;
  animation-delay: 0.1s;
  line-height: calc(2.8rem + (8 * (100vw - 48rem) / 672));
`;
const TitleWrapper = styled(AnimatedText)`
  padding-bottom: 1.5rem;
  animation-delay: 0.1s;
  letter-spacing: -0.75px;
  line-height: calc(3rem + (50 * (100vw - 22.5rem) / 1080));
`;

const SubTitle = props => (
  <SubTitleWrapper
    fontSize={
      props.fontSize
        ? props.fontSize
        : props.fs
        ? props.fs
        : ["1.5rem", "1.5rem", "1.5rem", "1.5rem", "2rem", "2rem", "2rem"]
    }
    {...props}
  >
    {props.children}
  </SubTitleWrapper>
);

const Title = props => (
  <TitleWrapper
    fontSize={
      props.fontSize
        ? props.fontSize
        : props.fs
        ? props.fs
        : ["3rem", "3.6rem", "4rem", "4rem", "4.2rem", "4.4rem", "4.4rem"]
    }
    lineHeight={
      props.lineHeight ? props.lineHeight : ["3.6rem", "4.6rem", "5.8rem"]
    }
    fontWeight={props.fontWeight ? props.fontWeight : ["400", "400", "500"]}
    {...props}
  >
    {props.children}
  </TitleWrapper>
);

const Header = styled(Text)`
  font-family: -apple-system, BlinkMacSystemFont !important;
`;
export default Header;

export {SubTitle, Title};
