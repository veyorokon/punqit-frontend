import React from "react";
import {
  Box,
  Flex,
  Text,
  Animate,
  Video,
  Hidden as CHidden,
  Button
} from "components";
import styled from "styled-components";
import {responsive as r} from "lib";

const heroBgMobile = "/images/hero-bg-mobile.jpeg";

const Section = styled(Flex)`
  transition: padding 0.3s ease-in-out;
  background-image: url(${heroBgMobile});
  background-size: cover;
  background-position: right;
`;

const Hidden = styled(CHidden)`
  transition: display 0.4s ease-in-out;
`;
const TitleContainer = styled(Flex)`
  max-width: fit-content;
  z-index: 10;
  transition: all 0.4s ease-in-out;
`;
const VideoContainer = styled(Box)`
  overflow: hidden;
  position: absolute;
  transition: top 0.4s ease-in-out;
`;
const Title = styled(Text)`
  height: 100%;
  transition: all 0.3s ease-in-out;
`;
const SubTitle = styled(Text)`
  line-height: 1;
  transition: all 0.3s ease-in-out;
`;
const CallToAction = styled(Button)`
  min-width: 12rem !important;
  color: black;
  background: white;
  border: 2px solid white !important;
  transition: all 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  &:hover {
    background: black;
    color: white;
  }
  &:focus {
    outline: none;
  }
`;

class Hero extends React.Component {
  render() {
    const videoOptions = {
      src: "/video-bg-trimmed.mp4",
      ref: videoRef => {
        this.videoRef = videoRef;
      }
    };
    return (
      <Section
        p={r("2 ------> 3")}
        overflow="hidden"
        width={"100vw"}
        height={"90rem"}
        backgroundImage={heroBgMobile}
      >
        <TitleContainer
          h={"40rem"}
          flexDirection={"column"}
          ml={r("auto ----> 5")}
          mr={r("auto ----> 0")}
          mt={r("3 4 -------> 5")}
        >
          <Animate duration={"1.5s"} width={"fit-content"} margin="auto">
            <Flex>
              <Title
                fs={r("7rem 8rem ---> 10rem --> 12rem 12.5rem")}
                fw={"400"}
                as="h1"
                color={"whites.0"}
              >
                punqit
              </Title>
              <Hidden bp={4} down>
                <Title
                  fs={r("7rem 8rem ---> 10rem --> 12rem 12.5rem")}
                  fw={"bold"}
                  color={"red"}
                >
                  .
                </Title>
              </Hidden>
            </Flex>
          </Animate>
          <Flex mt={4} mb={1} w={"fit-content"}>
            <Animate delay={"0.5s"}>
              <SubTitle
                lineHeight="1"
                as="p"
                color={"whites.0"}
                fs={r("2rem 2.2rem ---> 2.6rem --> 2.8rem 3.5rem")}
                fw={"300"}
              >
                Make deepfakes online
              </SubTitle>
            </Animate>
          </Flex>
          <Flex
            ml={r("auto ----> unset")}
            mr={r("auto ----> 0")}
            mt={r("6 ----> 4")}
            w={"fit-content"}
          >
            <Hidden bp={4} up>
              <Animate delay={"0.75s"}>
                <CallToAction color={"black"} bg={"whites.0"}>
                  <Text color={"inherit"} fs={"1.8rem"}>
                    Start
                  </Text>
                </CallToAction>
              </Animate>
            </Hidden>
            <Hidden bp={3} down>
              <Animate delay={"0.75s"}>
                <CallToAction
                  br={"5px"}
                  h="5rem"
                  color={"black"}
                  bg={"whites.0"}
                >
                  <Text color={"inherit"} fs={"2rem"}>
                    Get Started
                  </Text>
                </CallToAction>
              </Animate>
            </Hidden>
          </Flex>
        </TitleContainer>

        <Hidden down bp={5}>
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
              ml={r("0 ----> 15rem 4rem")}
              height={"auto"}
              {...videoOptions}
            />
          </VideoContainer>
        </Hidden>
      </Section>
    );
  }
}

export default Hero;
