import type { AnimationStyle } from "../../core"
import { useAnimation, useAnimationObserver, useDynamicAnimation } from "."
import { act, renderHook, waitFor } from "../../../test"

describe("useAnimation", () => {
  test("should generate a single animation string", () => {
    const style: AnimationStyle = {
      duration: "10s",
      iterationCount: "infinite",
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
      timingFunction: "linear",
    }

    const { result } = renderHook(() => useAnimation(style))

    expect(result.current).toMatch(
      /animation-.* 10s linear 0s infinite normal none running/,
    )
  })

  test("should generate a multi animation string", () => {
    const style: AnimationStyle[] = [
      {
        duration: "10s",
        iterationCount: "infinite",
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
        timingFunction: "linear",
      },
      {
        duration: "10s",
        iterationCount: "infinite",
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
        timingFunction: "linear",
      },
      {
        duration: "10s",
        iterationCount: "infinite",
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
        timingFunction: "linear",
      },
    ]

    const { result } = renderHook(() => useAnimation(style))

    expect(result.current).toMatch(
      /animation-.* 10s linear 0s infinite normal none running, animation-.* 10s linear 0s infinite normal none running, animation-.* 10s linear 0s infinite normal none running/,
    )
  })
})

describe("useDynamicAnimation", () => {
  test("A animation should be changed dynamically", async () => {
    const style: { [key: string]: AnimationStyle } = {
      moveLeft: {
        duration: "slower",
        fillMode: "forwards",
        keyframes: {
          "0%": {
            transform: "translateX(400%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
        timingFunction: "ease-in-out",
      },
      moveRight: {
        duration: "slow",
        fillMode: "forwards",
        keyframes: {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(400%)",
          },
        },
        timingFunction: "ease-out",
      },
    }

    const { result } = renderHook(() => useDynamicAnimation(style, "moveLeft"))

    expect(result.current[0]).toMatch(
      /animation-.* var\(--ui-durations-slower\) var\(--ui-easings-ease-in-out\) 0s 1 normal forwards running/,
    )

    await waitFor(() => {
      result.current[1]("moveRight")
    })

    expect(result.current[0]).toMatch(
      /animation-.* var\(--ui-durations-slow\) var\(--ui-easings-ease-out\) 0s 1 normal forwards running/,
    )
  })

  test("Multi animation should be changed dynamically", async () => {
    const style: { [key: string]: AnimationStyle[] } = {
      moveLeft: [
        {
          duration: "slower",
          fillMode: "forwards",
          keyframes: {
            "0%": {
              transform: "translateX(400%)",
            },
            "100%": {
              transform: "translateX(0%)",
            },
          },
          timingFunction: "ease-in-out",
        },
        {
          duration: "slower",
          fillMode: "forwards",
          keyframes: {
            "0%": {
              bg: "secondary",
            },
            "100%": {
              bg: "primary",
            },
          },
          timingFunction: "ease-in-out",
        },
      ],
      moveRight: [
        {
          duration: "slower",
          fillMode: "forwards",
          keyframes: {
            "0%": {
              transform: "translateX(0%)",
            },
            "100%": {
              transform: "translateX(400%)",
            },
          },
          timingFunction: "ease-in-out",
        },
        {
          duration: "slower",
          fillMode: "forwards",
          keyframes: {
            "0%": {
              bg: "primary",
            },
            "100%": {
              bg: "secondary",
            },
          },
          timingFunction: "ease-in-out",
        },
      ],
    }

    const { result } = renderHook(() => useDynamicAnimation(style, "moveLeft"))

    expect(result.current[0]).toMatch(
      /animation-.* var\(--ui-durations-slower\) var\(--ui-easings-ease-in-out\) 0s 1 normal forwards running, animation-.* var\(--ui-durations-slower\) var\(--ui-easings-ease-in-out\) 0s 1 normal forwards running/,
    )

    await waitFor(() => {
      result.current[1]("moveRight")
    })

    expect(result.current[0]).toMatch(
      /animation-.* var\(--ui-durations-slower\) var\(--ui-easings-ease-in-out\) 0s 1 normal forwards running, animation-.* var\(--ui-durations-slower\) var\(--ui-easings-ease-in-out\) 0s 1 normal forwards running/,
    )
  })

  test("Should accept multiple keys", async () => {
    const style: { [key: string]: AnimationStyle } = {
      gradients: {
        duration: "10s",
        iterationCount: "infinite",
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
        timingFunction: "linear",
      },
      moveLeft: {
        duration: "slower",
        fillMode: "forwards",
        keyframes: {
          "0%": {
            transform: "translateX(400%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
        timingFunction: "ease-in-out",
      },
      moveRight: {
        duration: "slower",
        fillMode: "forwards",
        keyframes: {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(400%)",
          },
        },
        timingFunction: "ease-in-out",
      },
    }

    const { result } = renderHook(() =>
      useDynamicAnimation(style, ["moveLeft", "gradients"]),
    )

    expect(result.current[0]).toMatch(
      /animation-.* var\(--ui-durations-slower\) var\(--ui-easings-ease-in-out\) 0s 1 normal forwards running, animation-.* 10s linear 0s infinite normal none running/,
    )

    await waitFor(() => {
      result.current[1](["moveRight", "gradients"])
    })

    expect(result.current[0]).toMatch(
      /animation-.* var\(--ui-durations-slower\) var\(--ui-easings-ease-in-out\) 0s 1 normal forwards running, animation-.* 10s linear 0s infinite normal none running/,
    )
  })

  test("Should be undefined if no default key is set", () => {
    const style: { [key: string]: AnimationStyle } = {
      moveLeft: {
        keyframes: {},
      },
      moveRight: {
        keyframes: {},
      },
    }

    const { result } = renderHook(() => useDynamicAnimation(style))

    expect(result.current[0]).toBeUndefined()
  })
})

describe("useAnimationObserver", () => {
  test("should handle open and close animations correctly", () => {
    let isOpen = false
    const ref = { current: document.createElement("div") }
    const { rerender, result } = renderHook(() =>
      useAnimationObserver({ ref, isOpen }),
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
