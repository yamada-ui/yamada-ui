import type { StringLiteral } from "./index.types"

export function cx(...classNames: (string | undefined)[]) {
  return classNames.filter(Boolean).join(" ")
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

const sizeMap: StringLiteral[] = [
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
  "normal",
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

export function transformSize(
  token: string | undefined,
  value: number,
  omitTokens: null | string[] = ["normal"],
): string | undefined {
  if (!token) return undefined

  let resolvedSizeMap = sizeMap

  if (omitTokens)
    resolvedSizeMap = sizeMap.filter((size) => !omitTokens.includes(size))

  const index = resolvedSizeMap.indexOf(token)
  const size = resolvedSizeMap[index + value]

  return size ?? token
}

export function toCamelCase(value: StringLiteral): string {
  return value.toLowerCase().replace(/[_-](.)/g, (_, val) => val.toUpperCase())
}

export function toPascalCase(value: StringLiteral): string {
  return value
    .replace(/[_-](.)/g, (_, val) => val.toUpperCase())
    .replace(/^(.)/, (_, val) => val.toUpperCase())
}

export function toKebabCase(value: StringLiteral): string {
  return value
    .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2")
    .toLowerCase()
    .replace(/^-/, "")
}

export function toTitleCase(value: StringLiteral): string {
  return value
    .replace(/([A-Z])/g, " $1")
    .replace(/[_-](.)/g, (_, val) => ` ${val.toUpperCase()}`)
    .replace(/^./, (str) => str.toUpperCase())
    .trim()
}
