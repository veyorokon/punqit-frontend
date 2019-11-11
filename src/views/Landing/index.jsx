import React from "react";
import {Box, Flex, Text} from "components";
import styled from "styled-components";

const TitleContainer = styled(Flex)`
  flex-grow: 1;
`;
const VideoContainer = styled(Box)`
  overflow: hidden;
  margin: auto 0 40rem 4rem !important;
`;
const Video = styled.video``;

class Landing extends React.Component {
  render() {
    const videoOptions = {
      src: "video-bg-5.mp4",
      ref: videoRef => {
        this.videoRef = videoRef;
      }
    };
    return (
      <Flex bg={"blacks.0"} width={"100vw"} height={"100vh"}>
        <TitleContainer>
          <Text color={"whites.0"}>punq</Text>
        </TitleContainer>
        <VideoContainer width={"110rem"} height={"60rem"} bg="blacks.0">
          <Video
            playsInline
            autoPlay
            no-controls
            loop
            muted
            type="video/mp4"
            style={{
              width: "120rem",
              marginLeft: "4rem",
              height: "auto",
              outline: "none"
            }}
            {...videoOptions}
          />
        </VideoContainer>
      </Flex>
    );
  }
}

export default Landing;
