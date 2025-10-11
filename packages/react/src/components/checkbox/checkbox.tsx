"use client"

import type { ReactElement, ReactNode } from "react"
import type { GenericsComponent, HTMLStyledProps, ThemeProps } from "../../core"
import type { Merge } from "../../utils"
import type { UseInputBorderProps } from "../input"
import type { CheckboxStyle } from "./checkbox.style"
import type { UseCheckboxProps } from "./use-checkbox"
import { useMemo } from "react"
import { createSlotComponent, styled } from "../../core"
import { CheckIcon, MinusIcon } from "../icon"
import { useInputBorder } from "../input"
import { checkboxStyle } from "./checkbox.style"
import { useCheckbox } from "./use-checkbox"

export interface CheckboxProps<Y extends string = string>
  extends Merge<HTMLStyledProps<"label">, UseCheckboxProps<Y>>,
    ThemeProps<CheckboxStyle>,
    UseInputBorderProps {
  /**
   * The icon to display in the checkbox when it is checked.
   */
  checkedIcon?: ReactNode
  /**
   * The icon to display in the checkbox when it is indeterminate.
   */
  indeterminateIcon?: ReactNode
  /**
   * Props for the indicator component.
   */
  indicatorProps?: CheckboxIndicatorProps
  /**
   * Props for the input element.
   */
  inputProps?: HTMLStyledProps<"input">
  /**
   * Props for the label component.
   */
  labelProps?: CheckboxLabelProps
  /**
   * Props for the label element.
   */
  rootProps?: HTMLStyledProps<"label">
}

const {
  component,
  PropsContext: CheckboxPropsContext,
  usePropsContext: useCheckboxPropsContext,
  withContext,
  withProvider,
  useRootComponentProps,
} = createSlotComponent<CheckboxProps, CheckboxStyle>("checkbox", checkboxStyle)

export {
  CheckboxPropsContext,
  component,
  useCheckboxPropsContext,
  useRootComponentProps,
}

/**
 * `Checkbox` is a component used for allowing users to select multiple values from multiple options.
 *
 * @see https://yamada-ui.com/docs/components/checkbox
 */
export const Checkbox = withProvider<"label", CheckboxProps>(
  ({
    checkedIcon,
    children,
    errorBorderColor,
    focusBorderColor,
    indeterminateIcon,
    indicatorProps,
    inputProps,
    labelProps,
    rootProps,
    ...rest
  }) => {
    const {
      checked,
      indeterminate,
      getIndicatorProps,
      getInputProps,
      getRootProps,
    } = useCheckbox(rest)
    const varProps = useInputBorder({ errorBorderColor, focusBorderColor })
    const icon = useMemo(() => {
      if (indeterminate) {
        return indeterminateIcon || <MinusIcon />
      } else if (checked) {
        return checkedIcon || <CheckIcon />
      } else {
        return null
      }
    }, [indeterminate, indeterminateIcon, checked, checkedIcon])
    const input = useMemo(() => {
      return <styled.input {...getInputProps(inputProps)} />
    }, [getInputProps, inputProps])
    const indicator = useMemo(() => {
      return (
        <CheckboxIndicator {...getIndicatorProps(indicatorProps)}>
          {icon}
        </CheckboxIndicator>
      )
    }, [getIndicatorProps, indicatorProps, icon])

    return (
      <styled.label {...getRootProps({ ...varProps, ...rootProps })}>
        {input}
        {indicator}
        {children ? (
          <CheckboxLabel {...labelProps}>{children}</CheckboxLabel>
        ) : null}
      </styled.label>
    )
  },
  "root",
)() as GenericsComponent<{
  <Y extends string = string>(props: CheckboxProps<Y>): ReactElement
}>

interface CheckboxIndicatorProps extends HTMLStyledProps {}

const CheckboxIndicator = withContext<"div", CheckboxIndicatorProps>(
  "div",
  "indicator",
)()

interface CheckboxLabelProps extends HTMLStyledProps<"span"> {}

const CheckboxLabel = withContext<"span", CheckboxLabelProps>("span", "label")()
