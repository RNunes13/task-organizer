export interface RgbObject {
  r: number;
  g: number;
  b: number;
  toString: () => string;
}

export function HexToRgb(hex: string): RgbObject {
  const {
    1: _r = 0,
    2: _g = 0,
    3: _b = 0,
  } = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex) || ({} as any);

  const r = parseInt(_r, 16),
    g = parseInt(_g, 16),
    b = parseInt(_b, 16);

  const toString = () => `${r}, ${g}, ${b}`;

  return {
    r,
    g,
    b,
    toString,
  };
}
