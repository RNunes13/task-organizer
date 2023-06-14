import { Icon } from "@/components/Icon/Icon";
import { Button as StyledButton } from "./Button.styles";
import type { ButtonProps } from "./Button.interfaces";

export const Button: React.FC<ButtonProps> = ({
  children,
  gradient,
  endIcon,
  startIcon,
  color = "primary",
  variant = "contained",
  ...rest
}) => (
  <StyledButton
    type="button"
    $color={color}
    $gradient={gradient}
    $variant={variant}
    {...rest}
  >
    {!!startIcon && <Icon icon={startIcon} />}
    {children}
    {!!endIcon && <Icon icon={endIcon} />}
  </StyledButton>
);
