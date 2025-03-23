import * as React from "react"
import { isArray, isNumber, isObject, isString } from "./assertion"
import { isUndefined } from "./assertion"
import { noop } from "./function"

export type MaybeRenderProp<Y> =
  | ((props: Y) => React.ReactNode)
  | React.ReactNode

interface Options<Y = any> {
  name?: string
  defaultValue?: Y
  errorMessage?: string
  strict?: boolean
}

type CreateContextReturn<Y> = [React.Provider<Y>, () => Y, React.Context<Y>]

export function createContext<Y = any>(options: {
  name?: string
  defaultValue?: Y
  errorMessage?: string
  strict?: true
}): CreateContextReturn<Y>

export function createContext<Y = any>(options: {
  name?: string
  defaultValue?: Y
  errorMessage?: string
  strict?: false
}): CreateContextReturn<undefined | Y>

export function createContext<Y = any>({
  name,
  defaultValue,
  errorMessage = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
  strict = true,
}: Options<Y> = {}) {
  const Context = React.createContext<undefined | Y>(defaultValue)

  Context.displayName = name

  const useContext = () => {
    const context = React.useContext(Context)

    if (!context && strict) {
      const error = new Error(errorMessage)
      error.name = "ContextError"
      Error.captureStackTrace(error, useContext)
      throw error
    }

    return context
  }

  return [Context.Provider, useContext, Context] as CreateContextReturn<
    undefined | Y
  >
}

export const useSafeLayoutEffect = Boolean(globalThis.document)
  ? React.useLayoutEffect
  : React.useEffect

export function useUnmountEffect(callback: () => void) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return React.useEffect(() => () => callback(), [])
}

/**
 * @deprecated Use `UseMountedProps` instead.
 */
export type UseIsMountedProps = UseMountedProps

/**
 * @deprecated Use `useMounted` instead.
 */
export const useIsMounted = useMounted

/**
 * @deprecated Use `UseMountedReturn` instead.
 */
export type UseIsMountedReturn = UseMountedReturn

export interface UseMountedProps {
  delay?: number
  rerender?: boolean
}

export function useMounted({
  delay = 0,
  rerender = false,
}: UseMountedProps = {}): [() => boolean, boolean] {
  const mountedRef = React.useRef(false)
  const [mounted, setMounted] = React.useState(false)

  useSafeLayoutEffect(() => {
    mountedRef.current = true

    let timeoutId: any = null

    if (rerender) {
      if (delay > 0) {
        timeoutId = setTimeout(() => setMounted(true), delay)
      } else {
        setMounted(true)
      }
    }

    return () => {
      mountedRef.current = false

      if (rerender) setMounted(false)

      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [delay, rerender])

  return [React.useCallback(() => mountedRef.current, []), mounted]
}

export type UseMountedReturn = ReturnType<typeof useMounted>

export function useIsSsr() {
  if (typeof React.useSyncExternalStore === "function")
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return React.useSyncExternalStore(
      () => noop,
      () => false,
      () => true,
    )

  return false
}

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

export function isSomeDisplayName(a: any, b: any): boolean {
  if (isUndefined(a) || isUndefined(b)) return false

  if (isArray(a)) {
    if (a.includes(b)) return true
    if (!!b.displayName && a.includes(b.displayName)) return true
    if (!!b.name && a.includes(b.name)) return true
  } else {
    if (a === b) return true
    if (!!a.displayName && !!b.displayName && a.displayName === b.displayName)
      return true
    if (!!a.name && !!b.name && a.name === b.name) return true
    if (!!a.displayName && !!b.name && a.displayName === b.name) return true
    if (!!a.name && !!b.displayName && a.name === b.displayName) return true
  }

  return false
}

export function isSomeElement(a: any, b: any): boolean {
  if (isUndefined(a) || isUndefined(b)) return false

  if (a === b) return true
  /** @deprecated */
  if (!!a.__ui__ && !!b.__ui__ && a.__ui__ === b.__ui__) return true
  if (isSomeDisplayName(a, b)) return true

  a = a._payload?.value

  if (isUndefined(a)) return false

  /** @deprecated */
  if (!!a.__ui__ && !!b.__ui__ && a.__ui__ === b.__ui__) return true
  if (isSomeDisplayName(a, b)) return true

  return false
}

export function findChild(
  children: React.ReactElement[],
  ...types: (React.JSXElementConstructor<any> | string)[]
): React.ReactElement | undefined {
  const child = children.find((child) =>
    types.some((type) => isSomeElement(child.type, type)),
  )

  return child
}

export function findChildren(
  children: React.ReactElement[],
  ...types: (React.JSXElementConstructor<any> | string)[]
): [React.ReactElement | undefined, ...React.ReactElement[]] {
  const child = findChild(children, ...types)

  if (child) {
    return children.sort((a, b) => {
      if (types.some((type) => isSomeElement(a.type, type))) {
        return -1
      } else if (types.some((type) => isSomeElement(b.type, type))) {
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
  ...types: (React.JSXElementConstructor<any> | string)[]
): boolean {
  return children.some((child) => {
    if (types.some((type) => isSomeElement(child.type, type))) return true

    const children = getValidChildren(child.props.children)

    return children.length ? includesChildren(children, ...types) : false
  })
}

export function omitChildren(
  children: React.ReactElement[],
  ...types: (React.JSXElementConstructor<any> | string)[]
): React.ReactElement[] {
  return children.filter((child) =>
    types.every((type) => !isSomeElement(child.type, type)),
  )
}

export function pickChildren(
  children: React.ReactElement[],
  ...types: (React.JSXElementConstructor<any> | string)[]
): React.ReactElement[] {
  return children.filter((child) =>
    types.some((type) => isSomeElement(child.type, type)),
  )
}

export function cx(...classNames: (string | undefined)[]) {
  return classNames.filter(Boolean).join(" ")
}

type ReactRef<T> = React.LegacyRef<T> | React.MutableRefObject<T> | React.Ref<T>

export function isRefObject(val: any): val is { current: any } {
  return isObject(val) && "current" in val
}

export function getRef<Y = HTMLElement>(
  element: React.ReactElement<{ ref: React.Ref<Y> }>,
): React.Ref<Y> | undefined {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get

  if (getter && "isReactWarning" in getter && getter.isReactWarning)
    return (element as unknown as { ref: React.Ref<Y> }).ref

  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get

  if (getter && "isReactWarning" in getter && getter.isReactWarning)
    return element.props.ref

  return element.props.ref || (element as unknown as { ref: React.Ref<Y> }).ref
}

export function assignRef<T = any>(ref: ReactRef<T> | undefined, value: T) {
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

export function mergeRefs<T = any>(
  ...refs: (null | ReactRef<T> | undefined)[]
) {
  return function (node: null | T) {
    return refs.forEach((ref) => {
      assignRef(ref, node)
    })
  }
}

export function useMergeRefs<T = any>(...refs: (ReactRef<T> | undefined)[]) {
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

  return React.useCallback(
    ((...args) => callbackRef.current?.(...args)) as T,
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      error: Error
      loading: false
      value?: undefined
    }
  | {
      loading: boolean
      error?: undefined
      value?: undefined
    }
  | {
      loading: false
      value: T
      error?: undefined
    }
  | {
      loading: true
      error?: Error | undefined
      value?: T
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
  const [mounted] = useMounted()
  const [state, setState] =
    React.useState<StateFromFunctionReturningPromise<T>>(initialState)

  const callback = React.useCallback(
    (...args: Parameters<T>): ReturnType<T> => {
      const callId = ++lastCallId.current

      if (!state.loading)
        setState((prevState) => ({ ...prevState, loading: true }))

      return func(...args).then(
        (value) => {
          if (mounted() && callId === lastCallId.current)
            setState({ loading: false, value })

          return value
        },
        (error) => {
          if (mounted() && callId === lastCallId.current)
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

export type AsyncStateRetry<T> = {
  retry(): void
} & AsyncState<T>

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

let createIdCounter = 0

export function createId(prefix: string) {
  return `${prefix}-${++createIdCounter}-${new Date().getTime()}`
}
