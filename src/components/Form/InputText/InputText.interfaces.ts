export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  startIcon?: string;
  endIcon?: string;
  onStartIconClick?: (e: React.MouseEvent) => void;
  onEndIconClick?: (e: React.MouseEvent) => void;
}

export interface StyledInputProps extends InputProps {
  $startIcon?: string;
  $endIcon?: string;
}
