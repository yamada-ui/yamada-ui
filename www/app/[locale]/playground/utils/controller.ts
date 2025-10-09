import type { RefObject } from "react"
import { assignRef, noop } from "@yamada-ui/react"
import { createRef } from "react"

/**
 * Creates a controller with refs for each method
 * The RefObject's current property can be T[K] or null.
 */
export const createControllerRefs = <T extends { [key: string]: any }>(
  methods: T,
): { [K_key in keyof T]: RefObject<null | T[K_key]> } => {
  const refs = {} as { [K_key in keyof T]: RefObject<null | T[K_key]> }

  for (const key in methods) {
    refs[key] = createRef<T[typeof key]>()
  }

  return refs
}

/**
 * Creates methods that call the corresponding refs
 */
export const createControllerMethods = <
  T extends { [key: string]: Function },
>(refs: { [K in keyof T]: RefObject<null | T[K]> }): T => {
  const methods = {} as T

  for (const key in refs) {
    if (Object.hasOwn(refs, key)) {
      const ref = refs[key]
      methods[key] = ((...args: any[]) => {
        return ref.current?.(...args)
      }) as unknown as T[typeof key]
    }
  }

  return methods
}

/**
 * Assigns methods to their corresponding refs
 */
export const assignControllerMethods = <T extends { [key: string]: any }>(
  refs: { [K in keyof T]: RefObject<null | T[K]> },
  methods: T,
): void => {
  for (const key in methods) {
    if (Object.hasOwn(refs, key)) {
      assignRef(refs[key], methods[key])
    }
  }
}

/**
 * Creates a safe unsubscribe function
 */
export const createSafeUnsubscribe = (
  unsubscribe: (() => void) | undefined,
): (() => void) => {
  return unsubscribe ?? noop
}
