"use client"

import { parseAsInteger, useQueryStates } from "nuqs"
import { useCallback, useMemo } from "react"

export function usePlaygroundLayout() {
  const [{ x, y }, setState] = useQueryStates(
    {
      x: parseAsInteger,
      y: parseAsInteger,
    },
    {
      clearOnDefault: true,
      history: "replace",
      scroll: false,
    },
  )

  const isAuto = x === null || y === null
  const size = useMemo(() => (isAuto ? "auto" : { x, y }), [isAuto, x, y])

  const orientation = useMemo(() => {
    if (size === "auto") return null
    return size.x > size.y ? "landscape" : "portrait"
  }, [size])

  const setSize = useCallback(
    (newX: number, newY: number) => {
      setState({ x: newX, y: newY })
    },
    [setState],
  )

  const toggleSize = useCallback(() => {
    if (isAuto) return
    setState((prev) => ({ x: prev.y, y: prev.x }))
  }, [isAuto, setState])

  const resetToAuto = useCallback(() => {
    setState({ x: null, y: null })
  }, [setState])

  return {
    size,
    isAuto,
    orientation,
    resetToAuto,
    setSize,
    toggleSize,
  } as const
}
