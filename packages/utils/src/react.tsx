import * as React from "react"
import { isNumber, isObject, isString } from "./assertion"

export type MaybeRenderProp<Y> =
  | React.ReactNode
  | ((props: Y) => React.ReactNode)

interface Options<ContextType extends any = any> {
  strict?: boolean
  errorMessage?: string
  name?: string
  defaultValue?: ContextType
}

type CreateContextReturn<T> = [React.Provider<T>, () => T, React.Context<T>]

export function createContext<ContextType extends any = any>({
  strict = true,
  errorMessage = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
  name,
  defaultValue,
}: Options<ContextType> = {}) {
  const Context = React.createContext<ContextType | undefined>(defaultValue)

  Context.displayName = name

  const useContext = () => {
    const context = React.useContext(Context)

    if (!context && strict) {
      const error = new Error(errorMessage)
      error.name = "ContextError"
      Error.captureStackTrace?.(error, useContext)
      throw error
    }

    return context
  }

  return [
    Context.Provider,
    useContext,
    Context,
  ] as CreateContextReturn<ContextType>
}

export const useSafeLayoutEffect = Boolean(globalThis?.document)
  ? React.useLayoutEffect
  : React.useEffect

export function useUnmountEffect(callback: () => void) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return React.useEffect(() => () => callback(), [])
}

export interface UseIsMountedProps {
  rerender?: boolean
  delay?: number
}

export function useIsMounted({
  rerender = false,
  delay = 0,
}: UseIsMountedProps = {}): [() => boolean, boolean] {
  const isMountedRef = React.useRef(false)
  const [isMounted, setIsMounted] = React.useState(false)

  useSafeLayoutEffect(() => {
    isMountedRef.current = true

    let timeoutId: any = null

    if (rerender) {
      if (delay > 0) {
        timeoutId = setTimeout(() => setIsMounted(true), delay)
      } else {
        setIsMounted(true)
      }
    }

    return () => {
      isMountedRef.current = false

      if (rerender) setIsMounted(false)

      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [delay, rerender])

  return [React.useCallback(() => isMountedRef.current, []), isMounted]
}

export type UseIsMountedReturn = ReturnType<typeof useIsMounted>

export function getValidChildren(
  children: React.ReactNode,
): React.ReactElement[] {
  return React.Children.toArray(children).filter((child) =>
    React.isValidElement(child),
  )
}

export function isValidElement(child: any): child is React.ReactNode {
  return React.isValidElement(child) || isString(child) || isNumber(child)
}

export function isSomeElement(child: any, type: any): boolean {
  if (child.type === type) return true

  if (!!child.__ui__ && !!type.__ui__) {
    if (child.__ui__ === type.__ui__) return true
  }

  const payload = child.type._payload

  if (!!payload?.value?.__ui__ && !!type.__ui__) {
    if (payload?.value?.__ui__ === type.__ui__) return true
  }

  return false
}

export function findChild(
  children: React.ReactElement[],
  ...types: (string | React.JSXElementConstructor<any>)[]
): React.ReactElement | undefined {
  const child = children.find((child) =>
    types.some((type) => isSomeElement(child, type)),
  )

  return child
}

export function findChildren(
  children: React.ReactElement[],
  ...types: (string | React.JSXElementConstructor<any>)[]
): [React.ReactElement | undefined, ...React.ReactElement[]] {
  const child = children.find((child) =>
    types.some((type) => isSomeElement(child, type)),
  )

  if (child) {
    return children.sort((a, b) => {
      if (types.some((type) => isSomeElement(a, type))) {
        return -1
      } else if (types.some((type) => isSomeElement(b, type))) {
        return 1
      } else {
        return 0
      }
    }) as [React.ReactElement | undefined, ...React.ReactElement[]]
  } else {
    return [undefined, ...children]
  }
}

export function includesChildren(
  children: React.ReactElement[],
  ...types: (string | React.JSXElementConstructor<any>)[]
): boolean {
  return children.some((child) => {
    if (types.some((type) => isSomeElement(child, type))) return true

    const children = getValidChildren(child.props.children)

    return children.length ? includesChildren(children, ...types) : false
  })
}

export function omitChildren(
  children: React.ReactElement[],
  ...types: (string | React.JSXElementConstructor<any>)[]
): React.ReactElement[] {
  return children.filter((child) =>
    types.every((type) => !isSomeElement(child, type)),
  )
}

export function pickChildren(
  children: React.ReactElement[],
  ...types: (string | React.JSXElementConstructor<any>)[]
): React.ReactElement[] {
  return children.filter((child) =>
    types.every((type) => isSomeElement(child, type)),
  )
}

export function cx(...classNames: (string | undefined)[]) {
  return classNames.filter(Boolean).join(" ")
}

type ReactRef<T> = React.Ref<T> | React.MutableRefObject<T> | React.LegacyRef<T>

export function isRefObject(val: any): val is { current: any } {
  return isObject(val) && "current" in val
}

export function assignRef<T extends any = any>(
  ref: ReactRef<T> | undefined,
  value: T,
) {
  if (ref == null) return

  if (typeof ref === "function") {
    ref(value)

    return
  }

  try {
    // @ts-ignore
    ref.current = value
  } catch {
    throw new Error(`Cannot assign value '${value}' to ref '${ref}'`)
  }
}

export function mergeRefs<T extends any = any>(
  ...refs: (ReactRef<T> | null | undefined)[]
) {
  return function (node: T | null) {
    return refs.forEach((ref) => {
      assignRef(ref, node)
    })
  }
}

export function useMergeRefs<T extends any = any>(
  ...refs: (ReactRef<T> | undefined)[]
) {
  return React.useMemo(() => mergeRefs(...refs), [refs])
}

export function useCallbackRef<T extends (...args: any[]) => any>(
  callback: T | undefined,
  deps: React.DependencyList = [],
) {
  const callbackRef = React.useRef(callback)

  React.useEffect(() => {
    callbackRef.current = callback
  })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return React.useCallback(
    ((...args) => callbackRef.current?.(...args)) as T,
    deps,
  )
}

/**
 * `useUpdateEffect` is a custom hook that skips side effects on the initial render, and only runs them when the dependency array changes.
 *
 * @see Docs https://yamada-ui.com/hooks/use-update-effect
 */
export function useUpdateEffect(
  callback: React.EffectCallback,
  deps: React.DependencyList,
) {
  const renderCycleRef = React.useRef(false)
  const effectCycleRef = React.useRef(false)

  React.useEffect(() => {
    const mounted = renderCycleRef.current
    const run = mounted && effectCycleRef.current

    if (run) return callback()

    effectCycleRef.current = true
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  React.useEffect(() => {
    renderCycleRef.current = true

    return () => {
      renderCycleRef.current = false
    }
  }, [])
}

export type FunctionReturningPromise = (...args: any[]) => Promise<any>

/**
 * `useAsync` is a custom hook that executes an asynchronous function and tracks its state.
 *
 * @see Docs https://yamada-ui.com/hooks/use-async
 */
export function useAsync<T extends FunctionReturningPromise>(
  func: T,
  deps: React.DependencyList = [],
) {
  const [state, callback] = useAsyncFunc(func, deps, { loading: true })

  React.useEffect(() => {
    callback()
  }, [callback])

  return state
}

export type AsyncState<T> =
  | {
      loading: boolean
      error?: undefined
      value?: undefined
    }
  | {
      loading: true
      error?: Error | undefined
      value?: T
    }
  | {
      loading: false
      error: Error
      value?: undefined
    }
  | {
      loading: false
      error?: undefined
      value: T
    }

export type PromiseType<P extends Promise<any>> =
  P extends Promise<infer T> ? T : never

type StateFromFunctionReturningPromise<T extends FunctionReturningPromise> =
  AsyncState<PromiseType<ReturnType<T>>>

export type AsyncFnReturn<
  T extends FunctionReturningPromise = FunctionReturningPromise,
> = [StateFromFunctionReturningPromise<T>, T]

export function useAsyncFunc<T extends FunctionReturningPromise>(
  func: T,
  deps: React.DependencyList = [],
  initialState: StateFromFunctionReturningPromise<T> = { loading: false },
): AsyncFnReturn<T> {
  const lastCallId = React.useRef(0)
  const [isMounted] = useIsMounted()
  const [state, setState] =
    React.useState<StateFromFunctionReturningPromise<T>>(initialState)

  const callback = React.useCallback(
    (...args: Parameters<T>): ReturnType<T> => {
      const callId = ++lastCallId.current

      if (!state.loading)
        setState((prevState) => ({ ...prevState, loading: true }))

      return func(...args).then(
        (value) => {
          if (isMounted() && callId === lastCallId.current)
            setState({ value, loading: false })

          return value
        },
        (error) => {
          if (isMounted() && callId === lastCallId.current)
            setState({ error, loading: false })

          return error
        },
      ) as ReturnType<T>
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps,
  )

  return [state, callback as unknown as T]
}

export type AsyncStateRetry<T> = AsyncState<T> & {
  retry(): void
}

export function useAsyncRetry<T>(
  func: () => Promise<T>,
  deps: React.DependencyList = [],
) {
  const [attempt, setAttempt] = React.useState<number>(0)
  const state = useAsync(func, [...deps, attempt])

  const stateLoading = state.loading

  const retry = React.useCallback(() => {
    if (stateLoading) return

    setAttempt((currentAttempt) => currentAttempt + 1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, stateLoading])

  return { ...state, retry }
}

let createIdCounter: number = 0

export function createId(prefix: string) {
  return `${prefix}-${++createIdCounter}-${new Date().getTime()}`
}
