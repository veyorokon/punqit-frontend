import React from "react";
import {Box, Flex, Text, Animate, Video, Hidden, Button} from "components";
import styled, {keyframes} from "styled-components";
import {responsive as r} from "lib";

const appear = keyframes`
0%{
  opacity: 0;
}
100%{
  opacity: 1;
}
`;
const videoAnimation = keyframes`
  0% {
    opacity: 0; }
  3% {
    opacity: 0; }
  7% {
    opacity: 1;
   }
   15%{
     filter: brightness(1);
   }
   20%{
     filter: brightness(1.2);
   }
  90% {
    opacity: 1;
    filter: brightness(1.2);
  }
  99% {
    opacity: 0;
  }
  100%{
    opacity: 0;
    filter: brightness(1);
  }
`;

const TitleContainer = styled(Flex)`
  flex-grow: 1;
  z-index: 10;
  transition: all 0.4s ease-in-out;
`;
const VideoContainer = styled(Box)`
  overflow: hidden;
  position: absolute;
  transition: top 0.4s ease-in-out;
`;
const Title = styled(Text)`
  height: fit-content;
`;
const SubTitle = styled(Text)`
  line-height: 1;
`;
const CallToAction = styled(Button)`
  color: black;
  background: white;
  border: 2px solid white !important;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: black;
    color: white;
  }
  &:focus {
    outline: none;
  }
`;

class Landing extends React.Component {
  render() {
    const videoOptions = {
      src: "video-bg-trimmed.mp4",
      ref: videoRef => {
        this.videoRef = videoRef;
      }
    };
    return (
      <Flex overflow="hidden" bg={"blacks.0"} width={"100vw"} height={"90rem"}>
        <TitleContainer
          flexDirection={"column"}
          ml={r("4 ---> 5 --> 6")}
          mt={r("4 --------> 5")}
        >
          <Animate
            animation={appear}
            duration={"1.5s"}
            function={"ease-in-out"}
            width={"fit-content"}
          >
            <Flex>
              <Title fs={"12rem"} fw={"400"} as="h1" color={"whites.0"}>
                punqit
              </Title>
              <Text fs={"12rem"} fw={"bold"} color={"red"}>
                .
              </Text>
            </Flex>
          </Animate>
          <Flex mt={4} mb={1} w={"fit-content"}>
            <Animate
              delay={"0.5s"}
              animation={appear}
              duration={"1.5s"}
              function={"ease-in-out"}
            >
              <SubTitle
                lineHeight="1"
                as="p"
                color={"whites.0"}
                fs={"3rem"}
                fw={"300"}
              >
                Make deepfakes online.
              </SubTitle>
            </Animate>
          </Flex>
          <Flex mt={4} w={"fit-content"}>
            <Animate
              delay={"0.75s"}
              animation={appear}
              duration={"1.5s"}
              function={"ease-in-out"}
            >
              <CallToAction color={"black"} bg={"whites.0"}>
                <Text color={"inherit"} fs={"2rem"}>
                  Get Started
                </Text>
              </CallToAction>
            </Animate>
          </Flex>
        </TitleContainer>
        <Animate
          animation={videoAnimation}
          duration={"29.25s"}
          function={"ease-in-out"}
          iterations={"infinite"}
        >
          <Hidden down bp={6}>
            <VideoContainer
              right="0"
              top={r("30% -------> 20%")}
              mt={"auto"}
              w={"110rem"}
              h={"60rem"}
              bg="blacks.0"
            >
              <Video
                playsInline
                autoPlay
                no-controls
                loop
                muted
                type="video/mp4"
                width={"130rem"}
                ml={"4rem"}
                height={"auto"}
                {...videoOptions}
              />
            </VideoContainer>
          </Hidden>
        </Animate>
      </Flex>
    );
  }
}

export default Landing;
