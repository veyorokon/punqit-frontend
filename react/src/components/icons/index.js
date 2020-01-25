import styled from "styled-components";
import {background, height, margin, color} from "styled-system";
import {Upload} from "styled-icons/boxicons-regular/Upload";
import {Download} from "styled-icons/boxicons-regular/Download";
import {Upload as MainUpload} from "styled-icons/icomoon/Upload";
import {position, left} from "styled-system";
const UploadIcon = styled(Upload)`
  ${height}
  ${background}
  width: auto;
  margin-right: 7px;
  display: inline-block;
  color: white;
  top: 50%;
  transform: translateY(-50%);
  ${left}
  ${position}
`;
const DowloadIcon = styled(Download)`
  ${height}
  ${background}
  width: auto;
  margin-right: 7px;
  display: inline-block;
  color: white;
`;

const UploadCloudIcon = styled(MainUpload)`
  width: auto;
  ${background}
  display: inline-block;
  ${height}
  ${color}
  ${margin}
`;

export {UploadIcon, DowloadIcon, UploadCloudIcon};
