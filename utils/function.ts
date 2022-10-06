import { isFunction } from 'utils'

export const noop = () => {}

export const runIfFunc = <T, U>(valOrFunc: T | ((...funcArgs: U[]) => T), ...args: U[]): T =>
  isFunction(valOrFunc) ? valOrFunc(...args) : valOrFunc
