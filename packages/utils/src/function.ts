import { isFunction } from "./assertion"

export const noop = () => {}

export const runIfFunc = <T, U extends Array<any>>(
  valOrFunc: T | ((...funcArgs: U) => T),
  ...args: U
): T => (isFunction(valOrFunc) ? valOrFunc(...args) : valOrFunc)

export const handlerAll =
  <T extends (event: any, ...args: any[]) => void>(
    ...funcs: (T | undefined)[]
  ) =>
  (
    event: T extends (event: infer R, ...args: any[]) => any ? R : never,
    ...args: T extends (event: any, ...args: infer R) => any ? R : never
  ) => {
    funcs.some((func) => {
      func?.(event, ...args)

      return event?.defaultPrevented
    })
  }

export const funcAll =
  <T extends (...args: any[]) => any>(...funcs: (T | undefined)[]) =>
  (...args: T extends (...args: infer R) => any ? R : never) =>
    funcs.forEach((func) => func?.(...args))
