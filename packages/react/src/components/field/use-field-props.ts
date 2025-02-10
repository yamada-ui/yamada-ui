import type { FocusEventHandler } from "react"
import type { Dict } from "../../utils"
import type { FieldProps } from "./field"
import { useMemo } from "react"
import { ariaAttr, dataAttr, handlerAll } from "../../utils"
import { useFieldsetContext } from "../fieldset"
import { useFieldContext } from "./field"

export interface UseFieldProps<Y extends HTMLElement> extends FieldProps {
  id?: string
  onBlur?: FocusEventHandler<Y>
  onFocus?: FocusEventHandler<Y>
}

export const useFieldProps = <Y extends HTMLElement, M extends Dict>({
  id,
  disabled,
  invalid,
  readOnly,
  required,
  onBlur,
  onFocus,
  ...rest
}: M & UseFieldProps<Y>) => {
  const fieldsetContext = useFieldsetContext()
  const fieldContext = useFieldContext()

  id ??= fieldContext?.id
  disabled ??= fieldContext?.disabled ?? fieldsetContext?.disabled
  required ??= fieldContext?.required
  readOnly ??= fieldContext?.readOnly
  invalid ??= fieldContext?.invalid ?? fieldsetContext?.invalid

  const props = useMemo(
    () => ({
      id,
      disabled,
      readOnly,
      required,
      ...rest,
    }),
    [id, disabled, readOnly, required, rest],
  )
  const dataProps = useMemo(
    () => ({
      "data-disabled": dataAttr(disabled),
      "data-invalid": dataAttr(invalid),
      "data-readonly": dataAttr(readOnly),
      "data-required": dataAttr(required),
    }),
    [disabled, invalid, readOnly, required],
  )
  const ariaProps = useMemo(
    () => ({
      "aria-disabled": ariaAttr(disabled),
      "aria-invalid": ariaAttr(invalid),
      "aria-readonly": ariaAttr(readOnly),
      "aria-required": ariaAttr(required),
    }),
    [disabled, invalid, readOnly, required],
  )
  const eventProps = useMemo(
    () => ({
      onBlur: handlerAll(fieldContext?.onBlur, onBlur),
      onFocus: handlerAll(fieldContext?.onFocus, onFocus),
    }),
    [fieldContext?.onBlur, fieldContext?.onFocus, onBlur, onFocus],
  )

  return {
    context: fieldContext,
    props,
    ariaProps,
    dataProps,
    eventProps,
  }
}
