import { act } from "@testing-library/react"
import { isArray, isString, wait } from "@yamada-ui/utils"

interface ReactProps {
  [key: string]: unknown
}

export function getReactProps(el: Element | null | undefined): ReactProps {
  if (!el) return {}

  const key = Object.keys(el).find((k) => k.startsWith("__reactProps$"))
  if (!key) return {}

  const value = Reflect.get(el, key)
  if (typeof value !== "object" || value === null) return {}

  return { ...value }
}

export async function waitForAnimationFrame(ms = 16) {
  await act(async () => wait(ms))

  await act(
    async () =>
      new Promise((resolve) => requestAnimationFrame(() => resolve(void 0))),
  )
}

export function filterVisuallyHidden(targetContent: string) {
  return function (content: string, el: Element | null) {
    if (!el || content !== targetContent) return false

    const style = window.getComputedStyle(el)
    const visuallyHiddenStyle = {
      border: ["0", "0px"],
      clipPath: ["rect(0 0 0 0)", "rect(0px 0px 0px 0px)"],
      height: "1px",
      margin: "-1px",
      overflow: "hidden",
      padding: ["0", "0px"],
      position: "absolute",
      whiteSpace: "nowrap",
      width: "1px",
    }

    const isVisuallyHidden = Object.entries(visuallyHiddenStyle).every(
      ([key, value]) => {
        if (isArray(value)) {
          const targetValue = style[key as keyof CSSStyleDeclaration]

          return isString(targetValue) && value.includes(targetValue)
        } else {
          return style[key as keyof CSSStyleDeclaration] === value
        }
      },
    )

    return !isVisuallyHidden
  }
}
