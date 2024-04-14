import type { AnimationStyle } from "@yamada-ui/core"
import { ColorModeProvider, ThemeProvider } from "@yamada-ui/core"
import { act, renderHook, waitFor } from "@yamada-ui/test"
import { useAnimation, useAnimationObserver, useDynamicAnimation } from "../src"

const theme = {
  animations: {},
  transitions: {
    property: {
      common:
        "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
      colors: "background-color, border-color, color, fill, stroke",
      dimensions: "width, height",
      position: "left, right, top, bottom",
      background: "background-color, background-image, background-position",
    },

    easing: {
      "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
      "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
      "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
    },

    duration: {
      "ultra-fast": "50ms",
      faster: "100ms",
      fast: "150ms",
      normal: "200ms",
      slow: "300ms",
      slower: "400ms",
      "ultra-slow": "500ms",
    },
  },
}

describe("useAnimation", () => {
  test("should generate a single animation string", () => {
    const style: AnimationStyle = {
      keyframes: {
        "0%": {
          bg: "red.500",
        },
        "20%": {
          bg: "green.500",
        },
        "40%": {
          bg: "purple.500",
        },
        "60%": {
          bg: "yellow.500",
        },
        "80%": {
          bg: "blue.500",
        },
        "100%": {
          bg: "red.500",
        },
      },
      duration: "10s",
      iterationCount: "infinite",
      timingFunction: "linear",
    }

    const { result } = renderHook(() => useAnimation(style), {
      wrapper: ({ children }) => (
        <ThemeProvider theme={theme}>
          <ColorModeProvider>{children}</ColorModeProvider>
        </ThemeProvider>
      ),
    })

    expect(result.current).toMatch(
      /animation-.* 10s linear 0s infinite normal none running/,
    )
  })

  test("should generate a multi animation string", () => {
    const style: AnimationStyle[] = [
      {
        keyframes: {
          "0%": {
            bg: "red.500",
          },
          "20%": {
            bg: "green.500",
          },
          "40%": {
            bg: "purple.500",
          },
          "60%": {
            bg: "yellow.500",
          },
          "80%": {
            bg: "blue.500",
          },
          "100%": {
            bg: "red.500",
          },
        },
        duration: "10s",
        iterationCount: "infinite",
        timingFunction: "linear",
      },
      {
        keyframes: {
          "0%": {
            h: "xs",
          },
          "50%": {
            h: "md",
          },
          "100%": {
            h: "xs",
          },
        },
        duration: "10s",
        iterationCount: "infinite",
        timingFunction: "linear",
      },
      {
        keyframes: {
          "0%": {
            w: "full",
          },
          "50%": {
            w: "50%",
          },
          "100%": {
            w: "full",
          },
        },
        duration: "10s",
        iterationCount: "infinite",
        timingFunction: "linear",
      },
    ]

    const { result } = renderHook(() => useAnimation(style), {
      wrapper: ({ children }) => (
        <ThemeProvider theme={theme}>
          <ColorModeProvider>{children}</ColorModeProvider>
        </ThemeProvider>
      ),
    })

    expect(result.current).toMatch(
      /animation-.* 10s linear 0s infinite normal none running, animation-.* 10s linear 0s infinite normal none running, animation-.* 10s linear 0s infinite normal none running/,
    )
  })
})

describe("useDynamicAnimation", () => {
  test("A animation should be changed dynamically", async () => {
    const style: Record<string, AnimationStyle> = {
      moveLeft: {
        keyframes: {
          "0%": {
            transform: "translateX(400%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
        duration: "slower",
        fillMode: "forwards",
        timingFunction: "ease-in-out",
      },
      moveRight: {
        keyframes: {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(400%)",
          },
        },
        duration: "slow",
        fillMode: "forwards",
        timingFunction: "ease-out",
      },
    }

    const { result } = renderHook(
      () => useDynamicAnimation(style, "moveLeft"),
      {
        wrapper: ({ children }) => (
          <ThemeProvider theme={theme}>
            <ColorModeProvider>{children}</ColorModeProvider>
          </ThemeProvider>
        ),
      },
    )

    expect(result.current[0]).toMatch(
      /animation-.* var\(--ui-transitions-duration-slower\) var\(--ui-transitions-easing-ease-in-out\) 0s 1 normal forwards running/,
    )

    await waitFor(() => {
      result.current[1]("moveRight")
    })

    expect(result.current[0]).toMatch(
      /animation-.* var\(--ui-transitions-duration-slow\) var\(--ui-transitions-easing-ease-out\) 0s 1 normal forwards running/,
    )
  })

  test("Multi animation should be changed dynamically", async () => {
    const style: Record<string, AnimationStyle[]> = {
      moveLeft: [
        {
          keyframes: {
            "0%": {
              transform: "translateX(400%)",
            },
            "100%": {
              transform: "translateX(0%)",
            },
          },
          duration: "slower",
          fillMode: "forwards",
          timingFunction: "ease-in-out",
        },
        {
          keyframes: {
            "0%": {
              bg: "secondary",
            },
            "100%": {
              bg: "primary",
            },
          },
          duration: "slower",
          fillMode: "forwards",
          timingFunction: "ease-in-out",
        },
      ],
      moveRight: [
        {
          keyframes: {
            "0%": {
              transform: "translateX(0%)",
            },
            "100%": {
              transform: "translateX(400%)",
            },
          },
          duration: "slower",
          fillMode: "forwards",
          timingFunction: "ease-in-out",
        },
        {
          keyframes: {
            "0%": {
              bg: "primary",
            },
            "100%": {
              bg: "secondary",
            },
          },
          duration: "slower",
          fillMode: "forwards",
          timingFunction: "ease-in-out",
        },
      ],
    }

    const { result } = renderHook(
      () => useDynamicAnimation(style, "moveLeft"),
      {
        wrapper: ({ children }) => (
          <ThemeProvider theme={theme}>
            <ColorModeProvider>{children}</ColorModeProvider>
          </ThemeProvider>
        ),
      },
    )

    expect(result.current[0]).toMatch(
      /animation-.* var\(--ui-transitions-duration-slower\) var\(--ui-transitions-easing-ease-in-out\) 0s 1 normal forwards running, animation-.* var\(--ui-transitions-duration-slower\) var\(--ui-transitions-easing-ease-in-out\) 0s 1 normal forwards running/,
    )

    await waitFor(() => {
      result.current[1]("moveRight")
    })

    expect(result.current[0]).toMatch(
      /animation-.* var\(--ui-transitions-duration-slower\) var\(--ui-transitions-easing-ease-in-out\) 0s 1 normal forwards running, animation-.* var\(--ui-transitions-duration-slower\) var\(--ui-transitions-easing-ease-in-out\) 0s 1 normal forwards running/,
    )
  })

  test("Should accept multiple keys", async () => {
    const style: Record<string, AnimationStyle> = {
      moveLeft: {
        keyframes: {
          "0%": {
            transform: "translateX(400%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
        duration: "slower",
        fillMode: "forwards",
        timingFunction: "ease-in-out",
      },
      gradients: {
        keyframes: {
          "0%": {
            bg: "red.500",
          },
          "20%": {
            bg: "green.500",
          },
          "40%": {
            bg: "purple.500",
          },
          "60%": {
            bg: "yellow.500",
          },
          "80%": {
            bg: "blue.500",
          },
          "100%": {
            bg: "red.500",
          },
        },
        duration: "10s",
        iterationCount: "infinite",
        timingFunction: "linear",
      },
      moveRight: {
        keyframes: {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(400%)",
          },
        },
        duration: "slower",
        fillMode: "forwards",
        timingFunction: "ease-in-out",
      },
    }

    const { result } = renderHook(
      () => useDynamicAnimation(style, ["moveLeft", "gradients"]),
      {
        wrapper: ({ children }) => (
          <ThemeProvider theme={theme}>
            <ColorModeProvider>{children}</ColorModeProvider>
          </ThemeProvider>
        ),
      },
    )

    expect(result.current[0]).toMatch(
      /animation-.* var\(--ui-transitions-duration-slower\) var\(--ui-transitions-easing-ease-in-out\) 0s 1 normal forwards running, animation-.* 10s linear 0s infinite normal none running/,
    )

    await waitFor(() => {
      result.current[1](["moveRight", "gradients"])
    })

    expect(result.current[0]).toMatch(
      /animation-.* var\(--ui-transitions-duration-slower\) var\(--ui-transitions-easing-ease-in-out\) 0s 1 normal forwards running, animation-.* 10s linear 0s infinite normal none running/,
    )
  })

  test("Should be undefined if no default key is set", async () => {
    const style: Record<string, AnimationStyle> = {
      moveLeft: {
        keyframes: {},
      },
      moveRight: {
        keyframes: {},
      },
    }

    const { result } = renderHook(() => useDynamicAnimation(style), {
      wrapper: ({ children }) => (
        <ThemeProvider theme={theme}>
          <ColorModeProvider>{children}</ColorModeProvider>
        </ThemeProvider>
      ),
    })

    expect(result.current[0]).toBeUndefined()
  })
})

describe("useAnimationObserver", () => {
  test("should handle open and close animations correctly", () => {
    let isOpen = false
    const ref = { current: document.createElement("div") }
    const { result, rerender } = renderHook(() =>
      useAnimationObserver({ isOpen, ref }),
    )

    expect(result.current.present).toBeFalsy()

    isOpen = true
    rerender()

    act(() => {
      result.current.onAnimationComplete()
    })

    expect(result.current.present).toBeTruthy()

    isOpen = false
    rerender()

    act(() => {
      result.current.onAnimationComplete()
    })

    expect(result.current.present).toBeFalsy()
  })
})
