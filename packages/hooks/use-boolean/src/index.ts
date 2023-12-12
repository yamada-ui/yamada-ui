import { useCallback, useState } from "react"

/**
 * `useBoolean` is a custom hook used to manage boolean values using `on`, `off`, and `toggle` functions.
 *
 * @see Docs https://yamada-ui.com/hooks/use-boolean
 */
export const useBoolean = (init: boolean = false): UseBooleanReturn => {
  const [flg, setFlg] = useState<boolean>(init)

  const on = useCallback(() => setFlg(true), [])

  const off = useCallback(() => setFlg(false), [])

  const toggle = useCallback(() => setFlg((prev) => !prev), [])

  return [flg, { on, off, toggle }]
}

export type UseBooleanReturn = [
  flg: boolean,
  setFlg: { on: () => void; off: () => void; toggle: () => void },
]
