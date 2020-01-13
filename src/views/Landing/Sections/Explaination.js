import React from "react";
import styled from "styled-components";
import {Box, Section, SubTitle, Title, Flex, Text} from "components";
import {responsive as r} from "lib";
import ResponsiveEmbed from "react-responsive-embed";

const Container = styled(Box)`
  background-image: radial-gradient(#d6ddff 5%, transparent 0);
  background-size: 35px 35px;
`;

const CardBox = styled(Box)`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: flex;
  flex-direction: column;
  overflow: auto;
  position: relative;
  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22);
  }
`;

const TitleContainer = styled(Box)`
  transition: margin 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

const ExplainationSection = styled(Section)`
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const Card = props => {
  return (
    <CardBox
      alignSelf="center"
      maxWidth={[
        "calc(26.5rem + ((136 * (100vw - 360px)) / 1079))",
        "calc(39.5rem + ((136 * (100vw - 360px)) / 1079))",
        "calc(21.5rem + ((136 * (100vw - 360px)) / 1079))",
        "calc(21.5rem + ((136 * (100vw - 360px)) / 1079))",
        "calc(19.5rem + ((136 * (100vw - 360px)) / 1079))"
      ]}
      br="2px"
      bg={"whites.0"}
      h={r("33rem -> 40rem 43rem")}
      minHeight="fit-content"
      minWidth={r("100% --> 45rem --> 45rem -> 40rem 32rem")}
      ml={r("unset ---> 2% --> 3%")}
      mr={r("unset ---> 2% --> 3%")}
      mb={r("5 ---> 6")}
      padding={2}
      {...props}
    >
      {props.children}
    </CardBox>
  );
};

export default () => {
  return (
    <ExplainationSection
      bg={"whites.1"}
      height="fit-content"
      minHeight={r("70rem 85rem -> 90rem")}
      p={r("unset ---> 2")}
      overflow="scroll"
    >
      <Container p={r("unset ---> 2")} w="100%" h="100%">
        <Box mt={3} w="100%">
          <TitleContainer
            p={r("2 --> 3")}
            mt={r("4 ----> 6")}
            mb={r("4 -> 5 -> 6")}
          >
            <Title
              textAlign="center"
              m="auto"
              marginBottom={r("3 ----> 4")}
              w="auto"
              as="h2"
              fs={r("3rem ----> 6rem ---> 7rem")}
            >
              What are deep fakes?
            </Title>
            <SubTitle
              textAlign="center"
              m="auto"
              as="p"
              fs={r("1.4rem ---> 1.6rem -> 1.8rem 2rem")}
            >
              Deep fakes are videos where the subject's face is extracted and
              then inserted in a target video. Punqit lets you create deep fakes
              online with just a source and a target video.
            </SubTitle>
          </TitleContainer>
          <Flex flexWrap="wrap" justifyContent="space-evenly">
            <Card width={"42.6rem"} overflow="hidden">
              <Text
                fs={r("1.2rem --> 1.4rem -> 1.8rem")}
                m="auto"
                mt={1}
                mb={1}
                textAlign="center"
              >
                Step 1<br />
                <span style={{color: "grey"}}>Upload source</span>
              </Text>
              <ResponsiveEmbed
                ratio="16:9"
                src="https://www.youtube.com/embed/TZA7lItH8GQ?start=13"
              />
              <Flex p={2} mt={2} maxHeight="unset" height="100%" bg="greys.1">
                <Text fs={r("1.4rem -> 1.6rem")} m="auto" textAlign="center">
                  When creating deep fakes, the <b>source</b> video contains the
                  person whose face you want to <i>extract</i>.
                </Text>
              </Flex>
            </Card>

            <Card width={"42.6rem"} overflow="hidden">
              <Text
                fs={r("1.2rem --> 1.4rem -> 1.8rem")}
                m="auto"
                mt={1}
                mb={1}
                textAlign="center"
              >
                Step 2<br />
                <span style={{color: "grey"}}>Upload target</span>
              </Text>
              <ResponsiveEmbed
                autoplay
                ratio="16:9"
                src="https://www.youtube.com/embed/ZXsQAXx_ao0?start=10&autoplay=1"
              />
              <Flex p={2} mt={2} maxHeight="unset" height="100%" bg="greys.1">
                <Text fs={r("1.4rem -> 1.6rem")} m="auto" textAlign="center">
                  A deep fake <b>target</b> video contains the person whose face
                  you want to <i>replace</i>.
                </Text>
              </Flex>
            </Card>

            <Card width={"42.6rem"} overflow="hidden">
              <Text
                fs={r("1.2rem --> 1.4rem -> 1.8rem")}
                m="auto"
                mt={1}
                mb={1}
                textAlign="center"
              >
                Step 3<br />
                <span style={{color: "grey"}}>Create a deep fake</span>
              </Text>
              <ResponsiveEmbed ratio="16:9" src="/video/face-swapped-3.mp4" />
              <Flex p={2} mt={2} maxHeight="unset" height="100%" bg="greys.1">
                <Text fs={r("1.4rem -> 1.6rem")} m="auto" textAlign="center">
                  The resulting video you create <b>deep fakes</b> the source
                  person's face into the target person's face.
                </Text>
              </Flex>
            </Card>
          </Flex>
        </Box>
      </Container>
    </ExplainationSection>
  );
};
