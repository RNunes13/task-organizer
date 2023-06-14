import { IconsSystem } from "./helpers/icons-system";

export const iconsLibraries: Record<string, any> = {
  system: IconsSystem,
};

const reduceIcons = (accum: any, [key, value]: [key: string, value: any]) => {
  if (typeof value !== "string") {
    Object.keys(value).map((name) => accum.push(`${key}:${name}`));
  }
  return accum;
};

export const iconsAsList = Object.entries(iconsLibraries).reduce(
  reduceIcons,
  []
);
