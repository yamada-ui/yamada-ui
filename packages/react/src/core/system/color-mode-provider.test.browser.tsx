import { renderHook } from "#test/browser"
import { ColorModeProvider, useColorMode } from "./color-mode-provider"

describe("ColorModeProvider", () => {
  test("provides a color mode to child components", async () => {
    const { result } = await renderHook(() => useColorMode(), {
      wrapper: ({ children }) => (
        <ColorModeProvider>{children}</ColorModeProvider>
      ),
    })

    expect(result.current.colorMode).toBe("light")
  })

  test("allows color mode updates through changeColorMode", async () => {
    const { act, result } = await renderHook(() => useColorMode(), {
      wrapper: ({ children }) => (
        <ColorModeProvider>{children}</ColorModeProvider>
      ),
    })

    await act(() => {
      result.current.changeColorMode("dark")
    })

    expect(result.current.colorMode).toBe("dark")
  })

  test("change system mode", async () => {
    const { act, result } = await renderHook(() => useColorMode(), {
      wrapper: ({ children }) => (
        <ColorModeProvider>{children}</ColorModeProvider>
      ),
    })

    await act(() => {
      result.current.changeColorMode("system")
    })

    expect(result.current.internalColorMode).toBe("system")
  })

  test("toggles color mode between light and dark", async () => {
    const { act, result } = await renderHook(() => useColorMode(), {
      wrapper: ({ children }) => (
        <ColorModeProvider>{children}</ColorModeProvider>
      ),
    })

    await act(() => {
      result.current.toggleColorMode()
    })

    expect(result.current.colorMode).toBe("dark")

    await act(() => {
      result.current.toggleColorMode()
    })

    expect(result.current.colorMode).toBe("light")
  })

  test("forced dark mode", async () => {
    const { result } = await renderHook(() => useColorMode(), {
      wrapper: ({ children }) => (
        <ColorModeProvider colorMode="dark">{children}</ColorModeProvider>
      ),
    })

    expect(result.current.colorMode).toBe("dark")
  })
})
