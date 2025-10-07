"use client"

import type { FC, PropsWithChildren, RefObject } from "react"
import { assignRef, noop } from "@yamada-ui/react"
import { usePathname, useSearchParams } from "next/navigation"
import {
  createContext,
  createRef,
  use,
  useCallback,
  useMemo,
  useRef,
} from "react"
import { useCodeInitialization } from "./hooks"
import { DEFAULT_CODE, encodeCode } from "./utils"

interface PlaygroundMethods {
  /**
   * Change the code
   */
  changeCode: (code: string) => void
  /**
   * Get current code
   */
  getCurrentCode: () => string
  /**
   * Get current share URL
   */
  getShareUrl: () => string
  /**
   * Reset to default state
   */
  reset: () => void
  /**
   * Subscribe to playground state changes.
   */
  subscribe: (listener: () => void) => () => void
  /**
   * Register a callback that will be invoked when reset is called
   */
  onReset: (callback: () => void) => () => void
}

interface PlaygroundContext {
  /**
   * The playground methods.
   */
  playground: PlaygroundMethods
}

const PlaygroundContext = createContext({} as PlaygroundContext)

const createController = () => ({
  changeCode: createRef<PlaygroundMethods["changeCode"]>(),
  getCurrentCode: createRef<PlaygroundMethods["getCurrentCode"]>(),
  getShareUrl: createRef<PlaygroundMethods["getShareUrl"]>(),
  reset: createRef<PlaygroundMethods["reset"]>(),
  subscribe: createRef<PlaygroundMethods["subscribe"]>(),
  onReset: createRef<PlaygroundMethods["onReset"]>(),
})

type Controller = ReturnType<typeof createController>

const createMethods = (refs: RefObject<Controller>): PlaygroundMethods => ({
  changeCode: (code) => refs.current.changeCode.current?.(code),
  getCurrentCode: () => refs.current.getCurrentCode.current?.() ?? "",
  getShareUrl: () => refs.current.getShareUrl.current?.() ?? "",
  reset: () => refs.current.reset.current?.(),
  subscribe: (listener) => refs.current.subscribe.current?.(listener) ?? noop,
  onReset: (callback) => {
    if (refs.current.onReset.current) {
      return refs.current.onReset.current(callback)
    }
    return noop
  },
})

export interface PlaygroundProviderProps extends PropsWithChildren {}

export const PlaygroundProvider: FC<PlaygroundProviderProps> = ({
  children,
}) => {
  const controller = useRef(createController())

  const value = useMemo(
    () => ({
      playground: createMethods(controller),
    }),
    [],
  )

  return (
    <PlaygroundContext value={value}>
      {children}

      <Controller controllerRef={controller} />
    </PlaygroundContext>
  )
}

interface ControllerProps {
  controllerRef: RefObject<Controller>
}

const Controller: FC<ControllerProps> = ({ controllerRef }) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const initialCode = useCodeInitialization()

  const codeRef = useRef<string>(initialCode)
  const lastSyncedCodeRef = useRef(initialCode)
  const listenersRef = useRef(new Set<() => void>())

  const notify = useCallback(() => {
    listenersRef.current.forEach((listener) => {
      listener()
    })
  }, [])

  if (lastSyncedCodeRef.current !== initialCode) {
    codeRef.current = initialCode
    lastSyncedCodeRef.current = initialCode
    notify()
  }
  const resetCallbacksRef = useRef(new Set<() => void>())

  const methods = useMemo<PlaygroundMethods>(
    () => ({
      changeCode: (newCode) => {
        codeRef.current = newCode
        notify()
      },

      getCurrentCode: () => {
        return codeRef.current
      },

      getShareUrl: () => {
        const params = new URLSearchParams()
        searchParams.forEach((value: string | string[], key: string) => {
          if (Array.isArray(value)) {
            value.forEach((v) => params.append(key, v))
          } else {
            params.set(key, value)
          }
        })
        params.set("code", encodeCode(codeRef.current))
        const relative = `${pathname}?${params.toString()}`
        const origin =
          typeof window !== "undefined" ? window.location.origin : ""
        return origin ? new URL(relative, origin).toString() : relative
      },

      subscribe: (listener) => {
        listenersRef.current.add(listener)

        return () => {
          listenersRef.current.delete(listener)
        }
      },

      onReset: (callback) => {
        resetCallbacksRef.current.add(callback)

        return () => {
          resetCallbacksRef.current.delete(callback)
        }
      },

      reset: () => {
        codeRef.current = DEFAULT_CODE
        lastSyncedCodeRef.current = DEFAULT_CODE
        notify()
        resetCallbacksRef.current.forEach((callback) => {
          callback()
        })
      },
    }),
    [notify, pathname, searchParams],
  )

  assignRef(controllerRef.current.changeCode, methods.changeCode)
  assignRef(controllerRef.current.getCurrentCode, methods.getCurrentCode)
  assignRef(controllerRef.current.getShareUrl, methods.getShareUrl)
  assignRef(controllerRef.current.reset, methods.reset)
  assignRef(controllerRef.current.onReset, methods.onReset)
  assignRef(controllerRef.current.subscribe, methods.subscribe)

  return null
}

/**
 * `usePlayground` is a custom hook for controlling the playground.
 *
 * @see https://yamada-ui.com/hooks/use-playground
 */
export const usePlayground = (): PlaygroundContext => {
  const { playground } = use(PlaygroundContext)

  const context = useMemo(() => ({ playground }), [playground])

  return context
}
