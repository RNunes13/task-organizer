import styled from "styled-components";

export const Input = styled.input`
  cursor: pointer;
  position: relative;
  flex: 0 0 auto;
  width: ${({ theme }) => theme.spaces.sm};
  height: ${({ theme }) => theme.spaces.sm};
  border: 3px solid ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  border-radius: ${({ theme }) => theme.radius.sm};
  appearance: none;
  outline: none;
  transition-property: background, border;
  transition-duration: 200ms;
  transition-timing-function: ${({ theme }) => theme.transitions.standardEase};

  &::before {
    content: '';
    position: absolute;
    display: block;
    top: 1px;
    left: 6px;
    width: 5px;
    height: 11px;
    border: 0 solid ${({ theme }) => theme.colors.base_100};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    opacity: 0;
  }

  &:checked {
    background-color: ${({ theme }) => theme.colors.primary};

    &::before {
      opacity: 1;
    }
  }
`;

Input.defaultProps = {
  type: "checkbox",
};
