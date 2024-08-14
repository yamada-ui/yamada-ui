import type { StringLiteral } from "./index.types"

export const escape = (value: string, replaceValue: string = ""): string =>
  value.replace(/\s+/g, replaceValue)

export const antonym = (value: string): string => {
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

export const toCamelCase = (value: StringLiteral): string =>
  value
    .toLowerCase()
    .replace(/[_-](.)/g, (_, val) => val.toUpperCase())
    .replace(/^(.)/, (_, val) => val.toUpperCase())

export const toKebabCase = (value: StringLiteral): string =>
  value
    .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2")
    .toLowerCase()
    .replace(/^-/, "")

export const toTitleCase = (value: StringLiteral): string =>
  value
    .replace(/([A-Z])/g, " $1")
    .replace(/[_-](.)/g, (_, val) => ` ${val.toUpperCase()}`)
    .replace(/^./, (str) => str.toUpperCase())
    .trim()
