"use client"

import type { XAxisProps } from "recharts"
import type { CSSObject, HTMLProps } from "../../core"
import type { Merge } from "../../utils"

export interface UseXAxisProps extends Merge<HTMLProps, XAxisProps> {
  css?: CSSObject | CSSObject[]
}

export const useXAxis = (_props: UseXAxisProps) => {
  return {}
}

export type UseXAxisReturn = ReturnType<typeof useXAxis>
