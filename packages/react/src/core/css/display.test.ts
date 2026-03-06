import { visuallyHiddenAttributes } from "../../utils"
import { display } from "./display"

describe("display", () => {
  const options = { prev: {}, system: {} } as any

  test("returns center flex styles", () => {
    const result = display("center", options)
    expect(result).toStrictEqual({
      display: "flex",
      placeContent: "center",
      placeItems: "center",
    })
  })

  test("returns inline-center flex styles", () => {
    const result = display("inline-center", options)
    expect(result).toStrictEqual({
      display: "inline-flex",
      placeContent: "center",
      placeItems: "center",
    })
  })

  test("returns absolute-center styles", () => {
    const result = display("absolute-center", options)
    expect(result).toStrictEqual({
      insetBlockStart: "50%",
      insetInlineStart: "50%",
      position: "absolute",
      translateX: "-50%",
      translateY: "-50%",
    })
  })

  test("returns visually hidden styles for 'hidden'", () => {
    const result = display("hidden", options)
    expect(result).toStrictEqual(visuallyHiddenAttributes.style)
  })

  test("returns value as-is for unrecognized display value", () => {
    expect(display("block", options)).toBe("block")
    expect(display("flex", options)).toBe("flex")
  })

  test("preserves existing placeContent/placeItems from prev", () => {
    const optionsWithPrev = {
      prev: { placeContent: "start", placeItems: "end" },
      system: {},
    } as any
    const result = display("center", optionsWithPrev)
    expect(result).toStrictEqual({
      display: "flex",
      placeContent: "start",
      placeItems: "end",
    })
  })
})
