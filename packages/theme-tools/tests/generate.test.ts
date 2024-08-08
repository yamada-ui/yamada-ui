import { generate } from "../src"

describe("generate", () => {
  describe("spaces", () => {
    test("should generate spaces", () => {
      const expectedSpaces = {
        px: "1px",
        0.5: "0.25rem",
        1: "0.5rem",
        1.5: "0.75rem",
        2: "1rem",
        2.5: "1.25rem",
        3: "1.5rem",
        3.5: "1.75rem",
        4: "2rem",
        5: "2.5rem",
        6: "3rem",
        7: "3.5rem",
        8: "4rem",
        9: "4.5rem",
        10: "5rem",
        12: "6rem",
        14: "7rem",
        16: "8rem",
        20: "10rem",
        24: "12rem",
        28: "14rem",
        32: "16rem",
        36: "18rem",
        40: "20rem",
        44: "22rem",
        48: "24rem",
        52: "26rem",
        56: "28rem",
        60: "30rem",
        64: "32rem",
        72: "36rem",
        80: "40rem",
        96: "48rem",
      }

      const spaces = generate.spaces(2)

      expect(spaces).toStrictEqual(expectedSpaces)
    })

    test("should not change when 1 is passed", () => {
      const expectedSpaces = {
        px: "1px",
        0.5: "0.125rem",
        1: "0.25rem",
        1.5: "0.375rem",
        2: "0.5rem",
        2.5: "0.625rem",
        3: "0.75rem",
        3.5: "0.875rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        40: "10rem",
        44: "11rem",
        48: "12rem",
        52: "13rem",
        56: "14rem",
        60: "15rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        96: "24rem",
      }

      const spaces = generate.spaces(1)

      expect(spaces).toStrictEqual(expectedSpaces)
    })

    test("should calculate correctly when a negative number is passed", () => {
      const spaces = generate.spaces(-2)
      expect(spaces[1]).toBe("-0.5rem")
      expect(spaces[2]).toBe("-1rem")
      expect(spaces[4]).toBe("-2rem")
    })

    test("should set all values to 0 when 0 is passed", () => {
      const spaces = generate.spaces(0)
      expect(spaces[1]).toBe("0rem")
      expect(spaces[2]).toBe("0rem")
      expect(spaces[4]).toBe("0rem")
    })

    test("should calculate correctly when a decimal is passed", () => {
      const spaces = generate.spaces(1.5)
      expect(spaces[1]).toBe("0.375rem")
      expect(spaces[2]).toBe("0.75rem")
    })

    test("should throw an error when NaN is passed", () => {
      expect(() => generate.spaces(NaN)).toThrow(
        "The multiplier must be a valid number.",
      )
    })

    test("should throw an error when Infinity is passed", () => {
      expect(() => generate.spaces(Infinity)).toThrow(
        "The multiplier must be a finite number.",
      )
    })

    test("should throw an error when a string is passed", () => {
      expect(() => generate.spaces("2" as any)).toThrow(
        "The multiplier must be a number.",
      )
    })
  })

  describe("tones", () => {
    test("should generate tones", () => {
      const tones = generate.tones("#ea4334")

      expect(tones).toStrictEqual({
        "50": "#fdeeed",
        "100": "#fbd9d5",
        "200": "#f6b2ac",
        "300": "#f29087",
        "400": "#ee6a5d",
        "500": "#ea4334",
        "600": "#de2817",
        "700": "#b92113",
        "800": "#8f1a0f",
        "900": "#6a130b",
        "950": "#581009",
      })
    })

    test("should generate tones for bright colors as well", () => {
      const tones = generate.tones("#fbbd04")

      expect(tones).toStrictEqual({
        "50": "#fef3d2",
        "100": "#feedb9",
        "200": "#fde18b",
        "300": "#fdd55e",
        "400": "#fcc931",
        "500": "#fbbd04",
        "600": "#ce9b03",
        "700": "#a17902",
        "800": "#745702",
        "900": "#463501",
        "950": "#322601",
      })
    })

    test("should match the provided color with 500", () => {
      const tones = generate.tones("#4387f4")

      expect(tones[500]).toBe("#4387f4")
    })
  })
})
