import * as Styled from "./Container.styles";

export interface IContainer {
  children?: React.ReactNode;
}

export const Container: React.FC<IContainer> = ({
  children,
  ...rest
}) => (
  <Styled.Container data-testid="container" {...rest}>
    {children}
  </Styled.Container>
);
