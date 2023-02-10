import { removeMapan } from "~/utils/remove";

describe("Remove 'MAPAN", () => {
  describe("When input is empty", () => {
    it("should throw an error", () => {
      expect(() => removeMapan("")).toThrowError("Input must not be empty");
    });
  });

  describe("When input is not a string", () => {
    it("should throw an error", () => {
      expect(() => removeMapan(1)).toThrowError("Input must be a string");
    });
  });

  describe("When input not contains 'MAPAN'", () => {
    it("should return the same input", () => {
      const result = removeMapan("Hello World");
      expect(result).toBe("Hello World");
    });
  });

  describe("When input contains 'MAPAN'", () => {
    it("should remove 'MAPAN' uppercase", () => {
      const result = removeMapan("MAPAN - Aye");
      expect(result).toBe("- Aye");
    });

    it("should remove 'mapan' lowercase", () => {
      const result = removeMapan("mapan - Aye");
      expect(result).toBe("- Aye");
    });

    it("should remove 'maPaN' mixed case", () => {
      const result = removeMapan("maPaN - Aye");
      expect(result).toBe("- Aye");
    });

    it("should remove 'mapan' in the middle of the string", () => {
      const result = removeMapan(
        "Terlahir sebagai keluarga mapan adalah suatu keberuntungan",
      );
      expect(result).toBe(
        "Terlahir sebagai keluarga adalah suatu keberuntungan",
      );
    });

    it("should remove 'mapan' in the end of the string", () => {
      const result = removeMapan("Aye kumaha mapan");
      expect(result).toBe("Aye kumaha");
    });
  });
});
