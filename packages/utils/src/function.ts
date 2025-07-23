import { isFunction } from "./assertion"

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const noop = () => {}

export function runIfFn<T, U extends any[]>(
  valOrFn: ((...args: U) => T) | T,
  ...args: U
): T {
  return isFunction(valOrFn) ? valOrFn(...args) : valOrFn
}

export function handlerAll<T extends (ev: any, ...args: any[]) => void>(
  ...fns: (null | T | undefined)[]
) {
  return function (
    ev: T extends (ev: infer R, ...args: any[]) => any ? R : never,
    ...args: T extends (ev: any, ...args: infer R) => any ? R : never
  ) {
    fns.some((fn) => {
      fn?.(ev, ...args)

      return ev?.defaultPrevented
    })
  }
}

export function fnAll<T extends (...args: any[]) => any>(
  ...fns: (null | T | undefined)[]
) {
  return function (...args: T extends (...args: infer R) => any ? R : never) {
    return fns.forEach((fn) => fn?.(...args))
  }
}
