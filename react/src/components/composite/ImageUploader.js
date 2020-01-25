/*
    Author: Vahid Eyorokon
*/

/*
    Imports
*/

import React from "react";
import {Text} from "components/core";
import {UploadCloudIcon, UploadIcon} from "components/icons";
import {GetImageBox, Header, Label} from "components/styled";
class ImageUploader extends React.Component {
  render() {
    const {isImageLoading} = this.props;
    return (
      <GetImageBox {...this.props}>
        <UploadCloudIcon height={100} />
        <Header textAlign="center" fontWeight={400} fontSize={"2.4rem"}>
          Upload an image to annotate
        </Header>
        <Text textAlign="center" mt={4}>
          Choose an image from your computer to get started.
        </Text>
        <form>
          <input
            onChange={e => this.props.handleImageChange(e)}
            id="file-input"
            type="file"
            style={{display: "none"}}
            disabled={isImageLoading ? true : false}
          />

          <Label
            background={isImageLoading ? "grey" : "oranges.0"}
            width={"18rem"}
            height={"5rem"}
            pl="1rem"
            htmlFor="file-input"
            disabled={isImageLoading}
          >
            <UploadIcon left="20%" position="absolute" height={"2.5rem"} />
            <Text color={"whites.0"} fw="500" marginLeft="15%">
              Upload
            </Text>
          </Label>
        </form>
      </GetImageBox>
    );
  }
}

export default ImageUploader;
