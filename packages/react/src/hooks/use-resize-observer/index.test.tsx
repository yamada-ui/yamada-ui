import { renderHook } from "#test"
import { useElementSize, useResizeObserver } from "./"

describe("useResizeObserver", () => {
  test("returns default rect on initial render", () => {
    const { result } = renderHook(() => useResizeObserver())
    const [, rect] = result.current

    expect(rect).toStrictEqual({
      bottom: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0,
      width: 0,
      x: 0,
      y: 0,
    })
  })
})

describe("useElementSize", () => {
  test("returns zero width and height on initial render", () => {
    const { result } = renderHook(() => useElementSize())

    expect(result.current.width).toBe(0)
    expect(result.current.height).toBe(0)
  })
})
