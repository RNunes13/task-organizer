import type { GridSizes } from "@/theme/mixins/Grid";
import * as Styled from "./Container.styles";

export interface ContainerProps {
  children?: React.ReactNode;
  grid?: GridSizes;
}

export const Container: React.FC<ContainerProps> = ({ children, ...rest }) => (
  <Styled.Container data-testid="container" {...rest}>
    {children}
  </Styled.Container>
);

Container.defaultProps = {
  grid: "grid1440",
};
