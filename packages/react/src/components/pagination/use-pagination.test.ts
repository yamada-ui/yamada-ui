import type { Ref } from "react"
import { renderHook } from "#test/browser"
import { usePagination } from "./use-pagination"

function invokeCallbackRef<T>(ref: Ref<T> | undefined, node: null | T) {
  if (typeof ref === "function") ref(node)
}

function invokeHandler<E>(handler: ((event: E) => void) | undefined, event: E) {
  handler?.(event)
}

describe("usePagination", () => {
  test("should return the correct pagination", async () => {
    const { result } = await renderHook(() =>
      usePagination({ page: 1, total: 10 }),
    )
    expect(result.current.range).toStrictEqual([1, 2, 3, 4, 5, "ellipsis", 10])
  })

  test("getRootProps merges root props and composes refs without duplicate calls", async () => {
    const order: string[] = []
    const restRef = vi.fn<(node: HTMLDivElement | null) => void>()
    const propRef = vi.fn<(node: HTMLDivElement | null) => void>()
    const restOnClick = vi.fn(() => {
      order.push("rest")
    })
    const propOnClick = vi.fn(() => {
      order.push("props")
    })
    const restCss = { color: "red" }
    const propCss = { backgroundColor: "blue" }
    const hookProps = {
      ref: restRef,
      className: "from-rest",
      css: restCss,
      style: { color: "red", paddingTop: "4px" },
      total: 10,
      onClick: restOnClick,
    } as any
    const { result } = await renderHook(() => usePagination(hookProps), {
      withProvider: false,
    })
    const merged = result.current.getRootProps({
      ref: propRef,
      className: "from-props",
      css: propCss,
      style: { backgroundColor: "blue", paddingTop: "8px" },
      onClick: propOnClick,
    } as any)
    const node = document.createElement("div")
    const event = new MouseEvent("click")

    expect(merged.role).toBe("navigation")
    expect(String(merged.className)).toContain("from-rest")
    expect(String(merged.className)).toContain("from-props")
    expect(merged.style).toMatchObject({
      backgroundColor: "blue",
      color: "red",
      paddingTop: "8px",
    })
    expect((merged as any).css).toStrictEqual(
      expect.arrayContaining([restCss, propCss]),
    )

    invokeCallbackRef(merged.ref, node)
    invokeHandler(merged.onClick, event as never)

    expect(restRef).toHaveBeenCalledTimes(1)
    expect(restRef).toHaveBeenCalledWith(node)
    expect(propRef).toHaveBeenCalledTimes(1)
    expect(propRef).toHaveBeenCalledWith(node)
    expect(restOnClick).toHaveBeenCalledTimes(1)
    expect(propOnClick).toHaveBeenCalledTimes(1)
    expect(order).toStrictEqual(["rest", "props"])
  })
})
