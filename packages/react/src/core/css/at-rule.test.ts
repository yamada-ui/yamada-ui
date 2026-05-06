import { system } from "#test"
import { generateAtRule } from "./at-rule"

describe("atRule", () => {
  describe("media", () => {
    const atRule = generateAtRule("media")

    test("handles not array values", () => {
      expect(atRule(null, { system })).toBeNull()
      expect(atRule(undefined, { system })).toBeUndefined()
    })

    test("handles array values", () => {
      expect(
        atRule([{ css: { color: "red" }, maxW: "560px", minW: "320px" }], {
          system,
        }),
      ).toStrictEqual({
        "@media (max-width: 560px) and (min-width: 320px)": { color: "red" },
      })
    })
  })

  describe("container", () => {
    const atRule = generateAtRule("container")

    test("handles not array values", () => {
      expect(atRule(null, { system })).toBeNull()
      expect(atRule(undefined, { system })).toBeUndefined()
    })

    test("handles array values", () => {
      expect(
        atRule([{ css: { color: "red" }, orientation: "portrait" }], {
          system,
        }),
      ).toStrictEqual({
        "@container (orientation: portrait)": { color: "red" },
      })
    })

    test("handles array values with name and type", () => {
      expect(
        atRule(
          [
            {
              type: "inline-size",
              name: "parent",
              css: { color: "red" },
              orientation: "portrait",
            },
          ],
          {
            system,
          },
        ),
      ).toStrictEqual({
        "@container inline-size parent (orientation: portrait)": {
          color: "red",
        },
      })
    })

    test("handles array values with style", () => {
      expect(
        atRule([{ css: { color: "red" }, style: "--color: blue" }], { system }),
      ).toStrictEqual({
        "@container style(--color: blue)": { color: "red" },
      })
    })

    test("handles array values with array style", () => {
      expect(
        atRule(
          [
            {
              css: { color: "red" },
              style: ["--color: blue", "--size: 100px"],
            },
          ],
          { system },
        ),
      ).toStrictEqual({
        "@container style(--color: blue) and style(--size: 100px)": {
          color: "red",
        },
      })
    })
  })

  describe("supports", () => {
    const atRule = generateAtRule("supports")

    test("handles not array values", () => {
      expect(atRule(null, { system })).toBeNull()
      expect(atRule(undefined, { system })).toBeUndefined()
    })

    test("handles array values", () => {
      expect(
        atRule([{ css: { color: "blue" }, query: "(display: flex)" }], {
          system,
        }),
      ).toStrictEqual({
        "@supports (display: flex)": { color: "blue" },
      })
    })
  })
})
