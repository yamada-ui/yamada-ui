import type { AnyString } from "./index.types"
import { isString } from "./assertion"

export function cx(...classNames: (null | string | undefined)[]) {
  return classNames
    .filter((className) => !!className)
    .map((className) => className!.trim())
    .join(" ")
}

export function escape(value: string, replaceValue = ""): string {
  return value.replace(/\s+/g, replaceValue)
}

export function antonym(value: string): string {
  switch (value) {
    case "top":
      return "bottom"

    case "bottom":
      return "top"

    case "left":
      return "right"

    case "right":
      return "left"

    case "start":
      return "end"

    case "end":
      return "start"

    case "x":
      return "y"

    case "y":
      return "x"

    case "enter":
      return "exit"

    case "exit":
      return "enter"

    case "vertical":
      return "horizontal"

    case "horizontal":
      return "vertical"

    case "up":
      return "down"

    case "down":
      return "up"

    case "block":
      return "inline"

    case "inline":
      return "block"

    default:
      return value
  }
}

const sizeMap: AnyString[] = [
  "9xs",
  "8xs",
  "7xs",
  "6xs",
  "5xs",
  "4xs",
  "3xs",
  "2xs",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
  "3xl",
  "4xl",
  "5xl",
  "6xl",
  "7xl",
  "8xl",
  "9xl",
]

export function isSize(value: any): boolean {
  return isString(value) && sizeMap.includes(value)
}

export function transformSize<Y = string>(
  token: string | undefined,
  value: number,
  omitTokens: null | string[] = null,
): undefined | Y {
  if (!token) return undefined

  let resolvedSizeMap = sizeMap

  if (omitTokens)
    resolvedSizeMap = sizeMap.filter((size) => !omitTokens.includes(size))

  const index = resolvedSizeMap.indexOf(token)
  const size = resolvedSizeMap[index + value]

  return (size ?? token) as Y
}

export function toCamelCase(value: AnyString): string {
  return value
    .replace(/[_-](.)/g, (_, val) => val.toUpperCase())
    .replace(/^(.)/, (_, val) => val.toLowerCase())
}

export function toPascalCase(value: AnyString): string {
  return value
    .replace(/[_-](.)/g, (_, val) => val.toUpperCase())
    .replace(/^(.)/, (_, val) => val.toUpperCase())
}

export function toKebabCase(value: AnyString): string {
  return value
    .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2")
    .toLowerCase()
    .replace(/^-/, "")
}

export function toTitleCase(value: AnyString): string {
  return value
    .replace(/([A-Z])/g, " $1")
    .replace(/[_-](.)/g, (_, val) => ` ${val.toUpperCase()}`)
    .replace(/^./, (str) => str.toUpperCase())
    .trim()
}

export function bem(block: string, element?: string, modifier?: string) {
  let className = block

  if (element) className += `__${element}`
  if (modifier) className += `--${modifier}`

  return className
}
