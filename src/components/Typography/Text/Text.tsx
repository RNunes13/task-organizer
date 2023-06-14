import { FC } from 'react';
import { TextComponent } from './Text.styles';
import { TextProps } from './Text.interfaces';

export const Text: FC<TextProps> = ({ as, tag, styleAs, ...rest }) => (
  <TextComponent {...rest} as={as || tag} $styleAs={styleAs} />
);

Text.defaultProps = {
  tag: 'p'
};
