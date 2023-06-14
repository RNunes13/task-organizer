import styled from "styled-components";
import { isMobile } from "@/theme/mixins/Breakpoint";

export const Main = styled.main`
  flex: 1;
  padding-top: ${({ theme }) => theme.spaces.md};
  padding-bottom: ${({ theme }) => theme.spaces.md};

  ${isMobile()} {
    padding-top: ${({ theme }) => theme.spaces.xs};
    padding-bottom: ${({ theme }) => theme.spaces.xs};
  }
`;
