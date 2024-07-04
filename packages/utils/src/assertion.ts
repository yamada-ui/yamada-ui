import type { Dict } from "./index.types"

export const is = (x: any, y: any) =>
  (x === y && (x !== 0 || 1 / x === 1 / y)) || (x !== x && y !== y)

export const isNumber = (value: any): value is number =>
  typeof value === "number"

export const isNotNumber = (value: any): boolean =>
  typeof value !== "number" || Number.isNaN(value) || !Number.isFinite(value)

export const isNumeric = (value: any): boolean =>
  value != null &&
  parseFloat(value.toString()) - parseFloat(value.toString()) + 1 >= 0

export const isString = (value: any): value is string =>
  Object.prototype.toString.call(value) === "[object String]"

export const isBoolean = (value: any): value is boolean =>
  typeof value === "boolean"

export const isUndefined = (value: any): value is undefined =>
  typeof value === "undefined" && value === undefined

export const isNull = (value: any): value is null => value === null

export const isObject = <T extends Dict>(value: any): value is T =>
  value !== null &&
  (typeof value === "object" || typeof value === "function") &&
  !isArray(value)

export const isArray = <T extends any[]>(value: any): value is T =>
  Array.isArray(value)

export const isEmpty = (value: any): boolean =>
  !isArray(value) || !value.length || value.every((v) => v == null)

export const isFunction = <T extends Function = Function>(
  value: any,
): value is T => typeof value === "function"

export const isUnit = (value: any): boolean =>
  /[0-9].*(em|rem|ex|rex|cap|rcap|ch|rch|ic|ric|lh|rlh|vw|svw|lvw|dvw|vh|svh|lvh|dvh|vi|svi|lvi|dvi|vb|svb|lvb|dvb|vmin|svmin|lvmin|dvmin|vmax|svmax|lvmax|dvmax|cm|mm|Q|in|pc|pt|px|%|cqw|cqh|cqi|cqb|cqmin|cqmax)$/.test(
    value,
  )

export const cast = <T>(value: any) => value as T
