import type {
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
  ColorModeToken,
  CSS,
} from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import type { FormControlOptions } from "@yamada-ui/form-control"
import {
  formControlProperties,
  useFormControlProps,
} from "@yamada-ui/form-control"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import { createDescendant } from "@yamada-ui/use-descendant"
import {
  createContext,
  cx,
  handlerAll,
  mergeRefs,
  pickObject,
  filterUndefined,
  getValidChildren,
} from "@yamada-ui/utils"
import type { ChangeEvent, KeyboardEvent, Ref } from "react"
import { useCallback, useEffect, useId, useState } from "react"

const toArray = (value?: string) => value?.split("")

const validate = (value: string, type: PinInputProps["type"]) => {
  const NUMERIC_REGEX = /^[0-9]+$/
  const ALPHA_NUMERIC_REGEX = /^[a-zA-Z0-9]+$/i

  const regex = type === "alphanumeric" ? ALPHA_NUMERIC_REGEX : NUMERIC_REGEX

  return regex.test(value)
}

type PinInputContext = {
  getInputProps: (
    props: PinInputFieldProps & {
      index: number
      ref?: Ref<HTMLInputElement>
    },
  ) => PinInputFieldProps
  styles: Record<string, CSSUIObject>
}

const [PinInputProvider, usePinInputContext] = createContext<PinInputContext>({
  strict: false,
  name: "PinInputContext",
})

const { DescendantsContextProvider, useDescendants, useDescendant } =
  createDescendant<HTMLInputElement>()

type PinInputOptions = {
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
   * The initial value of the pin input.
   */
  defaultValue?: string
  /**
   * If `true`, the pin input receives focus on mount.
   *
   * @default false
   */
  autoFocus?: boolean
  /**
   * If `true`, focus will move automatically to the next input once filled.
   *
   * @default true
   */
  manageFocus?: boolean
  /**
   * If `true`, the pin input component signals to its fields that they should.
   */
  otp?: boolean
  /**
   * If `true`, the input's value will be masked just like `type=password`.
   */
  mask?: boolean
  /**
   * Function called on input change.
   */
  onChange?: (value: string) => void
  /**
   * Function called when all inputs have valid values.
   */
  onComplete?: (value: string) => void
  /**
   * The number of inputs to display.
   *
   * @default 4
   */
  items?: number
  /**
   * The border color when the input is focused.
   */
  focusBorderColor?: ColorModeToken<CSS.Property.BorderColor, "colors">
  /**
   * The border color when the input is invalid.
   */
  errorBorderColor?: ColorModeToken<CSS.Property.BorderColor, "colors">
}

export type PinInputProps = Omit<HTMLUIProps<"div">, "onChange" | "mask"> &
  ThemeProps<"PinInput"> &
  FormControlOptions &
  PinInputOptions

/**
 * `PinInput` is a component used to capture pin codes or OTP (One-Time Password) inputs.
 *
 * @see Docs https://yamada-ui.com/components/forms/pin-input
 */
export const PinInput = forwardRef<PinInputProps, "div">(
  ({ focusBorderColor, errorBorderColor, ...props }, ref) => {
    const [styles, mergedProps] = useMultiComponentStyle("PinInput", {
      focusBorderColor,
      errorBorderColor,
      ...props,
    })
    let {
      id,
      className,
      type = "number",
      placeholder = "○",
      value,
      defaultValue,
      autoFocus,
      manageFocus = true,
      otp = false,
      mask,
      onChange: onChangeProp,
      onComplete,
      items = 4,
      children,
      ...rest
    } = useFormControlProps(omitThemeProps(mergedProps))
    const {
      readOnly,
      "aria-readonly": _ariaReadonly,
      ...formControlProps
    } = pickObject(rest, formControlProperties)

    id ??= useId()

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
      value: toArray(value),
      defaultValue: toArray(defaultValue) || [],
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
      (value: string, index: number, isFocus: boolean = true) => {
        let nextValues = [...values]

        nextValues[index] = value

        setValues(nextValues)

        nextValues = nextValues.filter(Boolean)

        const isComplete =
          value !== "" &&
          nextValues.length === descendants.count() &&
          nextValues.every((value) => value != null && value !== "")

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

        if (value[0] === eventValue.charAt(0)) {
          nextValue = eventValue.charAt(1)
        } else if (value[0] === eventValue.charAt(1)) {
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
            prevInput.node?.focus()
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
      }: PinInputFieldProps & {
        index: number
        ref?: Ref<HTMLInputElement>
      }): PinInputFieldProps => ({
        inputMode: type === "number" ? "numeric" : "text",
        type: mask ? "password" : type === "number" ? "tel" : "text",
        ...formControlProps,
        ...filterUndefined(props),
        id: `${id}-${index}`,
        value: values[index] || "",
        onChange: handlerAll(props.onChange, onChange(index)),
        onKeyDown: handlerAll(props.onKeyDown, onKeyDown(index)),
        onFocus: handlerAll(props.onFocus, onFocus(index)),
        onBlur: handlerAll(props.onBlur, onBlur),
        autoComplete: otp ? "one-time-code" : "off",
        placeholder:
          focusedIndex === index && !readOnly && !props.readOnly
            ? ""
            : placeholder,
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
      display: "flex",
      alignItems: "center",
      ...styles.container,
    }

    let cloneChildren = getValidChildren(children)

    if (!cloneChildren.length)
      for (let i = 0; i < items; i++) {
        cloneChildren.push(<PinInputField key={i} />)
      }

    return (
      <DescendantsContextProvider value={descendants}>
        <PinInputProvider value={{ getInputProps, styles }}>
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

export type PinInputFieldProps = HTMLUIProps<"input"> & FormControlOptions

export const PinInputField = forwardRef<PinInputFieldProps, "input">(
  ({ className, ...rest }, ref) => {
    const { getInputProps, styles } = usePinInputContext()
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
