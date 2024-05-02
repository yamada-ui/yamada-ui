import { renderHook } from "@yamada-ui/test"
import { usePagination } from "../src"

describe("usePagination", () => {
  test("should return the correct pagination", () => {
    const { result } = renderHook(() => usePagination({ page: 1, total: 10 }))
    expect(result.current.range).toStrictEqual([1, 2, 3, 4, 5, "dots", 10])
  })
})
