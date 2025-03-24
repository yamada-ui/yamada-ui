import type { DependencyList } from "react"
import { useCallback, useEffect, useRef } from "react"
import { useState } from "react"
import { useMounted } from "../use-mounted"

export type FunctionReturningPromise = (...args: any[]) => Promise<any>

/**
 * `useAsync` is a custom hook that executes an asynchronous function and tracks its state.
 *
 * @see https://yamada-ui.com/hooks/use-async
 */
export function useAsync<T extends FunctionReturningPromise>(
  func: T,
  deps: DependencyList = [],
) {
  const [state, callback] = useAsyncFunc(func, deps, { loading: true })

  useEffect(() => {
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
  deps: DependencyList = [],
  initialState: StateFromFunctionReturningPromise<T> = { loading: false },
): AsyncFnReturn<T> {
  const lastCallId = useRef(0)
  const [mounted] = useMounted()
  const [state, setState] =
    useState<StateFromFunctionReturningPromise<T>>(initialState)

  const callback = useCallback(
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

export type AsyncStateRetry<T> = AsyncState<T> & {
  retry(): void
}

export function useAsyncRetry<T>(
  func: () => Promise<T>,
  deps: DependencyList = [],
) {
  const [attempt, setAttempt] = useState<number>(0)
  const state = useAsync(func, [...deps, attempt])

  const stateLoading = state.loading

  const retry = useCallback(() => {
    if (stateLoading) return

    setAttempt((currentAttempt) => currentAttempt + 1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, stateLoading])

  return { ...state, retry }
}
