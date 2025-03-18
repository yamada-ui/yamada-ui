import { useBoolean } from "@yamada-ui/use-boolean"
import { useUnmountEffect } from "@yamada-ui/utils"
import { useCallback, useMemo, useRef } from "react"

/**
 * `useProcessing` is a custom hook for handling processing states.
 *
 * @see Docs https://yamada-ui.com/hooks/use-processing
 */
export const useProcessing = (init?: boolean) => {
  const [loading, { off, on }] = useBoolean(init)
  const countRef = useRef<number>(0)

  const start = useCallback(() => {
    countRef.current += 1

    on()
  }, [on])

  const finish = useCallback(() => {
    countRef.current -= 1

    if (countRef.current <= 0) off()
  }, [off])

  useUnmountEffect(() => {
    countRef.current = 0
  })

  const controls = useMemo(
    () => ({
      finish,
      /**
       * @deprecated Use `loading` instead.
       */
      isLoading: loading,
      loading,
      start,
    }),
    [finish, loading, start],
  )

  return controls
}

export type UseProcessingReturn = ReturnType<typeof useProcessing>
