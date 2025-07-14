import { act, renderHook } from "#test"
import { ColorModeProvider, useColorMode } from "./color-mode-provider"

describe("ColorModeProvider", () => {
  test("provides a color mode to child components", () => {
    const { result } = renderHook(() => useColorMode(), {
      wrapper: ({ children }) => (
        <ColorModeProvider>{children}</ColorModeProvider>
      ),
    })

    expect(result.current.colorMode).toBe("light")
  })

  test("allows color mode updates through changeColorMode", () => {
    const { result } = renderHook(() => useColorMode(), {
      wrapper: ({ children }) => (
        <ColorModeProvider>{children}</ColorModeProvider>
      ),
    })

    act(() => {
      result.current.changeColorMode("dark")
    })

    expect(result.current.colorMode).toBe("dark")
  })

  test("change system mode", () => {
    const { result } = renderHook(() => useColorMode(), {
      wrapper: ({ children }) => (
        <ColorModeProvider>{children}</ColorModeProvider>
      ),
    })

    act(() => {
      result.current.changeColorMode("system")
    })

    expect(result.current.internalColorMode).toBe("system")
  })

  test("toggles color mode between light and dark", () => {
    const { result } = renderHook(() => useColorMode(), {
      wrapper: ({ children }) => (
        <ColorModeProvider>{children}</ColorModeProvider>
      ),
    })

    act(() => {
      result.current.toggleColorMode()
    })

    expect(result.current.colorMode).toBe("dark")

    act(() => {
      result.current.toggleColorMode()
    })

    expect(result.current.colorMode).toBe("light")
  })

  test("forced dark mode", () => {
    const { result } = renderHook(() => useColorMode(), {
      wrapper: ({ children }) => (
        <ColorModeProvider colorMode="dark">{children}</ColorModeProvider>
      ),
    })

    expect(result.current.colorMode).toBe("dark")
  })
})
