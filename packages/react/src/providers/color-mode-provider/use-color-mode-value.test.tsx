import { renderHook } from "../../../test"
import { ColorModeProvider } from "./color-mode-provider"
import { useColorModeValue } from "./use-color-mode-value"

describe("ColorModeProvider", () => {
  test("returns light value in light mode", () => {
    const { result } = renderHook(
      () => useColorModeValue("lightValue", "darkValue"),
      {
        wrapper: ({ children }) => (
          <ColorModeProvider colorMode="light">{children}</ColorModeProvider>
        ),
      },
    )

    expect(result.current).toBe("lightValue")
  })

  test("returns dark value in dark mode", () => {
    const { result } = renderHook(
      () => useColorModeValue("lightValue", "darkValue"),
      {
        wrapper: ({ children }) => (
          <ColorModeProvider colorMode="dark">{children}</ColorModeProvider>
        ),
      },
    )

    expect(result.current).toBe("darkValue")
  })
})
