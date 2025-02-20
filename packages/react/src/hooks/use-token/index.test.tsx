import { renderHook } from "../../../test"
import { ColorModeProvider } from "../../providers/color-mode-provider"
import { ThemeProvider } from "../../providers/theme-provider"
import { defaultTheme } from "../../theme"
import { useToken } from "./"

const theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    pink: {
      50: ["#ffecf2", "#ffeef4"],
      100: ["#ffd9e6", "#ffdde9"],
      200: ["#ffb4cd", "#ffbcd2"],
      300: ["#ff8eb4", "#ff9abc"],
      400: ["#ff689a", "#ff78a5"],
      500: ["#ff4281", "#ff578f"],
      600: ["#ff1161", "#ff226b"],
      700: ["#df004a", "#ec004f"],
      800: ["#ae003a", "#b7003d"],
      900: ["#7d002a", "#82002b"],
      950: ["#650022", "#670022"],
    },
  },
  styles: {
    layerStyles: {
      muted: { bg: "gray.500" },
    },
    textStyles: {
      gradient: {
        bgClip: "text",
        bgGradient: "linear(to-l, #7928CA, #FF0080)",
        fontSize: "5xl",
        w: "full",
      },
    },
  },
}

describe("useToken", () => {
  test("correctly retrieves the value", () => {
    const { result } = renderHook(() => useToken("colors", "gray.500"), {
      wrapper: ({ children }) => (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      ),
    })

    expect(result.current).toBe("#737373")
  })

  test("returns undefined correctly for an unknown token", () => {
    const { result } = renderHook(() => useToken("colors", "unknown"), {
      wrapper: ({ children }) => (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      ),
    })

    expect(result.current).toBeUndefined()
  })

  test("correctly retrieves the value in light mode", () => {
    const { result } = renderHook(() => useToken("colors", "pink.500"), {
      wrapper: ({ children }) => (
        <ThemeProvider theme={theme}>
          <ColorModeProvider>{children}</ColorModeProvider>
        </ThemeProvider>
      ),
    })

    expect(result.current).toBe("#ff4281")
  })

  test("correctly retrieves the value in dark mode", () => {
    const { result } = renderHook(() => useToken("colors", "pink.500"), {
      wrapper: ({ children }) => (
        <ThemeProvider theme={theme}>
          <ColorModeProvider colorMode="dark">{children}</ColorModeProvider>
        </ThemeProvider>
      ),
    })

    expect(result.current).toBe("#ff578f")
  })

  test("correctly retrieves the value for layerStyle", () => {
    const { result } = renderHook(() => useToken("layerStyles", "muted"), {
      wrapper: ({ children }) => (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      ),
    })

    expect(result.current).toStrictEqual({ bg: "gray.500" })
  })

  test("correctly retrieves the value for textStyle", () => {
    const { result } = renderHook(() => useToken("textStyles", "gradient"), {
      wrapper: ({ children }) => (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      ),
    })

    expect(result.current).toStrictEqual({
      bgClip: "text",
      bgGradient: "linear(to-l, #7928CA, #FF0080)",
      fontSize: "5xl",
      w: "full",
    })
  })
})
