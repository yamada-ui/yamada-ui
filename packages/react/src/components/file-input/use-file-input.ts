import type { ChangeEvent, RefObject } from "react"
import type { HTMLProps, PropGetter } from "../../core"
import type { Dict } from "../../utils"
import type { FieldProps } from "../field"
import { useCallback, useRef } from "react"
import { useClickable } from "../../hooks/use-clickable"
import { useControllableState } from "../../hooks/use-controllable-state"
import {
  assignRef,
  dataAttr,
  handlerAll,
  isNull,
  mergeRefs,
  visuallyHiddenAttributes,
} from "../../utils"
import { useFieldProps } from "../field"

export type UseFileInputProps<Y extends "button" | "input" = "input"> =
  FieldProps &
    Omit<HTMLProps<Y>, "defaultValue" | "onChange" | "ref" | "value"> &
    Pick<HTMLProps<"input">, "accept" | "multiple" | "ref"> & {
      /**
       * The initial value of the file input.
       */
      defaultValue?: File[]
      /**
       * Ref to a reset function.
       */
      resetRef?: RefObject<(() => void) | null>
      /**
       * The value of the file input.
       */
      value?: File[]
      /**
       * Function to be called when a file change event occurs.
       */
      onChange?: (files: File[] | undefined) => void
    }

export const useFileInput = <Y extends "button" | "input" = "input">(
  props: UseFileInputProps<Y>,
) => {
  const {
    props: {
      id,
      ref,
      form,
      name,
      accept,
      defaultValue,
      disabled,
      multiple,
      readOnly,
      required,
      resetRef,
      value,
      onChange: onChangeProp,
      onClick: onClickProp,
      ...rest
    },
    ariaProps,
    dataProps,
    eventProps,
  } = useFieldProps<HTMLElement, UseFileInputProps<Y>>(props)
  const inputRef = useRef<HTMLInputElement>(null)
  const [values, setValues] = useControllableState<File[] | undefined>({
    defaultValue,
    value,
    onChange: onChangeProp,
  })
  const count = values?.length ?? 0

  const onClick = useCallback(() => {
    if (disabled || readOnly) return

    inputRef.current?.click()
  }, [disabled, readOnly])

  const onReset = useCallback(() => {
    if (inputRef.current) inputRef.current.value = ""

    setValues(undefined)
  }, [setValues])

  const onChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      const files = !isNull(ev.currentTarget.files)
        ? Array.from(ev.currentTarget.files)
        : undefined

      setValues(files?.length ? files : undefined)
    },
    [setValues],
  )

  const clickableProps = useClickable<HTMLElement, Dict>({
    ...dataProps,
    ...eventProps,
    ...rest,
    disabled,
    onClick: handlerAll(onClickProp, onClick),
  })

  assignRef(resetRef, onReset)

  const getInputProps: PropGetter<"input"> = useCallback(
    (props = {}) => ({
      ...visuallyHiddenAttributes,
      ...ariaProps,
      ...dataProps,
      ...eventProps,
      id,
      form,
      type: "file",
      name,
      accept,
      disabled,
      multiple,
      readOnly,
      required,
      ...props,
      ref: mergeRefs(inputRef, props.ref, ref),
      onChange: handlerAll(props.onChange, onChange),
    }),
    [
      required,
      ariaProps,
      dataProps,
      eventProps,
      id,
      form,
      name,
      accept,
      disabled,
      multiple,
      readOnly,
      ref,
      onChange,
    ],
  )

  const getFieldProps: PropGetter = useCallback(
    (props = {}) => ({
      "data-placeholder": dataAttr(!count),
      ...clickableProps,
      ...props,
    }),
    [clickableProps, count],
  )

  return {
    disabled,
    readOnly,
    required,
    values,
    clickableProps,
    getFieldProps,
    getInputProps,
  }
}

export type UseFileInputReturn = ReturnType<typeof useFileInput>
