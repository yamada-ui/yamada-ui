"use client"

import type { LabelProps } from "recharts"
import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { Merge } from "../../utils"
import type { ReferenceLineStyle } from "./reference-line.style"
import type { UseReferenceLineProps } from "./use-reference-line"
import { Label, ReferenceLine as RechartsReferenceLine } from "recharts"
import { createSlotComponent, styled } from "../../core"
import { referenceLineStyle } from "./reference-line.style"
import { useReferenceLine, useReferenceLineLabel } from "./use-reference-line"

export interface ReferenceLineProps
  extends Merge<HTMLStyledProps<"line">, UseReferenceLineProps>,
    ThemeProps<ReferenceLineStyle> {}

const {
  ComponentContext: ReferenceLineComponentContext,
  PropsContext: ReferenceLinePropsContext,
  useComponentContext: useReferenceLineComponentContext,
  usePropsContext: useReferenceLinePropsContext,
  withContext,
  withProvider,
} = createSlotComponent<
  ReferenceLineProps,
  ReferenceLineStyle,
  ReferenceLineProps
>("chart-reference-line", referenceLineStyle)

export {
  ReferenceLineComponentContext,
  ReferenceLinePropsContext,
  useReferenceLineComponentContext,
  useReferenceLinePropsContext,
}

export const ReferenceLine = withProvider<"svg", ReferenceLineProps>(
  (props) => {
    const customProps = useReferenceLineComponentContext()
    const { getReferenceLineProps, styledReferenceLineProps } =
      useReferenceLine({
        ...customProps,
        ...props,
      })

    return (
      <styled.text asChild {...styledReferenceLineProps}>
        <RechartsReferenceLine {...getReferenceLineProps()} />
      </styled.text>
    )
  },
  "root",
)()

interface ReferenceLineLabelProps
  extends Merge<
    HTMLStyledProps<"text">,
    Omit<LabelProps, "color" | "fill" | "stroke" | "strokeWidth">
  > {}

export const ReferenceLineLabel = withContext<"text", ReferenceLineLabelProps>(
  (props) => {
    const { getLabelProps, styledLabelProps } = useReferenceLineLabel(props)

    return (
      <styled.text asChild {...styledLabelProps}>
        <Label {...getLabelProps()} />
      </styled.text>
    )
  },
  "label",
)()
