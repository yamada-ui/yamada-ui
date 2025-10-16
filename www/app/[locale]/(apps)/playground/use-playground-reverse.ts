import { parseAsBoolean, useQueryState } from "nuqs"
import { useCallback } from "react"

export function usePlaygroundReverse() {
  const [reverse, setReverse] = useQueryState(
    "reverse",
    parseAsBoolean.withDefault(false).withOptions({
      history: "replace",
      scroll: false,
    }),
  )

  const toggleReverse = useCallback(() => {
    setReverse((prev) => !prev)
  }, [setReverse])

  return [reverse, toggleReverse] as const
}
