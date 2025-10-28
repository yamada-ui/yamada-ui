"use client"

import type { ReferenceLineProps } from "recharts"
import type { HTMLProps, PropGetter } from "../../core"
import type { Dict, Merge } from "../../utils"
import { useCallback } from "react"
import { splitObject } from "../../utils"
import { referenceLineProperties } from "./recharts-properties"

export interface UseReferenceLineProps
  extends Merge<
    HTMLProps<"line">,
    Omit<
      ReferenceLineProps,
      "color" | "fill" | "fillOpacity" | "label" | "stroke" | "strokeWidth"
    >
  > {}

export const useReferenceLine = (props: UseReferenceLineProps) => {
  const [referenceLineProps, styledReferenceLineProps] = splitObject<
    Dict,
    string
  >(props, referenceLineProperties)

  const getReferenceLineProps: PropGetter<
    undefined,
    Partial<ReferenceLineProps>,
    Omit<ReferenceLineProps, "ref">
  > = useCallback(
    (props) => ({
      color: "",
      fill: "",
      fillOpacity: "",
      stroke: "",
      strokeWidth: "",
      ...props,
      ...referenceLineProps,
    }),
    [referenceLineProps],
  )

  return { getReferenceLineProps, styledReferenceLineProps }
}

export type UseReferenceLineReturn = ReturnType<typeof useReferenceLine>
