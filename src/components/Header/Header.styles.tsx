import styled from "styled-components";
import { HexToRgb } from "@/helpers/string";
import { Button } from "@/components/Button/Button";
import { Container } from "@/components/Container/Container";
import { InputText } from "@/components/Form/InputText/InputText";

const HEIGHT = 56;

export const Header = styled.header`
  position: sticky;
  top: 0;
  height: ${HEIGHT}px;
  z-index: ${({ theme }) => theme.index.top};
  box-shadow: 0 0 10px 0px ${({ theme }) => theme.colors.base_90};
  backdrop-filter: blur(5px);
  background: rgba(
    ${({ theme }) => HexToRgb(theme.colors.base_90).toString()},
    0.85
  );
`;

export const Wrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spaces.xs};
`;

export const AddButton = styled(Button)`
  min-height: auto;
  height: ${({ theme }) => theme.spaces.md};
  width: ${({ theme }) => theme.spaces.md};
  padding: ${({ theme }) => theme.spaces.quarck};
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spaces.quarck};
`;

export const SearchInput = styled(InputText)<{ $searching?: boolean }>`
  max-width: 400px;
  transform: scaleX(1);
  transform-origin: right;

  ${({ $searching }) =>
    !$searching &&
    `
    width: 0;
    opacity: 0;
    visibility: hidden;
    transform: scaleX(0);
  `}
`;

export const SearchButton = styled(Button)``;
