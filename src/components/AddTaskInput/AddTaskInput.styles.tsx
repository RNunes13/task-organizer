import styled from "styled-components";
import { bodyMediumRegular } from "@/theme/mixins/Typography";
import { Button } from "@/components/Button/Button";

export const Wrap = styled.div<{ $focused: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spaces.xxs};
  min-height: 56px;
  padding: ${({ theme: { spaces: { xxs, xxxs } } }) => `${xxxs} ${xxs}`};
  border-radius: ${({ theme }) => theme.radius.lg};
  background-color: transparent;
  transition-property: border, box-shadow;
  transition-duration: 200ms;
  transition-timing-function: ${({ theme }) => theme.transitions.standardEase};
  border: 1px solid
    ${({ theme, $focused }) =>
      $focused ? theme.colors.base_50 : theme.colors.base_80};

  &:hover {
    box-shadow: 0 0 10px 0
      ${({ theme, $focused }) =>
        !$focused ? theme.colors.base_70 : "transparent"};
  }
`;

export const Input = styled.input`
  ${bodyMediumRegular()}

  height: 100%;
  width: 100%;
  color: ${({ theme }) => theme.colors.base_20};
  outline: none;
  background: transparent;
  border: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.base_50};
    opacity: 1;
  }

  &:-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.base_50};
  }
`;

export const AddButton = styled(Button)`
  min-height: auto;
  padding: 2px;
  width: ${({ theme }) => theme.icon.medium};
  height: ${({ theme }) => theme.icon.medium};
  border-radius: ${({ theme }) => theme.radius.sm};

  svg {
    fill: ${({ theme }) => theme.colors.base_100};
  }
`;
