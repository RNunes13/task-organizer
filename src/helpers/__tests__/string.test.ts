import { HexToRgb } from "../string";

describe("`string` helper", () => {
  describe("`HexToRgb` function", () => {
    it("should return an object with the color attributes in rgb", () => {
      const input = "#fc76a1";
      const expected = {
        r: 252,
        g: 118,
        b: 161,
        toString: expect.any(Function),
      };

      const result = HexToRgb(input);
      expect(result).toStrictEqual(expected);
    });

    it("should return a string with comma-separated rgb values", () => {
      const input = "#ce69e0";
      const expected = "206, 105, 224";
      const result = HexToRgb(input).toString();
      expect(result).toStrictEqual(expected);
    });

    it("should return zero values for an invalid input", () => {
      const input = "invalid";
      const expected = {
        r: 0,
        g: 0,
        b: 0,
        toString: expect.any(Function),
      };

      const result = HexToRgb(input);
      expect(result).toStrictEqual(expected);
      expect(result.toString()).toStrictEqual('0, 0, 0');
    });
  });
});
