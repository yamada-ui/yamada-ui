import type { LabelProps, ReferenceLineProps } from "recharts"
import type { HTMLProps, PropGetter } from "../../core"
import type { Dict, Merge } from "../../utils"
import type { Label } from "./chart.types"
import { useCallback } from "react"
import {
  isFunction,
  isNumber,
  isString,
  isUndefined,
  splitObject,
} from "../../utils"
import { labelProperties, referenceLineProperties } from "./recharts-properties"
import { ReferenceLineLabel } from "./reference-line"

export interface UseReferenceLineProps
  extends Merge<
    HTMLProps<"line">,
    Omit<
      ReferenceLineProps,
      "color" | "fill" | "fillOpacity" | "label" | "stroke" | "strokeWidth"
    >
  > {
  /**
   * Props passed down to 'Label' component or function that returns a React element.
   */
  label?: Label
}

export const useReferenceLine = ({
  label: labelProp,
  ...rest
}: UseReferenceLineProps) => {
  const [referenceLineProps, styledReferenceLineProps] = splitObject<
    Dict,
    string
  >(rest, referenceLineProperties)

  const getReferenceLineProps: PropGetter<
    undefined,
    Partial<ReferenceLineProps>,
    Omit<ReferenceLineProps, "ref">
  > = useCallback(
    (props) => {
      const label = isUndefined(labelProp) ? (
        false
      ) : isFunction(labelProp) ? (
        labelProp
      ) : isNumber(labelProp) || isString(labelProp) ? (
        <ReferenceLineLabel>{labelProp}</ReferenceLineLabel>
      ) : (
        <ReferenceLineLabel {...labelProp} />
      )

      return {
        color: "",
        fill: "",
        fillOpacity: "",
        label,
        stroke: "",
        strokeWidth: "",
        ...props,
        ...referenceLineProps,
      }
    },
    [labelProp, referenceLineProps],
  )

  return { getReferenceLineProps, styledReferenceLineProps }
}

export type UseReferenceLineReturn = ReturnType<typeof useReferenceLine>

export interface UseReferenceLineLabelProps {}

export const useReferenceLineLabel = (props: UseReferenceLineLabelProps) => {
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

export type UseReferenceLineLabelReturn = ReturnType<
  typeof useReferenceLineLabel
>
