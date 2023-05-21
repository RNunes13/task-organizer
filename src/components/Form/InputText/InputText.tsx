import { useRef, useState } from "react";
import * as Styled from "./InputText.styles";
import type { InputProps } from "./InputText.interfaces";

export const InputText: React.FC<InputProps> = ({
  endIcon,
  startIcon,
  className,
  onEndIconClick,
  onStartIconClick,
  ...rest
}) => {
  const [focused, setFocus] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const toggleFocus = () => setFocus(!focused);

  return (
    <Styled.Wrap $focused={focused} className={className}>
      {!!startIcon && (
        <Styled.InputIcon
          startIcon={startIcon}
          onClick={onStartIconClick}
        />
      )}
  
      <Styled.Input
        {...rest}
        ref={inputRef}
        type="text"
        $endIcon={endIcon}
        $startIcon={startIcon}
        onBlur={toggleFocus}
        onFocus={toggleFocus}
      />
  
      {!!endIcon && (
        <Styled.InputIcon startIcon={endIcon} onClick={onEndIconClick} />
      )}
    </Styled.Wrap>
  );
}
