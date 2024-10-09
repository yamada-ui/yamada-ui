import type {
  ColorModeToken,
  CSS,
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
} from "@yamada-ui/core"
import type { FormControlOptions } from "@yamada-ui/form-control"
import type { ChangeEvent, KeyboardEvent, Ref } from "react"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "@yamada-ui/core"
import {
  formControlProperties,
  useFormControlProps,
} from "@yamada-ui/form-control"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import { createDescendant } from "@yamada-ui/use-descendant"
import {
  createContext,
  cx,
  filterUndefined,
  getValidChildren,
  handlerAll,
  mergeRefs,
  pickObject,
} from "@yamada-ui/utils"
import { useCallback, useEffect, useId, useState } from "react"

const toArray = (value?: string) => value?.split("")

const validate = (value: string, type: PinInputProps["type"]) => {
  const NUMERIC_REGEX = /^[0-9]+$/
  const ALPHA_NUMERIC_REGEX = /^[a-zA-Z0-9]+$/i

  const regex = type === "alphanumeric" ? ALPHA_NUMERIC_REGEX : NUMERIC_REGEX

  return regex.test(value)
}

interface PinInputContext {
  styles: { [key: string]: CSSUIObject | undefined }
  getInputProps: (
    props: {
      index: number
      ref?: Ref<HTMLInputElement>
    } & PinInputFieldProps,
  ) => PinInputFieldProps
}

const [PinInputProvider, usePinInputContext] = createContext<PinInputContext>({
  name: "PinInputContext",
  errorMessage: `PinInputContext returned is 'undefined'. Seems you forgot to wrap the components in "<PinInput />"`,
})

const { DescendantsContextProvider, useDescendant, useDescendants } =
  createDescendant<HTMLInputElement>()

interface PinInputOptions {
  /**
   * The top-level id string that will be applied to the input fields.
   * The index of the input will be appended to this top-level id.
   */
  id?: string
  /**
   * The type of values the pin-input should allow.
   *
   * @default 'number'
   */
  type?: "alphanumeric" | "number"
  /**
   * If `true`, the pin input receives focus on mount.
   *
   * @default false
   */
  autoFocus?: boolean
  /**
   * The initial value of the pin input.
   */
  defaultValue?: string
  /**
   * The border color when the input is invalid.
   */
  errorBorderColor?: ColorModeToken<CSS.Property.BorderColor, "colors">
  /**
   * The border color when the input is focused.
   */
  focusBorderColor?: ColorModeToken<CSS.Property.BorderColor, "colors">
  /**
   * The number of inputs to display.
   *
   * @default 4
   */
  items?: number
  /**
   * If `true`, focus will move automatically to the next input once filled.
   *
   * @default true
   */
  manageFocus?: boolean
  /**
   * If `true`, the input's value will be masked just like `type=password`.
   */
  mask?: boolean
  /**
   * If `true`, the pin input component signals to its fields that they should.
   */
  otp?: boolean
  /**
   * The placeholder for the pin input.
   *
   * @default '○'
   */
  placeholder?: string
  /**
   * The value of the pin input.
   */
  value?: string
  /**
   * Function called on input change.
   */
  onChange?: (value: string) => void
  /**
   * Function called when all inputs have valid values.
   */
  onComplete?: (value: string) => void
}

export interface PinInputProps
  extends Omit<HTMLUIProps, "defaultValue" | "mask" | "onChange">,
    ThemeProps<"PinInput">,
    FormControlOptions,
    PinInputOptions {}

/**
 * `PinInput` is a component used to capture pin codes or OTP (One-Time Password) inputs.
 *
 * @see Docs https://yamada-ui.com/components/forms/pin-input
 */
export const PinInput = forwardRef<PinInputProps, "div">(
  ({ errorBorderColor, focusBorderColor, ...props }, ref) => {
    const [styles, mergedProps] = useComponentMultiStyle("PinInput", {
      errorBorderColor,
      focusBorderColor,
      ...props,
    })
    let {
      id,
      type = "number",
      className,
      autoFocus,
      children,
      defaultValue,
      items = 4,
      manageFocus = true,
      mask,
      otp = false,
      placeholder = "○",
      value,
      onChange: onChangeProp,
      onComplete,
      ...rest
    } = useFormControlProps(omitThemeProps(mergedProps))
    const {
      "aria-readonly": _ariaReadonly,
      readOnly,
      ...formControlProps
    } = pickObject(rest, formControlProperties)
    const uuid = useId()

    id ??= uuid

    const descendants = useDescendants()

    const [moveFocus, setMoveFocus] = useState<boolean>(true)
    const [focusedIndex, setFocusedIndex] = useState<number>(-1)

    useEffect(() => {
      if (!autoFocus) return

      const firstValue = descendants.firstValue()

      if (!firstValue) return

      requestAnimationFrame(() => firstValue.node.focus())
    }, [autoFocus, descendants])

    const [values, setValues] = useControllableState<string[]>({
      defaultValue: toArray(defaultValue) || [],
      value: toArray(value),
      onChange: (values) => onChangeProp?.(values.join("")),
    })

    const focusNext = useCallback(
      (index: number) => {
        if (!moveFocus || !manageFocus) return

        const next = descendants.nextValue(index, undefined, false)

        if (!next) return

        requestAnimationFrame(() => next.node.focus())
      },
      [descendants, moveFocus, manageFocus],
    )

    const setValue = useCallback(
      (value: string, index: number, isFocus = true) => {
        let nextValues = [...values]

        nextValues[index] = value

        setValues(nextValues)

        nextValues = nextValues.filter(Boolean)

        const isComplete =
          value !== "" && nextValues.length === descendants.count()

        if (isComplete) {
          onComplete?.(nextValues.join(""))
          descendants.value(index)?.node.blur()
        } else if (isFocus) {
          focusNext(index)
        }
      },
      [values, setValues, descendants, onComplete, focusNext],
    )

    const getNextValue = useCallback(
      (value: string | undefined, eventValue: string) => {
        let nextValue = eventValue

        if (!value?.length) return nextValue

        if (value.startsWith(eventValue.charAt(0))) {
          nextValue = eventValue.charAt(1)
        } else if (value.startsWith(eventValue.charAt(1))) {
          nextValue = eventValue.charAt(0)
        }

        return nextValue
      },
      [],
    )

    const onChange = useCallback(
      (index: number) =>
        ({ target }: ChangeEvent<HTMLInputElement>) => {
          const eventValue = target.value
          const currentValue = values[index]
          const nextValue = getNextValue(currentValue, eventValue)

          if (nextValue === "") {
            setValue("", index)

            return
          }

          if (eventValue.length > 2) {
            if (!validate(eventValue, type)) return

            const nextValue = eventValue
              .split("")
              .filter((_, index) => index < descendants.count())

            setValues(nextValue)

            if (nextValue.length === descendants.count()) {
              onComplete?.(nextValue.join(""))
              descendants.value(index)?.node.blur()
            }
          } else {
            if (validate(nextValue, type)) setValue(nextValue, index)

            setMoveFocus(true)
          }
        },
      [
        descendants,
        getNextValue,
        onComplete,
        setValue,
        setValues,
        type,
        values,
      ],
    )

    const onKeyDown = useCallback(
      (index: number) =>
        ({ key, target }: KeyboardEvent<HTMLInputElement>) => {
          if (key !== "Backspace" || !manageFocus) return

          if ((target as HTMLInputElement).value === "") {
            const prevInput = descendants.prevValue(index, undefined, false)

            if (!prevInput) return

            setValue("", index - 1, false)
            prevInput.node.focus()
            setMoveFocus(true)
          } else {
            setMoveFocus(false)
          }
        },
      [descendants, manageFocus, setValue],
    )

    const onFocus = useCallback(
      (index: number) => () => setFocusedIndex(index),
      [],
    )

    const onBlur = useCallback(() => setFocusedIndex(-1), [])

    const getInputProps = useCallback(
      ({
        index,
        ...props
      }: {
        index: number
        ref?: Ref<HTMLInputElement>
      } & PinInputFieldProps): PinInputFieldProps => ({
        type: mask ? "password" : type === "number" ? "tel" : "text",
        inputMode: type === "number" ? "numeric" : "text",
        ...formControlProps,
        ...filterUndefined(props),
        id: `${id}-${index}`,
        autoComplete: otp ? "one-time-code" : "off",
        placeholder:
          focusedIndex === index && !readOnly && !props.readOnly
            ? ""
            : placeholder,
        value: values[index] || "",
        onBlur: handlerAll(props.onBlur, onBlur),
        onChange: handlerAll(props.onChange, onChange(index)),
        onFocus: handlerAll(props.onFocus, onFocus(index)),
        onKeyDown: handlerAll(props.onKeyDown, onKeyDown(index)),
      }),
      [
        type,
        mask,
        formControlProps,
        id,
        values,
        onChange,
        onKeyDown,
        onFocus,
        onBlur,
        otp,
        focusedIndex,
        readOnly,
        placeholder,
      ],
    )

    const css: CSSUIObject = {
      alignItems: "center",
      display: "flex",
      ...styles.container,
    }

    let cloneChildren = getValidChildren(children)

    if (!cloneChildren.length)
      for (let i = 0; i < items; i++) {
        cloneChildren.push(<PinInputField key={i} />)
      }

    return (
      <DescendantsContextProvider value={descendants}>
        <PinInputProvider value={{ styles, getInputProps }}>
          <ui.div
            ref={ref}
            className={cx("ui-pin-input", className)}
            __css={css}
            {...rest}
          >
            {cloneChildren}
          </ui.div>
        </PinInputProvider>
      </DescendantsContextProvider>
    )
  },
)

PinInput.displayName = "PinInput"
PinInput.__ui__ = "PinInput"

export interface PinInputFieldProps
  extends HTMLUIProps<"input">,
    FormControlOptions {}

export const PinInputField = forwardRef<PinInputFieldProps, "input">(
  ({ className, ...rest }, ref) => {
    const { styles, getInputProps } = usePinInputContext()
    const { index, register } = useDescendant()

    rest = useFormControlProps(rest)

    const css: CSSUIObject = { ...styles.field }

    return (
      <ui.input
        className={cx("ui-pin-input__field", className)}
        {...getInputProps({ ...rest, ref: mergeRefs(register, ref), index })}
        __css={css}
      />
    )
  },
)

PinInputField.displayName = "PinInputField"
PinInputField.__ui__ = "PinInputField"
