import styled from "styled-components";
import { GridSizes } from "@/theme/mixins/Grid";
import * as Grids from "@/theme/mixins/Grid";

export const Container = styled.div<{ grid?: GridSizes }>`
  ${({ grid }) => Grids[grid ?? "grid1440"]()}
`;
