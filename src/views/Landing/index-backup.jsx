import React from "react";
import {Flex, ImageBox, Animate, Text} from "components";
import styled from "styled-components";
import {responsive as r} from "lib";

// const heroBgMobile = "/images/hero-bg-mobile.jpeg";
const heroBgMobile = "/images/hero-black-2.jpg";
const MobileImage = `url(${heroBgMobile})`;

const Section = styled(Flex)`
  transition: height 0.1s ease-in-out;
  background-size: cover;
  background-position: right;
`;
const Title = styled(Text)`
  align-self: flex-end;
`;

class Hero extends React.Component {
  render() {
    return (
      <Section
        overflow="hidden"
        width={"100vw"}
        height={r("75vh -> 85vh")}
        bg={"blacks"}
      >
        <Animate>
          <ImageBox
            flexDirection="column"
            p={r("2 ------> 3")}
            backgroundImage={[MobileImage]}
            justifyContent={["center", "center", "center", "flex-start"]}
            backgroundSize={r("90rem -------> 100rem 120rem")}
            backgroundPosition={"left"}
            backgroundPositionY={r("20rem ------> center")}
            backgroundPositionX={[
              "-46rem",
              "-46rem",
              "-46rem",
              "-46rem",
              "-46rem",
              "-46rem",
              "-46rem",
              "-38rem",
              "-44rem"
            ]}
          >
            <Title
              fs={r("7rem 8rem ---> 10rem --> 12rem 12.5rem")}
              fw={"400"}
              as="h1"
              color={"whites.0"}
              m={"auto 5rem"}
            >
              punqit
            </Title>
          </ImageBox>
        </Animate>
      </Section>
    );
  }
}

export default Hero;
