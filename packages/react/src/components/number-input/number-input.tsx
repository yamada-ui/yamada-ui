"use client"

import type { FC } from "react"
import type { HTMLStyledProps, ThemeProps, WithoutThemeProps } from "../../core"
import type { InputProps } from "../input"
import type { NumberInputStyle } from "./number-input.style"
import type { UseNumberInputProps } from "./use-number-input"
import { createSlotComponent } from "../../core"
import { useGroupItemProps } from "../group"
import { ChevronDownIcon, ChevronUpIcon } from "../icon"
import { Input, InputGroup, useInputPropsContext } from "../input"
import { numberInputStyle } from "./number-input.style"
import { useNumberInput } from "./use-number-input"

export interface NumberInputProps
  extends Omit<
      WithoutThemeProps<InputProps, NumberInputStyle>,
      keyof UseNumberInputProps
    >,
    ThemeProps<NumberInputStyle>,
    UseNumberInputProps {
  /**
   * The props for the control element.
   */
  controlProps?: NumberInputControlProps
  /**
   * The props for the decrement button element.
   */
  decrementProps?: NumberInputDecrementButtonProps
  /**
   * The props for the end element.
   */
  elementProps?: InputGroup.ElementProps
  /**
   * The props for the increment button element.
   */
  incrementProps?: NumberInputIncrementButtonProps
  /**
   * The props for the root element.
   */
  rootProps?: InputGroup.RootProps
}

const {
  PropsContext: NumberInputPropsContext,
  usePropsContext: useNumberInputPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<NumberInputProps, NumberInputStyle>(
  "number-input",
  numberInputStyle,
)

export { NumberInputPropsContext, useNumberInputPropsContext }

/**
 * `NumberInput` is a component used to obtain numeric input from the user.
 *
 * @see https://yamada-ui.com/components/number-input
 */
export const NumberInput = withProvider<"input", NumberInputProps>(
  ({
    className,
    css,
    colorScheme,
    controlProps,
    decrementProps,
    elementProps,
    incrementProps,
    rootProps,
    ...props
  }) => {
    const [groupItemProps, rest] = useGroupItemProps(props)
    const { getDecrementProps, getIncrementProps, getInputProps } =
      useNumberInput(rest)

    return (
      <InputGroup.Root
        className={className}
        css={css}
        colorScheme={colorScheme}
        {...groupItemProps}
        {...rootProps}
      >
        <NumberInputField {...getInputProps()} />

        <InputGroup.Element clickable {...elementProps}>
          <NumberInputControl {...controlProps}>
            <NumberInputIncrementButton
              {...getIncrementProps(incrementProps)}
            />
            <NumberInputDecrementButton
              {...getDecrementProps(decrementProps)}
            />
          </NumberInputControl>
        </InputGroup.Element>
      </InputGroup.Root>
    )
  },
  "root",
)((props) => {
  const context = useInputPropsContext()

  return { ...context, ...props }
})

interface NumberInputFieldProps extends InputProps {}

const NumberInputField = withContext<"input", NumberInputFieldProps>(
  Input,
  "field",
)({ "data-group-propagate": "" })

interface NumberInputControlProps extends InputGroup.AddonProps {}

const NumberInputControl = withContext<"div", NumberInputControlProps>(
  "div",
  "control",
)()

type NumberInputIncrementButtonProps = HTMLStyledProps<"button">

const NumberInputIncrementButton: FC<NumberInputIncrementButtonProps> =
  withContext<"button", NumberInputIncrementButtonProps>("button", [
    "button",
    "increment",
  ])({ children: <ChevronUpIcon /> })

type NumberInputDecrementButtonProps = HTMLStyledProps<"button">

const NumberInputDecrementButton: FC<NumberInputDecrementButtonProps> =
  withContext<"button", NumberInputDecrementButtonProps>("button", [
    "button",
    "decrement",
  ])({ children: <ChevronDownIcon /> })
