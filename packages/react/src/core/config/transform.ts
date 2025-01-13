import type { TransformOptions } from "./utils"

const transformValues = [
  "rotate(var(--rotate, 0))",
  "scaleX(var(--scale-x, 1))",
  "scaleY(var(--scale-y, 1))",
  "skewX(var(--skew-x, 0))",
  "skewY(var(--skew-y, 0))",
]

export function transform(value: any, _options: TransformOptions) {
  if (value === "auto")
    return [
      "translateX(var(--translate-x, 0))",
      "translateY(var(--translate-y, 0))",
      ...transformValues,
    ].join(" ")

  if (value === "auto-3d")
    return [
      "translate3d(var(--translate-x, 0), var(--translate-y, 0), 0)",
      ...transformValues,
    ].join(" ")

  return value
}
