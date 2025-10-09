import type { RefObject } from "react"
import { assignRef, noop } from "@yamada-ui/react"
import { createRef } from "react"

/**
 * Creates a controller with refs for each method
 */
export const createControllerRefs = <T extends { [key: string]: any }>(
  methods: T,
): { [K in keyof T]: RefObject<T[K]> } => {
  const refs = {} as { [K in keyof T]: RefObject<T[K]> }

  for (const key in methods) {
    refs[key] = createRef<T[K]>()
  }

  return refs
}

/**
 * Creates methods that call the corresponding refs
 */
export const createControllerMethods = <T extends { [key: string]: any }>(
  refs: RefObject<{ [K in keyof T]: RefObject<T[K]> }>,
): T => {
  const methods = {} as T

  for (const key in refs.current) {
    const ref = refs.current[key]
    methods[key] = ((...args: any[]) => {
      return ref.current?.(...args)
    }) as T[Extract<keyof T, string>]
  }

  return methods
}

/**
 * Assigns methods to their corresponding refs
 */
export const assignControllerMethods = <T extends { [key: string]: any }>(
  refs: RefObject<{ [K in keyof T]: RefObject<T[K]> }>,
  methods: T,
): void => {
  for (const key in methods) {
    assignRef(refs.current[key], methods[key])
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
