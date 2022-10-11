import { Dict } from '../types'

export const isNumber = (value: any): value is number => typeof value === 'number'

export const isNotNumber = (value: any): boolean =>
  typeof value !== 'number' || Number.isNaN(value) || !Number.isFinite(value)

export const isNumeric = (value: any): boolean =>
  value != null && value - parseFloat(value) + 1 >= 0

export const isString = (value: any): value is string =>
  Object.prototype.toString.call(value) === '[object String]'

export const isUndefined = (value: any): value is undefined =>
  typeof value === 'undefined' && value === undefined

export const isNull = (value: any): value is null => value === null

export const isObject = <T extends Dict>(obj: any): obj is T =>
  obj !== null && (typeof obj === 'object' || typeof obj === 'function') && !Array.isArray(obj)

export const isArray = <T>(value: any): value is T => Array.isArray(value)

export const isFunction = <T extends Function = Function>(value: any): value is T => {
  return typeof value === 'function'
}

export const isUnit = (value: any): boolean => /[0-9].*[px|rem|em|%|vw|vh]$/.test(value)
