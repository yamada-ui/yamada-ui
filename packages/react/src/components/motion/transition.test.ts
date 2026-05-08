import { createTransition } from "./transition"

describe("createTransition", () => {
  describe("enter", () => {
    test("returns default transition when no arguments are provided", () => {
      const result = createTransition.enter()(undefined, undefined)

      expect(result).toStrictEqual({
        delay: undefined,
        duration: 0.2,
        ease: [0, 0, 0.58, 1],
      })
    })

    test("uses provided base transition when given", () => {
      const result = createTransition.enter({ duration: 0.5, ease: "linear" })(
        undefined,
        undefined,
      )

      expect(result).toStrictEqual({
        delay: undefined,
        duration: 0.5,
        ease: "linear",
      })
    })

    test("overrides duration with a number", () => {
      const result = createTransition.enter()(undefined, 0.4)

      expect(result.duration).toBe(0.4)
    })

    test("overrides duration with `0`", () => {
      const result = createTransition.enter()(undefined, 0)

      expect(result.duration).toBe(0)
    })

    test("overrides duration with the `enter` value of a lifecycle object", () => {
      const result = createTransition.enter()(undefined, {
        enter: 0.6,
        exit: 0.3,
      })

      expect(result.duration).toBe(0.6)
    })

    test("overrides duration with `0` from a lifecycle object", () => {
      const result = createTransition.enter()(undefined, { enter: 0, exit: 1 })

      expect(result.duration).toBe(0)
    })

    test("does not override duration when `undefined` is passed", () => {
      const result = createTransition.enter({ duration: 0.5 })(
        undefined,
        undefined,
      )

      expect(result.duration).toBe(0.5)
    })

    test("uses delay number directly", () => {
      const result = createTransition.enter()(0.1, undefined)

      expect(result.delay).toBe(0.1)
    })

    test("uses the `enter` value from a delay lifecycle object", () => {
      const result = createTransition.enter()(
        { enter: 0.2, exit: 0.4 },
        undefined,
      )

      expect(result.delay).toBe(0.2)
    })
  })

  describe("exit", () => {
    test("returns default transition when no arguments are provided", () => {
      const result = createTransition.exit()(undefined, undefined)

      expect(result).toStrictEqual({
        delay: undefined,
        duration: 0.2,
        ease: [0.42, 0, 1, 1],
      })
    })

    test("uses provided base transition when given", () => {
      const result = createTransition.exit({ duration: 0.5, ease: "linear" })(
        undefined,
        undefined,
      )

      expect(result).toStrictEqual({
        delay: undefined,
        duration: 0.5,
        ease: "linear",
      })
    })

    test("overrides duration with a number", () => {
      const result = createTransition.exit()(undefined, 0.4)

      expect(result.duration).toBe(0.4)
    })

    test("overrides duration with `0`", () => {
      const result = createTransition.exit()(undefined, 0)

      expect(result.duration).toBe(0)
    })

    test("overrides duration with the `exit` value of a lifecycle object", () => {
      const result = createTransition.exit()(undefined, {
        enter: 0.6,
        exit: 0.3,
      })

      expect(result.duration).toBe(0.3)
    })

    test("overrides duration with `0` from a lifecycle object", () => {
      const result = createTransition.exit()(undefined, { enter: 1, exit: 0 })

      expect(result.duration).toBe(0)
    })

    test("does not override duration when `undefined` is passed", () => {
      const result = createTransition.exit({ duration: 0.5 })(
        undefined,
        undefined,
      )

      expect(result.duration).toBe(0.5)
    })

    test("uses delay number directly", () => {
      const result = createTransition.exit()(0.1, undefined)

      expect(result.delay).toBe(0.1)
    })

    test("uses the `exit` value from a delay lifecycle object", () => {
      const result = createTransition.exit()(
        { enter: 0.2, exit: 0.4 },
        undefined,
      )

      expect(result.delay).toBe(0.4)
    })
  })
})
