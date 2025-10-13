"use client"

import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { Merge } from "../../utils"
import type { ReferenceLineStyle } from "./reference-line.style"
import type { UseReferenceLineProps } from "./use-reference-line"
import { ReferenceLine as RechartsReferenceLine } from "recharts"
import { createComponent } from "../../core"
import { referenceLineStyle } from "./reference-line.style"
import { useReferenceLine } from "./use-reference-line"

export interface ReferenceLineProps
  extends Merge<HTMLStyledProps<"svg">, UseReferenceLineProps>,
    ThemeProps<ReferenceLineStyle> {}

const {
  ComponentContext: ReferenceLineComponentContext,
  PropsContext: ReferenceLinePropsContext,
  useComponentContext: useReferenceLineComponentContext,
  usePropsContext: useReferenceLinePropsContext,
  withContext,
} = createComponent<ReferenceLineProps, ReferenceLineStyle, ReferenceLineProps>(
  "chart-reference-line",
  referenceLineStyle,
)

export {
  ReferenceLineComponentContext,
  ReferenceLinePropsContext,
  useReferenceLineComponentContext,
  useReferenceLinePropsContext,
}

// NOTE: When processed with the second argument, properties such as `stroke` are absorbed by YamadaUI.
export const ReferenceLine = withContext<"svg", ReferenceLineProps>((props) => {
  const customProps = useReferenceLineComponentContext()
  const { getReferenceLineProps } = useReferenceLine({
    ...customProps,
    ...props,
  })

  return <RechartsReferenceLine {...getReferenceLineProps()} />
})()
