"use client"

import type { DependencyList } from "react"
import { useCallback, useEffect, useRef, useState } from "react"
import { useMounted } from "../use-mounted"

export type FunctionReturningPromise = (...args: any[]) => Promise<any>

/**
 * `useAsync` is a custom hook that executes an asynchronous function and tracks its state.
 *
 * @see https://yamada-ui.com/docs/hooks/use-async
 */
export function useAsync<Y extends FunctionReturningPromise>(
  func: Y,
  deps: DependencyList = [],
) {
  const [state, callback] = useAsyncFunc(func, deps, { loading: true })

  useEffect(() => {
    callback()
  }, [callback])

  return state
}

export type AsyncState<Y> =
  | {
      error: Error
      loading: false
      value?: undefined
    }
  | {
      error?: Error | undefined
      loading: true
      value?: Y
    }
  | {
      error?: undefined
      loading: boolean
      value?: undefined
    }
  | {
      error?: undefined
      loading: false
      value: Y
    }

export type PromiseType<P extends Promise<any>> =
  P extends Promise<infer Y> ? Y : never

type StateFromFunctionReturningPromise<Y extends FunctionReturningPromise> =
  AsyncState<PromiseType<ReturnType<Y>>>

export type AsyncFnReturn<
  Y extends FunctionReturningPromise = FunctionReturningPromise,
> = [StateFromFunctionReturningPromise<Y>, Y]

export function useAsyncFunc<Y extends FunctionReturningPromise>(
  func: Y,
  deps: DependencyList = [],
  initialState: StateFromFunctionReturningPromise<Y> = { loading: false },
): AsyncFnReturn<Y> {
  const lastCallId = useRef(0)
  const mounted = useMounted()
  const [state, setState] =
    useState<StateFromFunctionReturningPromise<Y>>(initialState)

  const callback = useCallback(
    (...args: Parameters<Y>): ReturnType<Y> => {
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
      ) as ReturnType<Y>
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps,
  )

  return [state, callback as unknown as Y]
}

export type AsyncStateRetry<Y> = AsyncState<Y> & {
  retry(): void
}

export function useAsyncRetry<Y>(
  func: () => Promise<Y>,
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
