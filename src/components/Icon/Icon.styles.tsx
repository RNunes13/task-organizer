import styled from 'styled-components';
import { COLORS } from '@/theme';

interface IStyledProps extends React.HTMLProps<HTMLElement> {
  fill?: COLORS;
}

export const Wrapper = styled.i<IStyledProps>`
  width: ${({ theme }) => theme.icon.medium};
  height: ${({ theme }) => theme.icon.medium};
  fill: ${({ fill, theme }) => theme.colors[fill as COLORS] ?? 'currentColor'};
  display: flex;

  svg {
    width: 100%;
    height: 100%;
  }
`;
