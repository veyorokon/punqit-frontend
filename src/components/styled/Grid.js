import styled from "styled-components";
import {gridTemplateColumns} from "theme";
import {Grid as SGrid} from "styled-grid-component";

const Grid = styled(SGrid)`
  position: relative;
  ${gridTemplateColumns}
  grid-column-gap: calc(1rem + ((64 * (100vw - 768px)) / 671));
  grid-row-gap: calc(1rem + ((64 * (100vw - 768px)) / 671));
  justify-items: center;

  align-items: center;
  grid-row-gap: 9.5rem;
`;
export default Grid;
