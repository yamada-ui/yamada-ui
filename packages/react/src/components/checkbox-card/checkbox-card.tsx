"use client"

import type { ReactElement, ReactNode } from "react"
import type { GenericsComponent, HTMLStyledProps, ThemeProps } from "../../core"
import type { Merge } from "../../utils"
import type { UseCheckboxProps } from "../checkbox"
import type { UseInputBorderProps } from "../input"
import type { CheckboxCardStyle } from "./checkbox-card.style"
import { useMemo } from "react"
import { createSlotComponent, styled } from "../../core"
import { useCheckbox } from "../checkbox"
import { CheckIcon, MinusIcon } from "../icon"
import { useInputBorder } from "../input"
import { checkboxCardStyle } from "./checkbox-card.style"

export interface CheckboxCardRootProps<Y extends string = string>
  extends Merge<HTMLStyledProps<"label">, UseCheckboxProps<Y>>,
    ThemeProps<CheckboxCardStyle>,
    UseInputBorderProps {
  /**
   * The addon of the checkbox card.
   */
  addon?: ReactNode
  /**
   * The icon to display in the checkbox when it is checked.
   */
  checkedIcon?: ReactNode
  /**
   * The description of the checkbox card.
   */
  description?: ReactNode
  /**
   * The icon to display in the checkbox when it is indeterminate.
   */
  indeterminateIcon?: ReactNode
  /**
   * The label of the checkbox card.
   */
  label?: ReactNode
  /**
   * If `true`, the indicator will be displayed.
   *
   * @default true
   */
  withIndicator?: boolean
  /**
   * Props for the addon component.
   */
  addonProps?: CheckboxCardAddonProps
  /**
   * Props for the description component.
   */
  descriptionProps?: CheckboxCardDescriptionProps
  /**
   * Props for the indicator component.
   */
  indicatorProps?: CheckboxCardIndicatorProps
  /**
   * Props for the input element.
   */
  inputProps?: HTMLStyledProps<"input">
  /**
   * Props for the label component.
   */
  labelProps?: CheckboxCardLabelProps
  /**
   * Props for the label element.
   */
  rootProps?: HTMLStyledProps<"label">
}

const {
  component,
  PropsContext: CheckboxCardPropsContext,
  usePropsContext: useCheckboxCardPropsContext,
  withContext,
  withProvider,
  useRootComponentProps,
} = createSlotComponent<CheckboxCardRootProps, CheckboxCardStyle>(
  "checkbox-card",
  checkboxCardStyle,
)

export {
  CheckboxCardPropsContext,
  component,
  useCheckboxCardPropsContext,
  useRootComponentProps,
}

/**
 * `CheckboxCard` is a component used for allowing users to select multiple values from multiple options.
 *
 * @see https://yamada-ui.com/components/checkbox-card
 */
export const CheckboxCardRoot = withProvider<"label", CheckboxCardRootProps>(
  ({
    addon,
    checkedIcon,
    children,
    description,
    errorBorderColor,
    focusBorderColor,
    indeterminateIcon,
    label,
    withIndicator = true,
    addonProps,
    descriptionProps,
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
    const computedChildren = useMemo(() => {
      if (children) return children

      return (
        <>
          {label ? (
            <CheckboxCardLabel {...labelProps}>{label}</CheckboxCardLabel>
          ) : null}
          {description ? (
            <CheckboxCardDescription {...descriptionProps}>
              {description}
            </CheckboxCardDescription>
          ) : null}
          {addon ? (
            <CheckboxCardAddon {...addonProps}>{addon}</CheckboxCardAddon>
          ) : null}
        </>
      )
    }, [
      addon,
      addonProps,
      children,
      description,
      descriptionProps,
      label,
      labelProps,
    ])

    return (
      <styled.label {...getRootProps({ ...varProps, ...rootProps })}>
        <styled.input {...getInputProps(inputProps)} />
        {withIndicator ? (
          <CheckboxCardIndicator {...getIndicatorProps(indicatorProps)}>
            {icon}
          </CheckboxCardIndicator>
        ) : null}

        {computedChildren}
      </styled.label>
    )
  },
  "root",
)() as GenericsComponent<{
  <Y extends string = string>(props: CheckboxCardRootProps<Y>): ReactElement
}>

interface CheckboxCardIndicatorProps extends HTMLStyledProps {}

const CheckboxCardIndicator = withContext<"div", CheckboxCardIndicatorProps>(
  "div",
  "indicator",
)({ "data-indicator": "" })

export interface CheckboxCardLabelProps extends HTMLStyledProps {}

export const CheckboxCardLabel = withContext<"span", CheckboxCardLabelProps>(
  "span",
  "label",
)()

export interface CheckboxCardDescriptionProps extends HTMLStyledProps {}

export const CheckboxCardDescription = withContext<
  "span",
  CheckboxCardDescriptionProps
>("span", "description")()

export interface CheckboxCardAddonProps extends HTMLStyledProps {}

export const CheckboxCardAddon = withContext<"span", CheckboxCardAddonProps>(
  "span",
  "addon",
)()
