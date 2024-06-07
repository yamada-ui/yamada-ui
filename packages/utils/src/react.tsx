import * as React from "react"
import { isNumber, isObject, isString } from "./assertion"
import type { Merge } from "./index.types"

type DOMElement = Element & HTMLOrSVGElement

export type DOMAttributes<Y = DOMElement> = React.HTMLAttributes<Y> &
  React.AriaAttributes &
  React.DOMAttributes<Y> & {
    id?: string
    role?: React.AriaRole
    tabIndex?: number
    style?: React.CSSProperties
  }

export type PropGetter<Y = undefined, M = DOMAttributes> = (
  props?: Merge<DOMAttributes, Y>,
  ref?: React.Ref<any>,
) => M & React.RefAttributes<any>

export type RequiredPropGetter<Y = undefined, M = DOMAttributes> = (
  props: Merge<DOMAttributes, Y>,
  ref?: React.Ref<any>,
) => M & React.RefAttributes<any>

export type MaybeRenderProp<Y> =
  | React.ReactNode
  | ((props: Y) => React.ReactNode)

type Options<ContextType extends any = any> = {
  strict?: boolean
  errorMessage?: string
  name?: string
  defaultValue?: ContextType
}

type CreateContextReturn<T> = [React.Provider<T>, () => T, React.Context<T>]

export const createContext = <ContextType extends any = any>({
  strict = true,
  errorMessage = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
  name,
  defaultValue,
}: Options<ContextType> = {}) => {
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

export const useUnmountEffect = (callback: () => void) =>
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(() => () => callback(), [])

export type UseIsMountedProps = {
  rerender?: boolean
  delay?: number
}

export const useIsMounted = ({
  rerender = false,
  delay = 0,
}: UseIsMountedProps = {}): [() => boolean, boolean] => {
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

export const getValidChildren = (
  children: React.ReactNode,
): React.ReactElement[] =>
  React.Children.toArray(children).filter((child) =>
    React.isValidElement(child),
  ) as React.ReactElement[]

export const isValidElement = (child: any): child is React.ReactNode =>
  React.isValidElement(child) || isString(child) || isNumber(child)

export const findChildren = (
  children: React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
  >[],
  ...types: (string | React.JSXElementConstructor<any>)[]
): [React.ReactElement | undefined, ...React.ReactElement[]] =>
  (children.find((child) => types.some((type) => child.type === type))
    ? children.sort((a, b) =>
        types.some((type) => a.type === type)
          ? -1
          : types.some((type) => b.type === type)
            ? 1
            : 0,
      )
    : [undefined, ...children]) as [
    React.ReactElement | undefined,
    ...React.ReactElement[],
  ]

export const includesChildren = (
  children: React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
  >[],
  ...types: (string | React.JSXElementConstructor<any>)[]
): boolean =>
  children.some((child) => {
    if (types.some((type) => child.type === type)) return true

    const children = getValidChildren(child.props.children)

    return children.length ? includesChildren(children, ...types) : false
  })

export const omitChildren = (
  children: React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
  >[],
  ...types: (string | React.JSXElementConstructor<any>)[]
): React.ReactElement[] =>
  children.filter((child) => types.every((type) => child.type !== type))

export const pickChildren = (
  children: React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
  >[],
  ...types: (string | React.JSXElementConstructor<any>)[]
): React.ReactElement[] =>
  children.filter((child) => types.every((type) => child.type === type))

export const cx = (...classNames: (string | undefined)[]) =>
  classNames.filter(Boolean).join(" ")

type ReactRef<T> = React.Ref<T> | React.MutableRefObject<T> | React.LegacyRef<T>

export const isRefObject = (val: any): val is { current: any } =>
  isObject(val) && "current" in val

export const assignRef = <T extends any = any>(
  ref: ReactRef<T> | undefined,
  value: T,
) => {
  if (ref == null) return

  if (typeof ref === "function") {
    ref(value)

    return
  }

  try {
    // @ts-ignore
    ref.current = value
  } catch (error) {
    throw new Error(`Cannot assign value '${value}' to ref '${ref}'`)
  }
}

export const mergeRefs =
  <T extends any = any>(...refs: (ReactRef<T> | null | undefined)[]) =>
  (node: T | null) => {
    refs.forEach((ref) => {
      assignRef(ref, node)
    })
  }

export const useMergeRefs = <T extends any = any>(
  ...refs: (ReactRef<T> | undefined)[]
) => React.useMemo(() => mergeRefs(...refs), [refs])

export const useCallbackRef = <T extends (...args: any[]) => any>(
  callback: T | undefined,
  deps: React.DependencyList = [],
) => {
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
export const useUpdateEffect = (
  callback: React.EffectCallback,
  deps: React.DependencyList,
) => {
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
export const useAsync = <T extends FunctionReturningPromise>(
  func: T,
  deps: React.DependencyList = [],
) => {
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

export const useAsyncFunc = <T extends FunctionReturningPromise>(
  func: T,
  deps: React.DependencyList = [],
  initialState: StateFromFunctionReturningPromise<T> = { loading: false },
): AsyncFnReturn<T> => {
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

export const useAsyncRetry = <T,>(
  func: () => Promise<T>,
  deps: React.DependencyList = [],
) => {
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

export const createId = (prefix: string) =>
  `${prefix}-${++createIdCounter}-${new Date().getTime()}`
