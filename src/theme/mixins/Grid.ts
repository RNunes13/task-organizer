import { IMixinProps } from '@/theme';
import { xSmall, small } from './Breakpoint';

const gridBase = () => (props: IMixinProps): string => `
  width: 100%;
  box-sizing: border-box;
  position: relative;
  padding-right: ${props.theme.spaces.md};
  padding-left: ${props.theme.spaces.md};
  margin-right: auto;
  margin-left: auto;
  transition: padding 150ms ${props.theme.transitions.standardEase};

  ${small()(props)} {
    padding-right: ${props.theme.spaces.xs};
    padding-left: ${props.theme.spaces.xs};
  }

  ${xSmall()(props)} {
    padding-right: ${props.theme.spaces.xxxs};
    padding-left: ${props.theme.spaces.xxxs};
  }
`;

export const grid = () => (props: IMixinProps): string => `
  ${gridBase()(props)}
  max-width: 1350px;
`;

export const grid12 = () => (props: IMixinProps): string => `
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: ${props.theme.spaces.sm};
  grid-row-gap: ${props.theme.spaces.sm};
  justify-items: stretch;
`;
