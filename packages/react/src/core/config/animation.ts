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

export function animation(value: any, { css, theme }: TransformOptions) {
  if (value == null || globalValues.has(value)) return value

  if (isObject(value)) {
    const {
      animationDuration = "0s",
      animationTimingFunction = "ease",
      delay = "0s",
      direction = "normal",
      fillMode = "none",
      iterationCount = "1",
      keyframes,
      playState = "running",
    } = css?.(transformAnimationValue(value))(theme) ?? {}
    const { name, styles } = emotionKeyframes(keyframes)

    styleSheet?.insert(styles)

    return `${name} ${animationDuration} ${animationTimingFunction} ${delay} ${iterationCount} ${direction} ${fillMode} ${playState}`
  } else if (value.includes(",")) {
    value = value
      .split(",")
      .map((value: string) => {
        value = value.trim()

        value = tokenToVar("animations", value)(theme)

        return value
      })
      .join(",")

    return value
  } else {
    value = tokenToVar("animations", value)(theme)

    return value
  }
}
