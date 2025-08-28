"use client"

import type { ReactElement } from "react"
import type {
  GenericsComponent,
  HTMLProps,
  HTMLStyledProps,
  ThemeProps,
} from "../../core"
import type { Merge } from "../../utils"
import type { UseInputBorderProps } from "../input"
import type { RadioStyle } from "./radio.style"
import type { UseRadioProps } from "./use-radio"
import { useMemo } from "react"
import { createSlotComponent, styled } from "../../core"
import { cast } from "../../utils"
import { useInputBorder } from "../input"
import { radioStyle } from "./radio.style"
import { useRadio } from "./use-radio"

export interface RadioProps<Y extends string = string>
  extends Merge<HTMLStyledProps<"label">, UseRadioProps<Y>>,
    ThemeProps<RadioStyle>,
    UseInputBorderProps {
  /**
   * Props for the indicator component.
   */
  indicatorProps?: RadioIndicatorProps
  /**
   * Props for the input element.
   */
  inputProps?: HTMLStyledProps<"input">
  /**
   * Props for the label component.
   */
  labelProps?: RadioLabelProps
  /**
   * Props for the label element.
   */
  rootProps?: HTMLStyledProps<"label">
}

const {
  component,
  PropsContext: RadioPropsContext,
  usePropsContext: useRadioPropsContext,
  withContext,
  withProvider,
  useRootComponentProps,
} = createSlotComponent<RadioProps, RadioStyle>("radio", radioStyle)

export {
  component,
  RadioPropsContext,
  useRadioPropsContext,
  useRootComponentProps,
}

/**
 * `Radio` is a component used for allowing users to select one option from multiple choices.
 *
 * @see https://yamada-ui.com/components/radio
 */
export const Radio = withProvider<"label", RadioProps>(
  ({
    children,
    errorBorderColor,
    focusBorderColor,
    indicatorProps,
    inputProps,
    labelProps,
    rootProps,
    ...rest
  }) => {
    const { getIndicatorProps, getInputProps, getRootProps } = useRadio(rest)
    const varProps = useInputBorder({ errorBorderColor, focusBorderColor })
    const input = useMemo(() => {
      return <styled.input {...getInputProps(inputProps)} />
    }, [getInputProps, inputProps])
    const indicator = useMemo(() => {
      return <RadioIndicator {...getIndicatorProps(indicatorProps)} />
    }, [getIndicatorProps, indicatorProps])

    if (children) {
      return (
        <styled.label {...getRootProps({ ...varProps, ...rootProps })}>
          {input}
          {indicator}
          <RadioLabel {...labelProps}>{children}</RadioLabel>
        </styled.label>
      )
    } else {
      return (
        <styled.div
          {...cast<HTMLProps>(getRootProps({ ...varProps, ...rootProps }))}
        >
          {input}
          {indicator}
        </styled.div>
      )
    }
  },
  "root",
)() as GenericsComponent<{
  <Y extends string = string>(props: RadioProps<Y>): ReactElement
}>

interface RadioIndicatorProps extends HTMLStyledProps {}

const RadioIndicator = withContext<"div", RadioIndicatorProps>(
  "div",
  "indicator",
)()

interface RadioLabelProps extends HTMLStyledProps<"span"> {}

const RadioLabel = withContext<"span", RadioLabelProps>("span", "label")()
