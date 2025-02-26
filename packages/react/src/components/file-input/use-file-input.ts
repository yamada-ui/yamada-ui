import type { ChangeEvent, ForwardedRef } from "react"
import type { HTMLProps, PropGetter } from "../../core"
import { useCallback, useRef } from "react"
import { useControllableState } from "../../hooks/use-controllable-state"
import { assignRef, dataAttr, handlerAll, isNull, mergeRefs } from "../../utils"

interface InputProps
  extends Partial<Pick<HTMLInputElement, "accept" | "multiple">> {}

export interface UseFileInputProps
  extends Omit<
      HTMLProps<"input">,
      "children" | "defaultValue" | "onChange" | "value"
    >,
    InputProps {
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
  ...rest
}: UseFileInputProps) => {
  const [values, setValues] = useControllableState<File[] | undefined>({
    defaultValue,
    value,
    onChange: onChangeProp,
  })

  const inputRef = useRef<HTMLInputElement>(null)

  const onClick = useCallback(() => {
    if (disabled || readOnly) return

    inputRef.current?.click()
  }, [disabled, readOnly])

  const onReset = useCallback(() => {
    if (inputRef.current) inputRef.current.value = ""

    setValues(undefined)
  }, [setValues])

  assignRef(resetRef, onReset)

  const onChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      let files = !isNull(ev.currentTarget.files)
        ? Array.from(ev.currentTarget.files)
        : undefined

      if (!files?.length) files = undefined

      setValues(files)
    },
    [setValues],
  )

  const getInputProps: PropGetter<"input"> = useCallback(
    (props) => ({
      ...props,
      id,
      ref: mergeRefs(inputRef, ref),
      form,
      type: "file",
      name,
      style: {
        border: "0px",
        clip: "rect(0px, 0px, 0px, 0px)",
        height: "1px",
        margin: "-1px",
        overflow: "hidden",
        padding: "0px",
        position: "absolute",
        whiteSpace: "nowrap",
        width: "1px",
      },
      "aria-hidden": true,
      accept,
      disabled,
      multiple,
      readOnly,
      tabIndex: -1,
      onChange,
    }),
    [id, ref, name, form, accept, multiple, disabled, readOnly, onChange],
  )

  const getFieldProps: PropGetter = useCallback(
    (props) => ({
      ...props,
      ...rest,
      ref,
      "data-placeholder": dataAttr(!values?.length),
      disabled: disabled || readOnly,
      onClick: handlerAll(onClickProp, onClick),
    }),
    [ref, rest, values, disabled, readOnly, onClickProp, onClick],
  )

  return { values, getFieldProps, getInputProps }
}

export type UseFileInputReturn = ReturnType<typeof useFileInput>
