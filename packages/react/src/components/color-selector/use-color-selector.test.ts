import { renderHook } from "#test"
import { useColorSelector } from "./use-color-selector"

describe("useColorSelector", () => {
  describe("getRootProps", () => {
    test("merges data attributes and user props via mergeProps", () => {
      const { result } = renderHook(() =>
        useColorSelector({
          id: "hook-id",
          className: "hook",
          "data-testid": "color-root",
          value: "#ff0000",
        }),
      )

      const merged = result.current.getRootProps({
        id: "user-id",
        className: "user",
      })

      expect(merged.id).toBe("user-id")
      expect(String(merged.className)).toContain("hook")
      expect(String(merged.className)).toContain("user")
      expect(merged["data-testid"]).toBe("color-root")
    })

    test("merges style and css, chains click handlers, and preserves hook data attrs", () => {
      const onHookClick = vi.fn()
      const onUserClick = vi.fn()
      const hookCss = { borderColor: "red" }
      const userCss = { color: "blue" }

      const { result } = renderHook(() =>
        useColorSelector({
          css: hookCss,
          style: { borderWidth: "1px" },
          disabled: true,
          readOnly: true,
          value: "#ff0000",
          onClick: onHookClick,
        }),
      )

      const merged = result.current.getRootProps({
        css: userCss,
        style: { color: "blue" },
        onClick: onUserClick,
      })

      merged.onClick?.({} as any)

      expect(onHookClick).toHaveBeenCalledTimes(1)
      expect(onUserClick).toHaveBeenCalledTimes(1)
      expect(merged.style).toMatchObject({
        borderWidth: "1px",
        color: "blue",
      })
      expect(merged.css).toStrictEqual([hookCss, userCss])
      expect(merged["data-disabled"]).toBe("")
      expect(merged["data-readonly"]).toBe("")
    })

    test("merges refs from hook props and user props", () => {
      const hookRef = vi.fn()
      const userRef = vi.fn()

      const { result } = renderHook(() =>
        useColorSelector({
          ref: hookRef,
          value: "#ff0000",
        }),
      )

      const merged = result.current.getRootProps({
        ref: userRef,
      })

      expect(typeof merged.ref).toBe("function")
      const mergedRef = merged.ref as (node: HTMLDivElement) => void
      const node = document.createElement("div")
      mergedRef(node)

      expect(hookRef).toHaveBeenCalledTimes(1)
      expect(userRef).toHaveBeenCalledTimes(1)
    })
  })
})
