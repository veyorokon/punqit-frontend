import React from "react";
import {SubTitle, Title, Flex, Box, ImageUploader} from "components";
import {responsive as r} from "lib";
import styled from "styled-components";

const EditorSection = styled(Flex)`
  background-size: 2rem 2rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(rgba(0, 0, 0, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.02) 1px, transparent 1px);
  background-position: -2px -2px, -2px -2px,  -1px -1px;
  background-size: 50px 50px, 50px 50px, 10px 10px, 10px 10px;
  background-color #e8e8e8;
`;

const TitleContainer = styled(Box)`
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  height: fit-content;
  width: 100%;
`;

export default class Editor extends React.Component {
  _handleImageChange(e) {
    e.preventDefault();
    try {
      let imageFile = e.target.files[0];
      let reader = new FileReader();
      reader.onloadend = () => {
        this.props.changeImage({
          imageFile: imageFile,
          imagePreviewUrl: reader.result
        });
      };
      reader.readAsDataURL(imageFile);
    } catch {}
  }

  render() {
    return (
      <EditorSection
        flexDirection="column"
        height="fit-content"
        p={r("unset ---> 2")}
      >
        <Flex
          mt={5}
          mb={5}
          p={r("1 --> 3 4")}
          justifyContent="center"
          w="100%"
          height={"35%"}
        >
          <TitleContainer
            br="2px"
            p={r("2 -> 3")}
            bg={"whites.0"}
            w={r("35rem ---> 38rem 40rem 45rem")}
          >
            <Title
              textAlign="center"
              ml="auto"
              mr="auto"
              w="auto"
              as="h3"
              fs={r("2.6rem")}
            >
              Deep fake editor
            </Title>
            <SubTitle fs={r("1.2rem -> 1.4rem")} m="auto" textAlign="center">
              punqit's deep fake editor lets you create a deep fake with just a
              source and target video.
            </SubTitle>
          </TitleContainer>
        </Flex>

        <Flex
          p={r("unset ---> 2")}
          pb={3}
          flexWrap="wrap"
          justifyContent="space-evenly"
          maxHeight="fit-content"
          alignItems="center"
          w="100%"
          h="100vh"
        >
          <ImageUploader
            mb={"4rem !important"}
            height={r("45rem")}
            maxWidth={r("45rem")}
            flexDirection={"column"}
            alignItems={"center"}
            p={3}
            justifyContent="space-evenly"
            margin={r("1 2 3 ---> 4")}
            changeImage={null}
            handleImageChange={(e, val) => this._handleImageChange(e, val)}
            isImageLoading={null}
          />
          <ImageUploader
            mb={"4rem !important"}
            height={r("45rem")}
            maxWidth={r("45rem")}
            flexDirection={"column"}
            alignItems={"center"}
            p={3}
            justifyContent="space-evenly"
            margin={r("1 2 3 ---> 4")}
            changeImage={null}
            handleImageChange={(e, val) => this._handleImageChange(e, val)}
            isImageLoading={null}
          />
        </Flex>
      </EditorSection>
    );
  }
}
