import type { StringLiteral } from "./index.types"

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

export function toCamelCase(value: StringLiteral): string {
  return value.toLowerCase().replace(/[_-](.)/g, (_, val) => val.toUpperCase())
}

export function toPascalCase(value: StringLiteral): string {
  return toCamelCase(value).replace(/^(.)/, (_, val) => val.toUpperCase())
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
