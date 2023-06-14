import { CheckboxProps } from './Checkbox.interfaces';
import * as Styled from './Checkbox.styles';

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  return (
    <Styled.Input {...props} />
  )
}
