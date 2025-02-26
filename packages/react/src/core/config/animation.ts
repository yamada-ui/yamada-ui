import type { Dict } from "../../utils"
import type { TransformOptions } from "./utils"
import { keyframes as emotionKeyframes } from "@emotion/react"
import { StyleSheet } from "@emotion/sheet"
import { createdDom, isObject } from "../../utils"
import { globalValues, tokenToVar } from "./utils"

const styleSheet = createdDom()
  ? new StyleSheet({ key: "css", container: document.head })
  : undefined

function transformAnimationValue(value: Dict) {
  return Object.entries(value).reduce<Dict>((prev, [key, value]) => {
    if (key === "duration") {
      prev.animationDuration = value
    } else if (key === "timingFunction") {
      prev.animationTimingFunction = value
    } else {
      prev[key] = value
    }

    return prev
  }, {})
}

export function insertKeyframes(value: any) {
  const { name, styles } = emotionKeyframes(value)

  styleSheet?.insert(styles)

  return name
}

export function animation(value: any, { css, theme }: TransformOptions) {
  if (value == null || globalValues.has(value)) return value

  if (isObject(value)) {
    const {
      animationDuration = "0s",
      animationName,
      animationTimingFunction = "ease",
      delay = "0s",
      direction = "normal",
      fillMode = "none",
      iterationCount = "1",
      playState = "running",
    } = css?.(theme)(transformAnimationValue(value)) ?? {}

    return `${animationName} ${animationDuration} ${animationTimingFunction} ${delay} ${iterationCount} ${direction} ${fillMode} ${playState}`
  } else if (value.includes(",")) {
    value = value
      .split(",")
      .map((value: string) => {
        value = value.trim()

        value = tokenToVar(theme)("animations", value)

        return value
      })
      .join(",")

    return value
  } else {
    value = tokenToVar(theme)("animations", value)

    return value
  }
}

export function keyframes(value: any, { css, theme }: TransformOptions) {
  if (value == null) return value

  if (isObject(value)) {
    value = css?.(theme)(value)

    const name = insertKeyframes(value)

    return name
  } else {
    return value
  }
}
