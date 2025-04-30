import type { ChangeEvent, ForwardedRef } from "react"
import type { HTMLProps, PropGetter } from "../../core"
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

export interface UseFileInputProps
  extends Omit<HTMLProps<"input">, "defaultValue" | "onChange" | "value"> {
  /**
   * The initial value of the file input.
   */
  defaultValue?: File[]
  /**
   * Ref to a reset function.
   */
  resetRef?: ForwardedRef<() => void>
  /**
   * The value of the file input.
   */
  value?: File[]
  /**
   * Function to be called when a file change event occurs.
   */
  onChange?: (files: File[] | undefined) => void
}

export const useFileInput = ({
  id,
  ref,
  form,
  name,
  accept,
  defaultValue,
  disabled,
  multiple,
  readOnly,
  resetRef,
  value,
  onChange: onChangeProp,
  onClick: onClickProp,
  ...props
}: UseFileInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [values, setValues] = useControllableState<File[] | undefined>({
    defaultValue,
    value,
    onChange: onChangeProp,
  })

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

  const rest = useClickable<HTMLDivElement>({
    disabled,
    onClick: handlerAll(onClickProp, onClick),
    ...props,
  })

  assignRef(resetRef, onReset)

  const getInputProps: PropGetter<"input"> = useCallback(
    (props = {}) => ({
      ...visuallyHiddenAttributes,
      id,
      form,
      type: "file",
      name,
      accept,
      disabled,
      multiple,
      readOnly,
      ...props,
      ref: mergeRefs(inputRef, props.ref, ref),
      onChange: handlerAll(props.onChange, onChange),
    }),
    [id, ref, name, form, accept, multiple, disabled, readOnly, onChange],
  )

  const getFieldProps: PropGetter = useCallback(
    (props = {}) => ({
      "data-placeholder": dataAttr(!values?.length),
      ...props,
      ...rest,
    }),
    [rest, values],
  )

  return { values, getFieldProps, getInputProps }
}

export type UseFileInputReturn = ReturnType<typeof useFileInput>
