import { renderHook } from "../../../test"
import { ColorModeProvider } from "../../providers/color-mode-provider"
import { ThemeProvider } from "../../providers/theme-provider"
import { useToken } from "./"

const theme = {
  colors: {
    gray: {
      50: "#dedfe3",
      100: "#d3d5da",
      200: "#b7bbc3",
      300: "#9ea3ae",
      400: "#828997",
      500: "#6b7280",
      600: "#565c67",
      700: "#434851",
      800: "#2e3138",
      900: "#1c1e21",
      950: "#101113",
    },
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
  semantics: {
    colors: {
      primary: "gray.500",
      secondary: ["pink.500", "pink.400"],
      tertiary: ["#000000", "#ffffff"],
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
  transitions: {
    duration: {
      faster: "100ms",
      fast: "150ms",
      normal: "200ms",
      slow: "300ms",
      slower: "400ms",
      "ultra-fast": "50ms",
      "ultra-slow": "500ms",
    },

    easing: {
      "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
      "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
      "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
    },

    property: {
      background: "background-color, background-image, background-position",
      colors: "background-color, border-color, color, fill, stroke",
      common:
        "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
      dimensions: "width, height",
      position: "left, right, top, bottom",
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

    expect(result.current).toBe("#6b7280")
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

  test("correctly retrieves the value for semantics", () => {
    const { result } = renderHook(() => useToken("colors", "primary"), {
      wrapper: ({ children }) => (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      ),
    })

    expect(result.current).toBe("#6b7280")
  })

  test("correctly retrieves the value for semantics in light mode", () => {
    const { result } = renderHook(() => useToken("colors", "secondary"), {
      wrapper: ({ children }) => (
        <ThemeProvider theme={theme}>
          <ColorModeProvider>{children}</ColorModeProvider>
        </ThemeProvider>
      ),
    })

    expect(result.current).toBe("#ff4281")
  })

  test("correctly retrieves the value for semantics in dark mode", () => {
    const { result } = renderHook(() => useToken("colors", "secondary"), {
      wrapper: ({ children }) => (
        <ThemeProvider theme={theme}>
          <ColorModeProvider colorMode="dark">{children}</ColorModeProvider>
        </ThemeProvider>
      ),
    })

    expect(result.current).toBe("#ff78a5")
  })

  test("returns the semantic value if no related token is found for semantics", () => {
    const { result: result1 } = renderHook(
      () => useToken("colors", "tertiary"),
      {
        wrapper: ({ children }) => (
          <ThemeProvider theme={theme}>
            <ColorModeProvider>{children}</ColorModeProvider>
          </ThemeProvider>
        ),
      },
    )
    const { result: result2 } = renderHook(
      () => useToken("colors", "tertiary"),
      {
        wrapper: ({ children }) => (
          <ThemeProvider theme={theme}>
            <ColorModeProvider colorMode="dark">{children}</ColorModeProvider>
          </ThemeProvider>
        ),
      },
    )

    expect(result1.current).toBe("#000000")
    expect(result2.current).toBe("#ffffff")
  })
})
