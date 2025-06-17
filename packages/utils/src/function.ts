import { isFunction } from "./assertion"

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const noop = () => {}

export function runIfFn<T, U extends any[]>(
  valOrFunc: ((...funcArgs: U) => T) | T,
  ...args: U
): T {
  return isFunction(valOrFunc) ? valOrFunc(...args) : valOrFunc
}

export function handlerAll<T extends (event: any, ...args: any[]) => void>(
  ...funcs: (null | T | undefined)[]
) {
  return function (
    event: T extends (event: infer R, ...args: any[]) => any ? R : never,
    ...args: T extends (event: any, ...args: infer R) => any ? R : never
  ) {
    funcs.some((func) => {
      func?.(event, ...args)

      return event?.defaultPrevented
    })
  }
}

export function fnAll<T extends (...args: any[]) => any>(
  ...funcs: (null | T | undefined)[]
) {
  return function (...args: T extends (...args: infer R) => any ? R : never) {
    return funcs.forEach((func) => func?.(...args))
  }
}
