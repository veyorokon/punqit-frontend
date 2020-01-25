/*
    Author: Vahid Eyorokon
*/

/*
    Imports
*/

import React from "react";
import {Text} from "components/core";
import {ImageUploader} from "components/compound";
import {
  OptionMenu,
  Label,
  OptionLabel,
  Switch,
  ViewContainer
} from "components/styled";
import {Canvas, ExportButton} from "components/connected";
import {UploadIcon} from "components/icons";
import {connect} from "react-redux";
import {
  changeImage,
  toggleBoundingBoxes,
  toggleScaling,
  setSelectedObject,
  useDemoImage
} from "redux/actions";

const mapStateToProps = state => {
  const {
    imageFile,
    imagePreviewUrl,
    isScaling,
    isImageLoading,
    imageWidth,
    imageHeight,
    canvasObjects,
    boundingBoxes,
    isShowingBoundingBoxes
  } = state;
  return {
    imageFile,
    imagePreviewUrl,
    isScaling,
    isImageLoading,
    imageWidth,
    imageHeight,
    canvasObjects,
    boundingBoxes,
    isShowingBoundingBoxes
  };
};

function mapDispatchToProps(dispatch) {
  return {
    changeImage: image => dispatch(changeImage(image)),
    toggleScaling: scaling => dispatch(toggleScaling(scaling)),
    setSelectedObject: selected => dispatch(setSelectedObject(selected)),
    toggleBoundingBoxes: boundingBoxes =>
      dispatch(toggleBoundingBoxes(boundingBoxes)),
    useDemoImage: img => dispatch(useDemoImage(img))
  };
}

class ConnectedView extends React.Component {
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

  updateCursor = cursor => {
    document.body.style.cursor = cursor;
  };

  handleClick = e => {
    const {setSelectedObject} = this.props;
    if (!(e.target instanceof HTMLCanvasElement)) {
      setSelectedObject(null);
    }
  };

  render() {
    const {
      imagePreviewUrl,
      isScaling,
      isImageLoading,
      isShowingBoundingBoxes,
      toggleBoundingBoxes,
      useDemoImage
    } = this.props;
    return (
      <ViewContainer
        onClick={this.handleClick}
        ref={e => (this.viewContainer = e)}
        flexDirection={"column"}
        height={"100vh"}
        width={"100%"}
        onMouseLeave={() => this.updateCursor("default")}
        onMouseEnter={() => this.updateCursor("all-scroll")}
      >
        <OptionMenu
          justifyContent={"space-around"}
          width={"50rem"}
          height={"6rem"}
        >
          <form>
            <input
              disabled={isImageLoading ? true : false}
              onChange={e => this._handleImageChange(e)}
              id="file-input2"
              type="file"
              style={{display: "none"}}
            />

            <Label
              fontSize={"1.2rem"}
              width={"13rem"}
              height={"3.6rem"}
              htmlFor="file-input2"
              background={isImageLoading ? "grey" : "oranges.0"}
              disabled={isImageLoading}
            >
              <UploadIcon left="20%" position="absolute" height={"2rem"} />
              <Text ml="20%">Upload</Text>
            </Label>
          </form>
          <ExportButton />

          {/*<OptionLabel>Enable Scaling</OptionLabel>
          <Switch
            disabled={!imagePreviewUrl || isImageLoading}
            onChange={() => toggleScaling()}
            id="toggle"
            color={"primary"}
          />*/}

          <OptionLabel>Bounding Boxes</OptionLabel>
          <Switch
            checked={isShowingBoundingBoxes}
            disabled={!imagePreviewUrl || isImageLoading}
            onChange={() => toggleBoundingBoxes()}
            id="toggle"
            color={"primary"}
          />
        </OptionMenu>

        {imagePreviewUrl ? (
          <Canvas
            ref={ref => (this.canvas = ref)}
            isScaling={isScaling}
            imagePreviewUrl={imagePreviewUrl}
          />
        ) : (
          <ImageUploader
            changeImage={useDemoImage}
            handleImageChange={(e, val) => this._handleImageChange(e, val)}
            isImageLoading={isImageLoading}
          />
        )}
      </ViewContainer>
    );
  }
}

const View = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedView);

export default View;
