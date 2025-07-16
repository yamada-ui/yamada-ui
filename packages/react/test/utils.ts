import { act } from "@testing-library/react"
import { isArray, isString } from "@yamada-ui/utils"

export async function wait(ms = 16) {
  await act(async () => new Promise((resolve) => setTimeout(resolve, ms)))

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
