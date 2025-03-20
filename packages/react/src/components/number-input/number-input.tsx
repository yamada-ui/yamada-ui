import type { FC, HTMLUIProps, PropGetter, ThemeProps } from "../../core"
import type { FieldProps } from "../field"
import type { UseInputBorderProps } from "../input"
import type { NumberInputStyle } from "./number-input.style"
import type { UseNumberInputProps } from "./use-number-input"
import { createSlotComponent, ui } from "../../core"
import { cx } from "../../utils"
import { useFieldProps } from "../field"
import { ChevronDownIcon, ChevronUpIcon } from "../icon"
import { useInputBorder } from "../input"
import { numberInputStyle } from "./number-input.style"
import { useNumberInput } from "./use-number-input"

export interface NumberInputProps
  extends Omit<
      HTMLUIProps<"input">,
      | "defaultValue"
      | "max"
      | "min"
      | "onChange"
      | "onInvalid"
      | "size"
      | "step"
      | "value"
    >,
    UseInputBorderProps,
    ThemeProps<NumberInputStyle>,
    UseNumberInputProps,
    FieldProps {
  /**
   * If `true`, display the addon for the number input.
   */
  stepper?: boolean
  /**
   * Props for addon component.
   */
  addonProps?: HTMLUIProps
  /**
   * Props for container element.
   */
  containerProps?: HTMLUIProps
  /**
   * Props for decrement component.
   */
  decrementProps?: NumberDecrementStepperProps
  /**
   * Props for increment component.
   */
  incrementProps?: NumberIncrementStepperProps
}

interface NumberInputContext {
  getDecrementProps: PropGetter<"button">
  getIncrementProps: PropGetter<"button">
  getInputProps: PropGetter<"input">
}

export const {
  ComponentContext,
  PropsContext: NumberInputPropsContext,
  useComponentContext,
  usePropsContext: useNumberInputPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<NumberInputProps, NumberInputStyle, NumberInputContext>(
  "number-input",
  numberInputStyle,
)

/**
 * `NumberInput` is a component used to obtain numeric input from the user.
 *
 * @see Docs https://yamada-ui.com/components/forms/number-input
 */
export const NumberInput = withProvider<"input", NumberInputProps>(
  ({
    className,
    css,
    stepper = true,
    addonProps,
    containerProps,
    decrementProps,
    incrementProps,
    ...props
  }) => {
    const {
      props: { errorBorderColor, focusBorderColor, vars: varsProp, ...rest },
      ariaProps,
      dataProps,
      eventProps,
    } = useFieldProps(props)
    const vars = useInputBorder(varsProp, {
      errorBorderColor,
      focusBorderColor,
    })
    const {
      props: computedProps,
      getDecrementProps,
      getIncrementProps,
      getInputProps,
    } = useNumberInput({
      "aria-invalid": ariaProps["aria-invalid"],
      ...eventProps,
      ...rest,
    })

    const fieldProps: any = {
      ...ariaProps,
      ...dataProps,
      ...eventProps,
    }

    return (
      <ComponentContext
        value={{ getDecrementProps, getIncrementProps, getInputProps }}
      >
        <ui.div
          className={className}
          css={css}
          role="group"
          {...containerProps}
        >
          <NumberInputField
            vars={vars}
            {...getInputProps({ ...fieldProps, ...computedProps })}
          />

          {stepper ? (
            <NumberInputAddon {...fieldProps} {...addonProps}>
              <NumberIncrementStepper {...fieldProps} {...incrementProps} />
              <NumberDecrementStepper {...fieldProps} {...decrementProps} />
            </NumberInputAddon>
          ) : null}
        </ui.div>
      </ComponentContext>
    )
  },
  "root",
)()

interface NumberInputFieldProps extends Omit<HTMLUIProps<"input">, "size"> {}

const NumberInputField = withContext<"input", NumberInputFieldProps>(
  "input",
  "field",
)()

type NumberInputAddonProps = HTMLUIProps

const NumberInputAddon = withContext<"div", NumberInputAddonProps>(
  "div",
  "addon",
)()

type NumberInputStepperProps = HTMLUIProps<"button">

const NumberInputStepper = withContext<"button", NumberInputStepperProps>(
  "button",
  "stepper",
)()

type NumberIncrementStepperProps = HTMLUIProps<"button">

const NumberIncrementStepper: FC<NumberIncrementStepperProps> = ({
  className,
  children,
  ...rest
}) => {
  const { getIncrementProps } = useComponentContext()

  return (
    <NumberInputStepper
      {...getIncrementProps({
        className: cx("ui-number-input__stepper--up", className),
        ...rest,
      })}
    >
      {children ?? <ChevronUpIcon fontSize="sm" />}
    </NumberInputStepper>
  )
}

type NumberDecrementStepperProps = HTMLUIProps<"button">

const NumberDecrementStepper: FC<NumberDecrementStepperProps> = ({
  className,
  children,
  ...rest
}) => {
  const { getDecrementProps } = useComponentContext()

  return (
    <NumberInputStepper
      {...getDecrementProps({
        className: cx("ui-number-input__stepper--down", className),
        ...rest,
      })}
    >
      {children ?? <ChevronDownIcon fontSize="sm" />}
    </NumberInputStepper>
  )
}
