import { Suspense } from "react";
import { Wrapper } from "./Icon.styles";
import { iconsLibraries } from "./Icon.utils";

export interface IconProps extends React.HTMLProps<HTMLElement> {
  className?: string;
  icon?: string;
  fill?: string;
}

export const Icon = (props: IconProps): React.ReactElement => {
  const { icon, ...rest } = props;
  if (!icon) return <Wrapper {...(rest as any)} />;

  const [libraryName, iconName] = icon.split(":");

  if (!libraryName || !iconName) return <Wrapper {...(rest as any)} />;

  const selectedLib = iconsLibraries[libraryName];
  const iconComponent = selectedLib && selectedLib[iconName];

  return (
    <Suspense fallback={<Wrapper />}>
      <Wrapper {...(rest as any)} data-testid={icon}>
        {iconComponent}
      </Wrapper>
    </Suspense>
  );
};
