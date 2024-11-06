import type {
  ColorModeToken,
  CSS,
  CSSUIObject,
  HTMLUIProps,
  PropGetter,
  ThemeProps,
} from "@yamada-ui/core"
import type { UseNumberInputProps } from "./use-number-input"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "@yamada-ui/core"
import { ChevronIcon } from "@yamada-ui/icon"
import { createContext, cx } from "@yamada-ui/utils"
import { useNumberInput } from "./use-number-input"

interface NumberInputOptions {
  /**
   * The border color when the input is invalid.
   */
  errorBorderColor?: ColorModeToken<CSS.Property.BorderColor, "colors">
  /**
   * The border color when the input is focused.
   */
  focusBorderColor?: ColorModeToken<CSS.Property.BorderColor, "colors">
  /**
   * If `true`, display the addon for the number input.
   */
  isStepper?: boolean
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

export interface NumberInputProps
  extends Omit<
      HTMLUIProps<"input">,
      | "defaultValue"
      | "disabled"
      | "max"
      | "min"
      | "onChange"
      | "onInvalid"
      | "readOnly"
      | "required"
      | "size"
      | "step"
      | "value"
    >,
    ThemeProps<"NumberInput">,
    Omit<UseNumberInputProps, "disabled" | "readOnly" | "required">,
    NumberInputOptions {}

interface NumberInputContext {
  styles: { [key: string]: CSSUIObject | undefined }
  getDecrementProps: PropGetter<"button">
  getIncrementProps: PropGetter<"button">
  getInputProps: PropGetter<"input">
}

const [NumberInputContextProvider, useNumberInputContext] =
  createContext<NumberInputContext>({
    name: "NumberInputContext",
    errorMessage: `useNumberInputContext returned is 'undefined'. Seems you forgot to wrap the components in "<NumberInput />"`,
  })

/**
 * `NumberInput` is a component used to obtain numeric input from the user.
 *
 * @see Docs https://yamada-ui.com/components/forms/number-input
 */
export const NumberInput = forwardRef<NumberInputProps, "input">(
  (props, ref) => {
    const [styles, mergedProps] = useComponentMultiStyle("NumberInput", props)
    const {
      className,
      isStepper = true,
      addonProps,
      containerProps,
      decrementProps,
      incrementProps,
      ...computedProps
    } = omitThemeProps(mergedProps)
    const {
      props: rest,
      getDecrementProps,
      getIncrementProps,
      getInputProps,
    } = useNumberInput(computedProps)

    const css: CSSUIObject = {
      position: "relative",
      zIndex: 0,
      ...styles.container,
    }

    return (
      <NumberInputContextProvider
        value={{ styles, getDecrementProps, getIncrementProps, getInputProps }}
      >
        <ui.div
          className={cx("ui-number-input", className)}
          __css={css}
          {...containerProps}
        >
          <NumberInputField {...getInputProps(rest, ref)} />

          {isStepper ? (
            <NumberInputAddon {...addonProps}>
              <NumberIncrementStepper {...incrementProps} />
              <NumberDecrementStepper {...decrementProps} />
            </NumberInputAddon>
          ) : null}
        </ui.div>
      </NumberInputContextProvider>
    )
  },
)

NumberInput.displayName = "NumberInput"
NumberInput.__ui__ = "NumberInput"

type NumberInputFieldProps = Omit<
  HTMLUIProps<"input">,
  "disabled" | "readOnly" | "required" | "size"
>

const NumberInputField = forwardRef<NumberInputFieldProps, "input">(
  ({ className, ...rest }, ref) => {
    const { styles } = useNumberInputContext()

    const css: CSSUIObject = {
      width: "100%",
      ...styles.field,
    }

    return (
      <ui.input
        ref={ref}
        className={cx("ui-number-input__field", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

NumberInputField.displayName = "NumberInputField"
NumberInputField.__ui__ = "NumberInputField"

type NumberInputAddonProps = HTMLUIProps

const NumberInputAddon = forwardRef<NumberInputAddonProps, "div">(
  ({ className, ...rest }, ref) => {
    const { styles } = useNumberInputContext()

    const css: CSSUIObject = {
      display: "flex",
      flexDirection: "column",
      height: "calc(100% - 2px)",
      insetEnd: "0px",
      margin: "1px",
      position: "absolute",
      top: "0",
      zIndex: "fallback(yamcha, 1)",
      ...styles.addon,
    }

    return (
      <ui.div
        ref={ref}
        className={cx("ui-number-input__addon", className)}
        aria-hidden
        __css={css}
        {...rest}
      />
    )
  },
)

NumberInputAddon.displayName = "NumberInputAddon"
NumberInputAddon.__ui__ = "NumberInputAddon"

const Stepper = ui("button", {
  baseStyle: {
    alignItems: "center",
    cursor: "pointer",
    display: "flex",
    flex: 1,
    justifyContent: "center",
    lineHeight: "normal",
    transitionDuration: "normal",
    transitionProperty: "common",
    userSelect: "none",
  },
})

type NumberIncrementStepperProps = HTMLUIProps<"button">

const NumberIncrementStepper = forwardRef<
  NumberIncrementStepperProps,
  "button"
>(({ className, children, ...rest }, ref) => {
  const { styles, getIncrementProps } = useNumberInputContext()

  const css: CSSUIObject = { ...styles.stepper }

  return (
    <Stepper
      className={cx("ui-number-input__stepper--up", className)}
      {...getIncrementProps(rest, ref)}
      __css={css}
    >
      {children ?? <ChevronIcon __css={{ transform: "rotate(180deg)" }} />}
    </Stepper>
  )
})

NumberIncrementStepper.displayName = "NumberIncrementStepper"
NumberIncrementStepper.__ui__ = "NumberIncrementStepper"

type NumberDecrementStepperProps = HTMLUIProps<"button">

const NumberDecrementStepper = forwardRef<
  NumberDecrementStepperProps,
  "button"
>(({ className, children, ...rest }, ref) => {
  const { styles, getDecrementProps } = useNumberInputContext()

  const css: CSSUIObject = { ...styles.stepper }

  return (
    <Stepper
      className={cx("ui-number-input__stepper--down", className)}
      {...getDecrementProps(rest, ref)}
      __css={css}
    >
      {children ?? <ChevronIcon />}
    </Stepper>
  )
})

NumberDecrementStepper.displayName = "NumberDecrementStepper"
NumberDecrementStepper.__ui__ = "NumberDecrementStepper"
