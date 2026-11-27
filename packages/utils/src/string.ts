import type { AnyString } from "./index.type"
import { isString } from "./assertion"

/**
 * Joins whitespace-separated tokens, keeping the last occurrence of each token.
 * Returns `undefined` when no tokens remain.
 */
export function cx(
  ...classNames: (null | string | undefined)[]
): string | undefined {
  const result = classNames.join(" ").trim()

  if (!result) return undefined

  return [...new Set(result.split(/\s+/).reverse())].reverse().join(" ")
}

export function escape(value: string, replaceValue = ""): string {
  return value.replace(/\s+/g, replaceValue)
}

const antonyms = {
  light: "dark",
  block: "inline",
  bottom: "top",
  dark: "light",
  down: "up",
  end: "start",
  enter: "exit",
  exit: "enter",
  horizontal: "vertical",
  inline: "block",
  left: "right",
  right: "left",
  start: "end",
  top: "bottom",
  up: "down",
  vertical: "horizontal",
  x: "y",
  y: "x",
} as const

type Antonyms = typeof antonyms

export function antonym<Y extends AnyString>(
  value: Y,
): Y extends keyof Antonyms ? Antonyms[Y] : Y
export function antonym(value: AnyString): AnyString {
  return Object.prototype.hasOwnProperty.call(antonyms, value)
    ? antonyms[value as keyof Antonyms]
    : value
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

export function match(
  value: string,
  query: string,
  strategy: "contains" | "endsWith" | "equals" | "startsWith" = "contains",
) {
  switch (strategy) {
    case "contains":
      return value.toLowerCase().includes(query.toLowerCase())
    case "endsWith":
      return value.toLowerCase().endsWith(query.toLowerCase())
    case "equals":
      return value.toLowerCase() === query.toLowerCase()
    case "startsWith":
      return value.toLowerCase().startsWith(query.toLowerCase())
  }
}
