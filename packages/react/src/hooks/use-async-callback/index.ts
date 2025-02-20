import type { DependencyList } from "react"
import type { LoadingOptions } from "../../components/loading"
import type { LoadingMethod } from "../../components/loading/utils"
import { useCallback, useMemo } from "react"
import { useLoading } from "../../components/loading"
import { useProcessing } from "../../hooks/use-processing"

type Callback = (...args: any[]) => any

export interface UseAsyncCallbackOptions {
  /**
   * The method to use for loading.
   * If `false`, the loading will not be shown.
   */
  loading?: false | LoadingMethod
  /**
   * The options to pass to the loading component.
   */
  loadingOptions?: LoadingOptions
  /**
   * If `false`, the processing will not change.
   *
   * @default true
   */
  processing?: boolean
}

/**
 * `useAsyncCallback` is a custom hook used to manage async callbacks.
 *
 * @see Docs https://yamada-ui.com/hooks/use-async-callback
 */
export const useAsyncCallback = <Y extends Callback>(
  callback: Y,
  deps: DependencyList,
  {
    loading: method = false,
    loadingOptions,
    processing: shouldProcessing = true,
  }: UseAsyncCallbackOptions = {},
): UseAsyncCallbackReturn<Y> => {
  const context = useLoading()
  const { finish, loading, start } = useProcessing()
  const shouldLoading = !!method

  const asyncCallback = useCallback(
    async (...args: Parameters<Y>) => {
      try {
        if (shouldProcessing) start()
        if (shouldLoading) context[method].start(loadingOptions)

        return await callback(...args)
      } finally {
        if (shouldProcessing) finish()
        if (shouldLoading) context[method].finish()
      }
    },
    [
      // eslint-disable-next-line react-hooks/exhaustive-deps
      ...deps,
      shouldProcessing,
      shouldLoading,
      context,
      method,
      loadingOptions,
      callback,
      start,
      finish,
    ],
  )

  const control = useMemo(() => ({ finish, start }), [finish, start])

  return [loading, asyncCallback, control]
}

export type UseAsyncCallbackReturn<Y extends Callback> = [
  loading: boolean,
  callback: (...args: Parameters<Y>) => Promise<Awaited<ReturnType<Y>>>,
  control: { finish: () => void; start: () => void },
]
