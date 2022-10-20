import { isFunction } from './'

export const noop = () => {}

export const runIfFunc = <T, U extends Array<any>>(
  valOrFunc: T | ((...funcArgs: U) => T),
  ...args: U
): T => (isFunction(valOrFunc) ? valOrFunc(...args) : valOrFunc)
