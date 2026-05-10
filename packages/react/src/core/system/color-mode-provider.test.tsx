import { a11y, act, render, renderHook, screen } from "#test"
import { ColorModeProvider, useColorMode } from "./color-mode-provider"
import { useColorModeValue } from "./use-color-mode-value"

describe("ColorModeProvider", () => {
  test("passes a11y", async () => {
    await a11y(
      <ColorModeProvider>
        <div>content</div>
      </ColorModeProvider>,
      { withProvider: false },
    )
  })

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

  test("renders children", () => {
    render(
      <ColorModeProvider>
        <div data-testid="child">child</div>
      </ColorModeProvider>,
      { withProvider: false },
    )

    expect(screen.getByTestId("child")).toBeInTheDocument()
  })
})

describe("useColorModeValue", () => {
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
