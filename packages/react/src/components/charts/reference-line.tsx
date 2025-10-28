"use client"

import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { Merge } from "../../utils"
import type { Label } from "./chart.types"
import type { ReferenceLineStyle } from "./reference-line.style"
import type { UseLabelProps } from "./use-label"
import type { UseReferenceLineProps } from "./use-reference-line"
import {
  Label as RechartsLabel,
  ReferenceLine as RechartsReferenceLine,
} from "recharts"
import { createSlotComponent, styled } from "../../core"
import { isNumber, isString } from "../../utils"
import { referenceLineStyle } from "./reference-line.style"
import { useLabel } from "./use-label"
import { useReferenceLine } from "./use-reference-line"

export interface ReferenceLineProps
  extends Merge<HTMLStyledProps<"line">, UseReferenceLineProps>,
    ThemeProps<ReferenceLineStyle> {
  /**
   * Props passed down to 'Label' component or function that returns a React element.
   */
  label?: Label
}

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
  ({ label, ...props }) => {
    const customProps = useReferenceLineComponentContext()
    const { getReferenceLineProps, styledReferenceLineProps } =
      useReferenceLine({
        ...customProps,
        ...props,
      })

    return (
      <styled.text asChild {...styledReferenceLineProps}>
        <RechartsReferenceLine {...getReferenceLineProps()}>
          {label ? (
            isNumber(label) || isString(label) ? (
              <ReferenceLineLabel>{label}</ReferenceLineLabel>
            ) : (
              <ReferenceLineLabel {...label} />
            )
          ) : null}
        </RechartsReferenceLine>
      </styled.text>
    )
  },
  "root",
)()

interface ReferenceLineLabelProps
  extends Merge<HTMLStyledProps<"text">, UseLabelProps> {}

const ReferenceLineLabel = withContext<"text", ReferenceLineLabelProps>(
  (props) => {
    const { getLabelProps, styledLabelProps } = useLabel(props)

    return (
      <styled.text asChild {...styledLabelProps}>
        <RechartsLabel {...getLabelProps()} />
      </styled.text>
    )
  },
  "label",
)()
