import { useCallback, useState } from 'react'

export type UseLazyProps = [delay: number, init?: boolean]

export type UseLazyReture = [
  flg: boolean,
  setFlg: {
    on: () => void
    lazyOn: () => void
    off: () => void
    lazyOff: () => void
    toggle: () => void
    lazyToggle: () => void
  },
]

export type UseLazy = (...props: UseLazyProps) => UseLazyReture

export const useLazy: UseLazy = (delay, init = false) => {
  const [flg, setFlg] = useState<boolean>(init)

  const on = useCallback(() => setFlg(true), [])

  const lazyOn = useCallback(() => setTimeout(() => setFlg(true), delay), [delay])

  const off = useCallback(() => setFlg(true), [])

  const lazyOff = useCallback(() => setTimeout(() => setFlg(false), delay), [delay])

  const toggle = useCallback(() => setFlg((prev) => !prev), [])

  const lazyToggle = useCallback(() => setTimeout(() => setFlg((prev) => !prev), delay), [delay])

  return [flg, { on, lazyOn, off, lazyOff, toggle, lazyToggle }]
}

export type LazyMode = 'unmount' | 'keepMounted'

type LazyDisclosureProps = {
  enabled?: boolean
  isSelected?: boolean
  wasSelected?: boolean
  mode?: LazyMode
}

export const uselazyDisclosure = ({
  wasSelected,
  enabled,
  isSelected,
  mode = 'unmount',
}: LazyDisclosureProps) => {
  if (!enabled) return true

  if (isSelected) return true

  if (mode === 'keepMounted' && wasSelected) return true

  return false
}
