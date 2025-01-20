import type { FocusEventHandler } from "react"
import type { Dict } from "../../utils"
import type { FormControlProps } from "./form-control"
import { useMemo } from "react"
import { ariaAttr, dataAttr, handlerAll } from "../../utils"
import { useFormControlContext } from "./form-control"

export interface UseFormControlProps<Y extends HTMLElement>
  extends FormControlProps {
  id?: string
  onBlur?: FocusEventHandler<Y>
  onFocus?: FocusEventHandler<Y>
}

export const useFormControlProps = <Y extends HTMLElement, M extends Dict>({
  id,
  disabled,
  invalid,
  readOnly,
  required,
  onBlur,
  onFocus,
  ...rest
}: M & UseFormControlProps<Y>) => {
  const context = useFormControlContext()

  id ??= context.id
  disabled ??= context.disabled
  required ??= context.required
  readOnly ??= context.readOnly
  invalid ??= context.invalid

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
      onBlur: handlerAll(context.onBlur, onBlur),
      onFocus: handlerAll(context.onFocus, onFocus),
    }),
    [context.onBlur, context.onFocus, onBlur, onFocus],
  )

  return {
    context,
    props,
    ariaProps,
    dataProps,
    eventProps,
  }
}
