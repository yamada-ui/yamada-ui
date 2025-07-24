"use client"

import type { ChangeEvent, KeyboardEvent } from "react"
import type { HTMLProps, PropGetter, RequiredPropGetter } from "../../core"
import type { FieldProps } from "../field"
import { useCallback, useEffect, useId, useState } from "react"
import { useControllableState } from "../../hooks/use-controllable-state"
import { createDescendants } from "../../hooks/use-descendants"
import { filterUndefined, handlerAll, runKeyAction } from "../../utils"
import { useFieldProps } from "../field"

const {
  DescendantsContext: PinInputDescendantsContext,
  useDescendant: usePinInputDescendant,
  useDescendants: usePinInputDescendants,
} = createDescendants<HTMLInputElement>()

export {
  PinInputDescendantsContext,
  usePinInputDescendant,
  usePinInputDescendants,
}

const toArray = (value?: string) => value?.split("")

const validate = (value: string, type: UsePinInputProps["type"]) => {
  const NUMERIC_REGEX = /^[0-9]+$/
  const ALPHA_NUMERIC_REGEX = /^[a-zA-Z0-9]+$/i

  const regex = type === "alphanumeric" ? ALPHA_NUMERIC_REGEX : NUMERIC_REGEX

  return regex.test(value)
}

export interface UsePinInputProps
  extends Omit<HTMLProps, "defaultValue" | "mask" | "onChange" | "value">,
    FieldProps {
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

export const usePinInput = (props: UsePinInputProps = {}) => {
  const uuid = useId()
  const {
    props: {
      id = uuid,
      type = "number",
      autoFocus,
      defaultValue,
      disabled,
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
  const descendants = usePinInputDescendants()
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

      const next = descendants.nextValue(index, false)

      if (!next) return

      requestAnimationFrame(() => next.node.focus())
    },
    [descendants, moveFocus, manageFocus],
  )

  const focusInputField = useCallback(
    (direction: "next" | "prev", index: number) => {
      const input =
        direction === "next"
          ? descendants.nextValue(index, false)
          : descendants.prevValue(index, false)

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

      runKeyAction(
        ev,
        {
          ArrowLeft: (ev) => {
            ev.preventDefault()
            focusInputField("prev", index)
          },
          ArrowRight: (ev) => {
            ev.preventDefault()
            focusInputField("next", index)
          },
          Backspace: (ev) => {
            if ((ev.target as HTMLInputElement).value === "") {
              const prevInput = descendants.prevValue(index, false)

              if (!prevInput) return

              setValue("", index - 1, false)
              prevInput.node.focus()
              setMoveFocus(true)
            } else {
              setMoveFocus(false)
            }
          },
        },
        { preventDefault: false },
      )
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
      ...rest,
      ...props,
    }),
    [rest],
  )

  const getInputProps: RequiredPropGetter<"input", { index: number }> =
    useCallback(
      ({ index, ...props }) => ({
        ...ariaProps,
        ...dataProps,
        type: mask ? "password" : type === "number" ? "tel" : "text",
        autoComplete: otp ? "one-time-code" : "off",
        disabled,
        inputMode: type === "number" ? "numeric" : "text",
        placeholder:
          focusedIndex === index && !readOnly && !props.readOnly
            ? ""
            : placeholder,
        readOnly,
        value: values[index] || "",
        ...filterUndefined(props),
        id: `${id}${index ? `-${index}` : ""}`,
        onBlur: handlerAll(eventProps.onBlur, props.onBlur, onBlur),
        onChange: handlerAll(props.onChange, onChange(index)),
        onFocus: handlerAll(eventProps.onFocus, props.onFocus, onFocus(index)),
        onKeyDown: handlerAll(props.onKeyDown, onKeyDown(index)),
      }),
      [
        ariaProps,
        dataProps,
        eventProps,
        mask,
        type,
        disabled,
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
