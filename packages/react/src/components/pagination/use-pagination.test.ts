import { usePagination } from "."
import { renderHook } from "../../../test"

describe("usePagination", () => {
  test("should return the correct pagination", () => {
    const { result } = renderHook(() => usePagination({ page: 1, total: 10 }))
    expect(result.current.range).toStrictEqual([1, 2, 3, 4, 5, "ellipsis", 10])
  })
})
