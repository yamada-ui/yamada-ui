import { keyframes as emotionKeyframes } from "@emotion/react"
import { StyleSheet } from "@emotion/sheet"
import type { Dict } from "@yamada-ui/utils"
import { isObject, createdDom } from "@yamada-ui/utils"
import type { Transform } from "./utils"
import { globalValues, tokenToCSSVar } from "./utils"

const styleSheet = createdDom()
  ? new StyleSheet({ key: "css", container: document.head })
  : undefined

const transformAnimationValue = (value: Dict) =>
  Object.entries(value).reduce((prev, [key, value]) => {
    if (key === "duration") {
      prev["animationDuration"] = value
    } else if (key === "timingFunction") {
      prev["animationTimingFunction"] = value
    } else {
      prev[key] = value
    }

    return prev
  }, {} as Dict)

export const animation: Transform = (value, theme, css) => {
  if (value == null || globalValues.has(value)) return value

  if (isObject(value)) {
    const {
      keyframes,
      animationDuration = "0s",
      animationTimingFunction = "ease",
      delay = "0s",
      iterationCount = "1",
      direction = "normal",
      fillMode = "none",
      playState = "running",
    } = css(transformAnimationValue(value))(theme)
    const { name, styles } = emotionKeyframes(keyframes)

    styleSheet?.insert(styles)

    return `${name} ${animationDuration} ${animationTimingFunction} ${delay} ${iterationCount} ${direction} ${fillMode} ${playState}`
  } else if (value.includes(",")) {
    value = value
      .split(",")
      .map((value: string) => {
        value = value.trim()

        value = tokenToCSSVar("animations", value)(theme)

        return value
      })
      .join(",")

    return value
  } else {
    value = tokenToCSSVar("animations", value)(theme)

    return value
  }
}
