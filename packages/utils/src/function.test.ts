import { funcAll, handlerAll, noop, runIfFunc } from "./function"

describe("Function", () => {
  describe("noop", () => {
    test("should do nothing and return undefined", () => {
      expect(noop()).toBeUndefined()
    })
  })

  describe("runIfFunc", () => {
    test("should run function if passed a function", () => {
      const result = runIfFunc((a: number, b: number) => a + b, 2, 3)
      expect(result).toBe(5)
    })

    test("should return value if passed a non-function", () => {
      const result = runIfFunc("test")
      expect(result).toBe("test")
    })
  })

  describe("handlerAll", () => {
    test("should call all passed functions with the event", () => {
      const mockFn1 = vi.fn()
      const mockFn2 = vi.fn()
      const ev = { defaultPrevented: false }

      handlerAll(mockFn1, mockFn2)(ev)

      expect(mockFn1).toHaveBeenCalledWith(ev)
      expect(mockFn2).toHaveBeenCalledWith(ev)
    })

    test("should call all passed functions with the event and args", () => {
      const mockFn1 = vi.fn()
      const mockFn2 = vi.fn()
      const ev = { defaultPrevented: false }
      const args = ["test1", "test2"]

      handlerAll(mockFn1, mockFn2)(ev, ...args)

      expect(mockFn1).toHaveBeenCalledWith(ev, ...args)
      expect(mockFn2).toHaveBeenCalledWith(ev, ...args)
    })

    test("should stop calling functions if defaultPrevented is true", () => {
      const mockFn1 = vi.fn().mockImplementation((ev) => {
        ev.defaultPrevented = true
      })
      const mockFn2 = vi.fn()
      const ev = { defaultPrevented: false }

      handlerAll(mockFn1, mockFn2)(ev)

      expect(mockFn1).toHaveBeenCalledWith(ev)
      expect(mockFn2).not.toHaveBeenCalled()
    })
  })

  describe("funcAll", () => {
    test("should call all passed functions with the argument", () => {
      const mockFn1 = vi.fn()
      const mockFn2 = vi.fn()
      const arg = "test"

      funcAll(mockFn1, mockFn2)(arg)

      expect(mockFn1).toHaveBeenCalledWith(arg)
      expect(mockFn2).toHaveBeenCalledWith(arg)
    })

    test("should call all passed functions with the arguments", () => {
      const mockFn1 = vi.fn()
      const mockFn2 = vi.fn()
      const args = ["test1", "test2"]

      funcAll(mockFn1, mockFn2)(...args)

      expect(mockFn1).toHaveBeenCalledWith(...args)
      expect(mockFn2).toHaveBeenCalledWith(...args)
    })
  })
})
