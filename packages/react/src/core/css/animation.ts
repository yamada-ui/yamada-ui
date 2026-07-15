"use client"

import type { Dict } from "../../utils"
import type { TransformOptions } from "./utils"
import { keyframes as emotionKeyframes } from "@emotion/react"
import { StyleSheet } from "@emotion/sheet"
import { createdDom, getDocument, isObject, isShadowRoot } from "../../utils"
import { globalValues, tokenToVar } from "./utils"

const styleSheets = new WeakMap<Node, StyleSheet>()
const insertedKeyframes = new WeakMap<Node, Set<string>>()

const getStyleSheet = (rootNode?: Document | Node | ShadowRoot) => {
  if (!createdDom()) return

  const container = isShadowRoot(rootNode)
    ? rootNode
    : getDocument(rootNode).head

  let styleSheet = styleSheets.get(container)

  if (!styleSheet) {
    styleSheet = new StyleSheet({ key: "css", container })

    styleSheets.set(container, styleSheet)
  }

  return { container, styleSheet }
}

function transformAnimationValue(value: Dict) {
  return Object.entries(value).reduce<Dict>((prev, [key, value]) => {
    if (key === "keyframes") prev._keyframes = value
    else if (key === "duration") prev.animationDuration = value
    else if (key === "timingFunction") prev.animationTimingFunction = value
    else prev[key] = value

    return prev
  }, {})
}

export function injectKeyframes(
  value: any,
  rootNode?: Document | Node | ShadowRoot,
) {
  const { name, styles } = emotionKeyframes(value)
  const result = getStyleSheet(rootNode)

  if (result) {
    const { container, styleSheet } = result

    let names = insertedKeyframes.get(container)

    if (!names) {
      names = new Set()

      insertedKeyframes.set(container, names)
    }

    if (!names.has(name)) {
      styleSheet.insert(styles)

      names.add(name)
    }
  }

  return name
}

export function animation(
  value: any,
  { css, system, theme }: TransformOptions,
) {
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
    } = css?.(system, theme)(transformAnimationValue(value)) ?? {}

    return `${animationName} ${animationDuration} ${animationTimingFunction} ${delay} ${iterationCount} ${direction} ${fillMode} ${playState}`
  } else if (value.includes(",")) {
    value = value
      .split(",")
      .map((value: string) => {
        value = value.trim()

        value = tokenToVar(system)("animations", value)

        return value
      })
      .join(",")

    return value
  } else {
    value = tokenToVar(system)("animations", value)

    return value
  }
}

export function keyframes(
  value: any,
  { css, system, theme }: TransformOptions,
) {
  if (value == null) return value

  if (isObject(value)) {
    value = css?.(system, theme)(value)

    const name = injectKeyframes(value, system.rootNode)

    return name
  } else {
    return value
  }
}
