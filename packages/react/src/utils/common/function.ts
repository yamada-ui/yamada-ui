import { isFunction } from "./assertion"

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const noop = () => {}

export function runIfFn<Y, U extends any[]>(
  valOrFn: ((...args: U) => Y) | Y,
  ...args: U
): Y {
  return isFunction(valOrFn) ? valOrFn(...args) : valOrFn
}

export function handlerAll<Y extends (ev: any, ...args: any[]) => void>(
  ...fns: (null | undefined | Y)[]
) {
  return function (
    ev: Y extends (ev: infer R, ...args: any[]) => any ? R : never,
    ...args: Y extends (ev: any, ...args: infer R) => any ? R : never
  ) {
    fns.some((fn) => {
      fn?.(ev, ...args)

      return ev?.defaultPrevented
    })
  }
}

export function fnAll<Y extends (...args: any[]) => any>(
  ...fns: (null | undefined | Y)[]
) {
  return function (...args: Y extends (...args: infer R) => any ? R : never) {
    return fns.forEach((fn) => fn?.(...args))
  }
}
