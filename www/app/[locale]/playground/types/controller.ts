import type { RefObject } from "react"

/**
 * Base interface for controller methods
 */
export interface BaseControllerMethods {
  subscribe: (callback: () => void) => () => void
}

/**
 * Interface for controllers that can be reset
 */
export interface ResettableController extends BaseControllerMethods {
  onReset: (callback: () => void) => () => void
}

/**
 * Generic controller creation function type
 */
export type ControllerCreator<T> = () => T

/**
 * Generic methods creation function type
 */
export type MethodsCreator<T, U> = (refs: RefObject<T>) => U
