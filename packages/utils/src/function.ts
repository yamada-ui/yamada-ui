import { isFunction } from "."

export const noop = () => {}

export const runIfFunc = <T, U extends Array<any>>(
  valOrFunc: T | ((...funcArgs: U) => T),
  ...args: U
): T => (isFunction(valOrFunc) ? valOrFunc(...args) : valOrFunc)

export const handlerAll =
  <T extends (event: any) => void>(...funcs: (T | undefined)[]) =>
  (event: (T extends (...args: infer R) => any ? R : never)[0]) => {
    funcs.some((func) => {
      func?.(event)

      return event?.defaultPrevented
    })
  }

export const funcAll =
  <T extends (...args: any[]) => any>(...funcs: (T | undefined)[]) =>
  (arg: (T extends (...args: infer R) => any ? R : never)[0]) =>
    funcs.forEach((func) => func?.(arg))
