import type { ChangeEvent, ForwardedRef, RefAttributes } from "react"
import type { HTMLProps, PropGetter } from "../../core"
import type { FieldProps } from "../field"
import type { Props } from "./file-button"
import { useCallback, useRef } from "react"
import { assignRef, handlerAll, isNull, mergeRefs } from "../../utils"
import { useFieldProps } from "../field"

interface InputProps
  extends Partial<Pick<HTMLInputElement, "accept" | "multiple">>,
    RefAttributes<HTMLInputElement> {}

export interface UseFileButtonProps
  extends Omit<HTMLProps<"button">, "children" | "onChange" | "ref">,
    InputProps,
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
      ...ariaProps,
      ...dataProps,
      ...props,
      id,
      ref: mergeRefs(inputRef, ref),
      form,
      type: "file",
      name,
      style: {
        border: "none",
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
      required,
      tabIndex: -1,
      onChange,
    }),
    [
      dataProps,
      ariaProps,
      id,
      ref,
      form,
      name,
      accept,
      multiple,
      disabled,
      readOnly,
      required,
      onChange,
    ],
  )

  const getButtonProps: PropGetter<"button"> = useCallback(
    (props) => ({
      ...rest,
      ...props,
      ...ariaProps,
      ...dataProps,
      disabled,
      onClick: handlerAll(onClickProp, onClick),
    }),
    [rest, disabled, onClickProp, onClick, ariaProps, dataProps],
  )

  const getCustomButtonProps: PropGetter<"button", undefined, Props> =
    useCallback(
      (props) => ({
        ...props,
        disabled,
        readOnly,
        required,
        onClick,
      }),
      [disabled, readOnly, required, onClick],
    )

  return {
    getButtonProps,
    getCustomButtonProps,
    getInputProps,
  }
}

export type UseFileButtonReturn = ReturnType<typeof useFileButton>
