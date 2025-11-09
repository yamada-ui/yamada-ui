"use client"

import type { LabelProps } from "recharts"
import type { HTMLProps, PropGetter } from "../../core"
import type { Dict, Merge } from "../../utils"
import { useCallback } from "react"
import { splitObject } from "../../utils"
import { labelProperties } from "./recharts-properties"

export interface UseLabelProps
  extends Merge<
    HTMLProps<"text">,
    Omit<LabelProps, "color" | "fill" | "stroke" | "strokeWidth">
  > {}

export const useLabel = (props: UseLabelProps) => {
  const [labelProps, styledLabelProps] = splitObject<Dict, string>(
    props,
    labelProperties,
  )

  const getLabelProps: PropGetter<
    undefined,
    Partial<LabelProps>,
    LabelProps
  > = useCallback(
    (props) => ({
      ...props,
      ...labelProps,
    }),
    [labelProps],
  )

  return { getLabelProps, styledLabelProps }
}

export type UseLabelReturn = ReturnType<typeof useLabel>
