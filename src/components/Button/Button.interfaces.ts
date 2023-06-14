export type ButtonColors = "primary";

export interface ButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement>, "type"> {
  children?: React.ReactNode;
  color?: ButtonColors;
  gradient?: boolean;
  startIcon?: string;
  endIcon?: string;
  variant?: ButtonVariants;
}

export interface StyledButtonProps extends ButtonProps {
  $color?: ButtonColors;
  $loading?: boolean;
  $gradient?: boolean;
  $variant?: ButtonVariants;
}

export type ButtonVariants = 'contained' | 'shallow';
