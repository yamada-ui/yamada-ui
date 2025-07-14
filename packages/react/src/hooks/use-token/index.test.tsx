import { renderHook } from "@/test"
import { UIProvider } from "../../providers/ui-provider"
import { useToken } from "./"

describe("useToken", () => {
  test("correctly retrieves the value", () => {
    const { result } = renderHook(() => useToken("colors", "gray.500"))

    expect(result.current).toBe("#737373")
  })

  test("correctly retrieves the value in light mode", () => {
    const { result } = renderHook(() => useToken("shadows", "md"))

    expect(result.current).toBe(
      "0px 4px 8px {colors.black/10}, 0px 0px 1px {colors.black/30}",
    )
  })

  test("correctly retrieves the value in dark mode", () => {
    const { result } = renderHook(() => useToken("shadows", "md"), {
      wrapper: ({ children }) => (
        <UIProvider colorMode="dark">{children}</UIProvider>
      ),
    })

    expect(result.current).toBe("0px 4px 8px {colors.black/80}")
  })

  test("correctly retrieves the value for layerStyle", () => {
    const { result } = renderHook(() => useToken("layerStyles", "hover"))

    expect(result.current).toStrictEqual({ opacity: 0.8 })
  })

  test("correctly retrieves the value for textStyle", () => {
    const { result } = renderHook(() => useToken("textStyles", "solid"))

    expect(result.current).toStrictEqual({ color: "colorScheme.contrast" })
  })
})
