import type { LoadingComponent } from "@yamada-ui/core"
import type { LoadingOptions } from "@yamada-ui/loading"
import type { DependencyList } from "react"
import { useTheme } from "@yamada-ui/core"
import { useLoading } from "@yamada-ui/loading"
import { useProcessing } from "@yamada-ui/use-processing"
import { useCallback, useMemo } from "react"

type Callback = (...args: any[]) => any

export interface UseAsyncCallbackOptions {
  /**
   * Overrides the `loading.defaultComponent` set in the config.
   * If `false`, the loading will not be shown.
   */
  loading?: false | LoadingComponent
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
    loading: customLoadingComponent,
    loadingOptions,
    processing: shouldProcessing = true,
  }: UseAsyncCallbackOptions = {},
): UseAsyncCallbackReturn<Y> => {
  const { theme } = useTheme()
  const loadingContext = useLoading()
  const { finish, isLoading, start } = useProcessing()
  const shouldLoading = customLoadingComponent !== false
  const defaultLoadingComponent = theme.__config?.loading?.defaultComponent
  const loadingComponent = customLoadingComponent || defaultLoadingComponent

  const asyncCallback = useCallback(
    async (...args: Parameters<Y>) => {
      try {
        if (shouldProcessing) start()
        if (shouldLoading && loadingComponent)
          loadingContext[loadingComponent].start(loadingOptions)

        return await callback(...args)
      } finally {
        if (shouldProcessing) finish()
        if (shouldLoading && loadingComponent)
          loadingContext[loadingComponent].finish()
      }
    },
    [
      // eslint-disable-next-line react-hooks/exhaustive-deps
      ...deps,
      shouldProcessing,
      shouldLoading,
      loadingContext,
      loadingComponent,
      loadingOptions,
      callback,
      start,
      finish,
    ],
  )

  const control = useMemo(() => ({ finish, start }), [finish, start])

  return [isLoading, asyncCallback, control]
}

export type UseAsyncCallbackReturn<Y extends Callback> = [
  isLoading: boolean,
  callback: (...args: Parameters<Y>) => Promise<Awaited<ReturnType<Y>>>,
  control: { finish: () => void; start: () => void },
]
