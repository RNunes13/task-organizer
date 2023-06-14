import styled from "styled-components";
import { ctaBold } from "@/theme/mixins/Typography";
import type { StyledButtonProps } from "./Button.interfaces";

export const Button = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spaces.quarck};
  padding: 6px;
  border-radius: ${({ theme }) => theme.radius.md};
  min-height: 36px;
  transition: background 0.1s ease-in;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);

  ${ctaBold()};

  ${({ $color, $gradient, theme: { colors } }) =>
    $color === "primary" &&
    `
    background: ${
      !$gradient
        ? `${colors.primary}`
        : `linear-gradient(
            to right top,
            ${colors.primaryGradientDark} 0%,
            ${colors.primaryGradientMedium} 51%,
            ${colors.primaryGradientLight} 100%
          )`
    };
    color: ${colors.base_0};
    fill: ${colors.base_0};

    &:hover {
      ${!$gradient && `background: ${colors.primary_70}`};
    }
  `}

  ${({ $variant, theme: { colors } }) =>
    $variant === "shallow" &&
    `
    background: transparent !important;
    color: ${colors.bodyColor};
    fill: ${colors.bodyColor};
  `}

  ${({ disabled, $loading }) =>
    (disabled || $loading) &&
    `
    cursor: default;
    pointer-events: none;
  `}

  ${({ disabled, theme: { colors } }) =>
    disabled &&
    `
    background-color: ${colors.base_50};
    color: ${colors.base_90};
    fill: ${colors.base_90};
  `}
`;
