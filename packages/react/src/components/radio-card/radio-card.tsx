"use client"

import type { ReactElement, ReactNode } from "react"
import type { GenericsComponent, HTMLStyledProps, ThemeProps } from "../../core"
import type { Merge } from "../../utils"
import type { UseInputBorderProps } from "../input"
import type { UseRadioProps } from "../radio"
import type { RadioCardStyle } from "./radio-card.style"
import { useMemo } from "react"
import { createSlotComponent, styled } from "../../core"
import { useInputBorder } from "../input"
import { useRadio } from "../radio"
import { radioCardStyle } from "./radio-card.style"

export interface RadioCardRootProps<Y extends string = string>
  extends Merge<HTMLStyledProps<"label">, UseRadioProps<Y>>,
    ThemeProps<RadioCardStyle>,
    UseInputBorderProps {
  /**
   * The addon of the radio card.
   */
  addon?: ReactNode
  /**
   * The description of the radio card.
   */
  description?: ReactNode
  /**
   * The label of the radio card.
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
  addonProps?: RadioCardAddonProps
  /**
   * Props for the description component.
   */
  descriptionProps?: RadioCardDescriptionProps
  /**
   * Props for the indicator component.
   */
  indicatorProps?: RadioCardIndicatorProps
  /**
   * Props for the input element.
   */
  inputProps?: HTMLStyledProps<"input">
  /**
   * Props for the label component.
   */
  labelProps?: RadioCardLabelProps
  /**
   * Props for the label element.
   */
  rootProps?: HTMLStyledProps<"label">
}

const {
  component,
  PropsContext: RadioCardPropsContext,
  usePropsContext: useRadioCardPropsContext,
  withContext,
  withProvider,
  useRootComponentProps,
} = createSlotComponent<RadioCardRootProps, RadioCardStyle>(
  "radio-card",
  radioCardStyle,
)

export {
  component,
  RadioCardPropsContext,
  useRadioCardPropsContext,
  useRootComponentProps,
}

/**
 * `RadioCard` is a component used for allowing users to select one option from multiple choices.
 *
 * @see https://yamada-ui.com/docs/components/radio-card
 */
export const RadioCardRoot = withProvider<"label", RadioCardRootProps>(
  ({
    addon,
    children,
    description,
    errorBorderColor,
    focusBorderColor,
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
    const { getIndicatorProps, getInputProps, getRootProps } = useRadio(rest)
    const varProps = useInputBorder({ errorBorderColor, focusBorderColor })
    const computedChildren = useMemo(() => {
      if (children) return children

      return (
        <>
          {label ? (
            <RadioCardLabel {...labelProps}>{label}</RadioCardLabel>
          ) : null}
          {description ? (
            <RadioCardDescription {...descriptionProps}>
              {description}
            </RadioCardDescription>
          ) : null}
          {addon ? (
            <RadioCardAddon {...addonProps}>{addon}</RadioCardAddon>
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
          <RadioCardIndicator {...getIndicatorProps(indicatorProps)} />
        ) : null}

        {computedChildren}
      </styled.label>
    )
  },
  "root",
)() as GenericsComponent<{
  <Y extends string = string>(props: RadioCardRootProps<Y>): ReactElement
}>

interface RadioCardIndicatorProps extends HTMLStyledProps {}

const RadioCardIndicator = withContext<"div", RadioCardIndicatorProps>(
  "div",
  "indicator",
)({ "data-indicator": "" })

export interface RadioCardLabelProps extends HTMLStyledProps {}

export const RadioCardLabel = withContext<"span", RadioCardLabelProps>(
  "span",
  "label",
)()

export interface RadioCardDescriptionProps extends HTMLStyledProps {}

export const RadioCardDescription = withContext<
  "span",
  RadioCardDescriptionProps
>("span", "description")()

export interface RadioCardAddonProps extends HTMLStyledProps {}

export const RadioCardAddon = withContext<"span", RadioCardAddonProps>(
  "span",
  "addon",
)()
