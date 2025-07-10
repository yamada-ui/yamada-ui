import type { Dict } from "./index.types"

export function is(x: any, y: any) {
  return (x === y && (x !== 0 || 1 / x === 1 / y)) || (x !== x && y !== y)
}

export function isNumber(value: any): value is number {
  return typeof value === "number"
}

export function isNotNumber(value: any): boolean {
  return (
    typeof value !== "number" || Number.isNaN(value) || !Number.isFinite(value)
  )
}

export function isNumeric(value: any): boolean {
  return (
    !isNaN(parseFloat(String(value))) &&
    isFinite(Number(value)) &&
    /^-?\d*\.?\d+$/.test(String(value))
  )
}

export function isString(value: any): value is string {
  return Object.prototype.toString.call(value) === "[object String]"
}

export function isBooleanish(value: any): value is boolean {
  return isBoolean(value) || value === "true" || value === "false"
}

export function isBoolean(value: any): value is boolean {
  return typeof value === "boolean"
}

export function isUndefined(value: any): value is undefined {
  return typeof value === "undefined"
}

export function isNull(value: any): value is null {
  return value === null
}

export function isRegExp(value: any): value is RegExp {
  return value instanceof RegExp
}

export function isObject<T extends Dict>(value: any): value is T {
  return (
    value !== null &&
    (typeof value === "object" || typeof value === "function") &&
    !isArray(value)
  )
}

export function isArray<T extends any[]>(value: any): value is T {
  return Array.isArray(value)
}

export function isEmpty(value: any): boolean {
  return !isArray(value) || !value.length || value.every((v) => v == null)
}

export function isEmptyObject(value: any): boolean {
  return isObject(value) && !Object.keys(value).length
}

export function isFunction<T extends Function = Function>(
  value: any,
): value is T {
  return typeof value === "function"
}

export function isUnit(value: any): boolean {
  return /[0-9].*(em|rem|ex|rex|cap|rcap|ch|rch|ic|ric|lh|rlh|vw|svw|lvw|dvw|vh|svh|lvh|dvh|vi|svi|lvi|dvi|vb|svb|lvb|dvb|vmin|svmin|lvmin|dvmin|vmax|svmax|lvmax|dvmax|cm|mm|Q|in|pc|pt|px|%|cqw|cqh|cqi|cqb|cqmin|cqmax)$/.test(
    value,
  )
}

export function cast<T>(value: any) {
  return value as T
}
