import type { ChangeEvent, ForwardedRef, RefAttributes } from "react"
import type { HTMLProps, PropGetter } from "../../core"
import type { FieldProps } from "../field"
import type { Props } from "./file-button"
import { useCallback, useRef } from "react"
import { ariaAttr, assignRef, handlerAll, isNull, mergeRefs } from "../../utils"
import { useFieldProps } from "../field"

export interface UseFileButtonProps
  extends Omit<HTMLProps<"button">, "children" | "onChange" | "ref">,
    Partial<Pick<HTMLInputElement, "accept" | "multiple">>,
    RefAttributes<HTMLInputElement>,
    FieldProps {
  /**
   * Ref to a reset function.
   */
  resetRef?: ForwardedRef<() => void>
  /**
   * Function to be called when a file change event occurs.
   */
  onChange?: (files: File[] | undefined) => void
}

export const useFileButton = (props: UseFileButtonProps) => {
  const {
    props: {
      id,
      ref,
      form,
      name,
      accept,
      disabled,
      multiple,
      readOnly,
      required,
      resetRef,
      onChange: onChangeProp,
      onClick: onClickProp,
      ...rest
    },
    ariaProps,
    dataProps,
  } = useFieldProps(props)

  const inputRef = useRef<HTMLInputElement>(null)

  const onClick = useCallback(() => {
    if (disabled || readOnly) return

    inputRef.current?.click()
  }, [disabled, readOnly, inputRef])

  const onChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      const files = !isNull(ev.currentTarget.files)
        ? Array.from(ev.currentTarget.files)
        : undefined

      onChangeProp?.(files)
    },
    [onChangeProp],
  )

  const onReset = useCallback(() => {
    if (inputRef.current) inputRef.current.value = ""
  }, [inputRef])

  assignRef(resetRef, onReset)

  const getInputProps: PropGetter<"input"> = useCallback(
    (props) => ({
      ...dataProps,
      ...ariaProps,
      ...props,
      id,
      ref: mergeRefs(inputRef, ref),
      form,
      type: "file",
      name,
      "aria-hidden": true,
      accept,
      multiple,
      tabIndex: -1,
      onChange,
    }),
    [dataProps, ariaProps, id, ref, form, name, accept, multiple, onChange],
  )

  const getButtonProps: PropGetter<"button"> = useCallback(
    (props) => ({
      ...rest,
      ...props,
      disabled,
      onClick: handlerAll(onClickProp, onClick),
    }),
    [rest, disabled, onClickProp, onClick],
  )

  const getCustomButtonProps: PropGetter<
    HTMLProps<"button">,
    undefined,
    Props
  > = useCallback(
    (props) => ({
      ...props,
      disabled,
      invalid: ariaAttr(ariaProps["aria-invalid"]),
      readOnly,
      required,
      onClick,
    }),
    [disabled, ariaProps, readOnly, required, onClick],
  )

  return {
    getButtonProps,
    getCustomButtonProps,
    getInputProps,
  }
}

export type UseFileButtonReturn = ReturnType<typeof useFileButton>
