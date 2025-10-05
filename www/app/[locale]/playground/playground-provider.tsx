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
  useState,
} from "react"
import { decodeCode, DEFAULT_CODE, encodeCode } from "./utils"

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
   * Update current code without triggering state update
   */
  updateCurrentCode: (code: string) => void
  /**
   * Register a callback that will be invoked when reset is called
   */
  onReset: (callback: () => void) => () => void
}

interface PlaygroundState {
  code: string
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
  updateCurrentCode: createRef<PlaygroundMethods["updateCurrentCode"]>(),
  onReset: createRef<PlaygroundMethods["onReset"]>(),
})

type Controller = ReturnType<typeof createController>

const createMethods = (refs: RefObject<Controller>): PlaygroundMethods => ({
  changeCode: (code) => refs.current.changeCode.current?.(code),
  getCurrentCode: () => refs.current.getCurrentCode.current?.() ?? "",
  getShareUrl: () => refs.current.getShareUrl.current?.() ?? "",
  reset: () => refs.current.reset.current?.(),
  updateCurrentCode: (code) => refs.current.updateCurrentCode.current?.(code),
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

      <Controller ref={controller} />
    </PlaygroundContext>
  )
}

interface ControllerProps {
  ref: RefObject<Controller>
}

const Controller: FC<ControllerProps> = ({ ref }) => {
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const getInitialCode = useCallback(() => {
    const codeParam = searchParams.get("code")
    if (codeParam) {
      const decoded = decodeCode(codeParam)
      return decoded ?? DEFAULT_CODE
    }
    return DEFAULT_CODE
  }, [searchParams])

  const [{ code }, setState] = useState<PlaygroundState>({
    code: getInitialCode(),
  })

  const resetCallbacksRef = useRef<Set<() => void>>(new Set())

  const methods = useMemo<PlaygroundMethods>(
    () => ({
      changeCode: (newCode) => {
        setState((prev) => ({ ...prev, code: newCode }))
      },

      getCurrentCode: () => {
        return code
      },

      getShareUrl: () => {
        const params = new URLSearchParams(Array.from(searchParams.entries()))
        params.set("code", encodeCode(code))
        const relative = `${pathname}?${params.toString()}`
        const origin =
          typeof window !== "undefined" ? window.location.origin : ""
        return origin ? new URL(relative, origin).toString() : relative
      },

      onReset: (callback) => {
        resetCallbacksRef.current.add(callback)

        return () => {
          resetCallbacksRef.current.delete(callback)
        }
      },

      reset: () => {
        setState((prev) => ({ ...prev, code: DEFAULT_CODE }))
        resetCallbacksRef.current.forEach((callback) => {
          callback()
        })
      },

      updateCurrentCode: (newCode) => {
        setState((prev) => ({ ...prev, code: newCode }))
      },
    }),
    [code, pathname, searchParams],
  )

  assignRef(ref.current.changeCode, methods.changeCode)
  assignRef(ref.current.getCurrentCode, methods.getCurrentCode)
  assignRef(ref.current.getShareUrl, methods.getShareUrl)
  assignRef(ref.current.reset, methods.reset)
  assignRef(ref.current.updateCurrentCode, methods.updateCurrentCode)
  assignRef(ref.current.onReset, methods.onReset)

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
