import { renderHook } from "#test"
import { usePanEvent } from "./"

describe("usePanEvent", () => {
  test("returns ref and getProps", () => {
    const { result } = renderHook(() => usePanEvent<HTMLDivElement>())

    const [ref, getProps] = result.current

    expect(ref.current).toBeNull()
    expect(getProps().onPointerDown).toStrictEqual(expect.any(Function))
  })
})
