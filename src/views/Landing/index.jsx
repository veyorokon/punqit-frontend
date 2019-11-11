import React from "react";
import {Box, Flex, Text, Animate} from "components";
import styled, {keyframes} from "styled-components";

const appear = keyframes`
  0% {
    opacity: 0; }
  3% {
    opacity: 0; }
  7% {
    opacity: 1; }
  90% {
    opacity: 1;
  }
  99% {
    opacity: 0;
  }
  100%{
    opacity: 0;
  }
`;

const TitleContainer = styled(Flex)`
  flex-grow: 1;
  z-index: 10;
`;
const VideoContainer = styled(Box)`
  overflow: hidden;
  margin: auto 5rem 30rem 4rem !important;
  position: absolute;
  right: 0;
  bottom: 0;
`;
const Video = styled.video``;
const Title = styled(Text)`
  height: fit-content;
`;
const SubTitle = styled(Text)`
  line-height: 1;
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
      <Flex bg={"blacks.0"} width={"100vw"} height={"90rem"}>
        <TitleContainer flexDirection={"column"} mt={6} ml={6} mb={"auto"}>
          <Flex>
            <Title fs={"12rem"} fw={"400"} as="h1" color={"whites.0"}>
              punqit
            </Title>
            <Text fs={"12rem"} fw={"bold"} color={"red"}>
              .
            </Text>
          </Flex>
          <Flex mt={5} w={"fit-content"}>
            <SubTitle
              lineHeight="1"
              as="p"
              color={"whites.0"}
              fs={"3rem"}
              fw={"300"}
            >
              Deepfakes for the web.
            </SubTitle>
          </Flex>
        </TitleContainer>
        <VideoContainer width={"110rem"} height={"60rem"} bg="blacks.0">
          <Animate
            animation={appear}
            duration={"29s"}
            function={"ease-in-out"}
            iterations={"infinite"}
          >
            <Video
              playsInline
              autoPlay
              no-controls
              loop
              muted
              type="video/mp4"
              style={{
                width: "130rem",
                marginLeft: "4rem",
                marginTop: "3rem",
                height: "auto",
                outline: "none",
                filter: "brightness(1.1)"
              }}
              {...videoOptions}
            />
          </Animate>
        </VideoContainer>
      </Flex>
    );
  }
}

export default Landing;
