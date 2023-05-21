import * as Styled from "./Container.styles";

export interface ContainerProps {
  children?: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  ...rest
}) => (
  <Styled.Container data-testid="container" {...rest}>
    {children}
  </Styled.Container>
);
