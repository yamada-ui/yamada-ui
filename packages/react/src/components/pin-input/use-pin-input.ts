import type { ChangeEvent, KeyboardEvent, Ref } from "react"
import type { HTMLProps, PropGetter, RequiredPropGetter } from "../../core"
import type { FieldProps } from "../field"
import type { InputProps, UseInputBorderProps } from "../input"
import { useCallback, useEffect, useId, useState } from "react"
import { useControllableState } from "../../hooks/use-controllable-state"
import { createDescendant } from "../../hooks/use-descendant"
import { filterUndefined, handlerAll } from "../../utils"
import { useFieldProps } from "../field"

export const { DescendantsContext, useDescendant, useDescendants } =
  createDescendant<HTMLInputElement>()

const toArray = (value?: string) => value?.split("")

const validate = (value: string, type: UsePinInputProps["type"]) => {
  const NUMERIC_REGEX = /^[0-9]+$/
  const ALPHA_NUMERIC_REGEX = /^[a-zA-Z0-9]+$/i

  const regex = type === "alphanumeric" ? ALPHA_NUMERIC_REGEX : NUMERIC_REGEX

  return regex.test(value)
}

export interface UsePinInputProps
  extends Omit<HTMLProps, "defaultValue" | "mask" | "onChange">,
    FieldProps,
    UseInputBorderProps {
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

export const usePinInput = (props: UsePinInputProps) => {
  const uuid = useId()
  const {
    props: {
      id = uuid,
      type = "number",
      autoFocus,
      defaultValue,
      disabled,
      errorBorderColor,
      focusBorderColor,
      manageFocus = true,
      mask,
      otp = false,
      placeholder = "○",
      readOnly,
      value,
      onChange: onChangeProp,
      onComplete,
      ...rest
    },
    ariaProps,
    dataProps,
    eventProps,
  } = useFieldProps(props)

  const descendants = useDescendants()
  const [moveFocus, setMoveFocus] = useState<boolean>(true)
  const [focusedIndex, setFocusedIndex] = useState<number>(-1)
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

  const focusInputField = useCallback(
    (direction: "next" | "prev", index: number) => {
      const input =
        direction === "next"
          ? descendants.nextValue(index, undefined, false)
          : descendants.prevValue(index, undefined, false)

      if (!input) return

      const valueLength = input.node.value.length

      requestAnimationFrame(() => {
        input.node.focus()
        input.node.setSelectionRange(0, valueLength)
      })
    },
    [descendants],
  )

  const setValue = useCallback(
    (value: string, index: number, focus = true) => {
      let nextValues = [...values]

      nextValues[index] = value

      setValues(nextValues)

      nextValues = nextValues.filter(Boolean)

      const complete = value !== "" && nextValues.length === descendants.count()

      if (complete) {
        onComplete?.(nextValues.join(""))
        descendants.value(index)?.node.blur()
      } else if (focus) {
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
    [descendants, getNextValue, onComplete, setValue, setValues, type, values],
  )

  const onKeyDown = useCallback(
    (index: number) => (ev: KeyboardEvent<HTMLInputElement>) => {
      if (!manageFocus) return

      const actions: { [key: string]: Function | undefined } = {
        ArrowLeft: () => {
          ev.preventDefault()
          focusInputField("prev", index)
        },
        ArrowRight: () => {
          ev.preventDefault()
          focusInputField("next", index)
        },
        Backspace: () => {
          if ((ev.target as HTMLInputElement).value === "") {
            const prevInput = descendants.prevValue(index, undefined, false)

            if (!prevInput) return

            setValue("", index - 1, false)
            prevInput.node.focus()
            setMoveFocus(true)
          } else {
            setMoveFocus(false)
          }
        },
      }

      const action = actions[ev.key]

      if (!action) return

      action()
    },
    [descendants, focusInputField, manageFocus, setValue],
  )

  const onFocus = useCallback(
    (index: number) => () => setFocusedIndex(index),
    [],
  )

  const onBlur = useCallback(() => setFocusedIndex(-1), [])

  useEffect(() => {
    if (!autoFocus) return

    const firstValue = descendants.firstValue()

    if (!firstValue) return

    requestAnimationFrame(() => firstValue.node.focus())
  }, [autoFocus, descendants])

  const getRootProps: PropGetter = useCallback(
    (props) => ({
      role: "group",
      ...ariaProps,
      ...dataProps,
      ...eventProps,
      ...rest,
      ...props,
    }),
    [ariaProps, dataProps, eventProps, rest],
  )

  const getInputProps: RequiredPropGetter<
    InputProps,
    { index: number; ref?: Ref<HTMLInputElement> }
  > = useCallback(
    ({ index, ...props }) => ({
      ...ariaProps,
      ...dataProps,
      ...eventProps,
      type: mask ? "password" : type === "number" ? "tel" : "text",
      disabled,
      errorBorderColor,
      focusBorderColor,
      inputMode: type === "number" ? "numeric" : "text",
      readOnly,
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
      ariaProps,
      dataProps,
      eventProps,
      mask,
      type,
      disabled,
      errorBorderColor,
      focusBorderColor,
      readOnly,
      id,
      otp,
      focusedIndex,
      placeholder,
      values,
      onBlur,
      onChange,
      onFocus,
      onKeyDown,
    ],
  )

  return {
    descendants,
    getInputProps,
    getRootProps,
  }
}

export type UsePinInputReturn = ReturnType<typeof usePinInput>
