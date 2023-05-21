import styled from "styled-components";
import { Button } from "@/components/Button/Button";
import { bodyMediumRegular } from "@/theme/mixins/Typography";
import type { StyledInputProps } from "./InputText.interfaces";

export const Wrap = styled.div<{ $focused: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spaces.quarck};
  min-height: 40px;
  border-radius: ${({ theme }) => theme.radius.sm};
  background-color: ${({ theme }) => theme.colors.base_70};
  transition-property: border, width, transform;
  transition-duration: 200ms;
  transition-timing-function: ${({ theme }) => theme.transitions.standardEase};
  border: 2px solid
    ${({ theme, $focused }) =>
      $focused ? theme.colors.base_50 : theme.colors.base_80};
`;

export const Input = styled.input<StyledInputProps>`
  ${bodyMediumRegular()}

  padding-top: ${({ theme }) => theme.spaces.quarck};
  padding-right: ${({ theme, $endIcon }) => ($endIcon ? 0 : theme.spaces.nano)};
  padding-bottom: ${({ theme }) => theme.spaces.quarck};
  padding-left: ${({ theme, $startIcon }) =>
    $startIcon ? 0 : theme.spaces.nano};

  height: 100%;
  width: 100%;
  color: ${({ theme }) => theme.colors.base_20};
  outline: none;
  background: transparent;
  border: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.base_40};
    opacity: 1;
  }

  &:-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.base_40};
  }
`;

export const InputIcon = styled(Button)`
  height: ${({ theme }) => theme.spaces.md};
  width: ${({ theme }) => theme.spaces.md};
`;

InputIcon.defaultProps = {
  variant: "shallow",
};
