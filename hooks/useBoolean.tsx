import { useCallback, useState } from 'react'

export type UseBooleanReture = [
  flg: boolean,
  setFlg: { on: () => void; off: () => void; toggle: () => void },
]

export type UseBoolean = (init?: boolean) => UseBooleanReture

export const useBoolean: UseBoolean = (init = false) => {
  const [flg, setFlg] = useState<boolean>(init)

  const on = useCallback(() => setFlg(true), [])

  const off = useCallback(() => setFlg(false), [])

  const toggle = useCallback(() => setFlg((prev) => !prev), [])

  return [flg, { on, off, toggle }]
}
