"use client"

import type { FocusEventHandler } from "react"
import type { Dict } from "../../utils"
import type { FieldProps } from "./field"
import { useMemo } from "react"
import { useEnvironment } from "../../core"
import { ariaAttr, cx, dataAttr, handlerAll } from "../../utils"
import { useFieldsetContext } from "../fieldset"
import { useFieldContext } from "./field"

export interface UseFieldProps<Y extends HTMLElement> extends FieldProps {
  id?: string
  notSupportReadOnly?: boolean
  onBlur?: FocusEventHandler<Y>
  onFocus?: FocusEventHandler<Y>
}

export const useFieldProps = <Y extends HTMLElement, M extends Dict>(
  {
    id,
    "aria-describedby": ariaDescribedby,
    disabled,
    invalid,
    notSupportReadOnly,
    readOnly,
    required,
    onBlur,
    onFocus,
    ...rest
  }: M & UseFieldProps<Y> = {} as M & UseFieldProps<Y>,
) => {
  const { getDocument } = useEnvironment()
  const fieldsetContext = useFieldsetContext()
  const fieldContext = useFieldContext()

  id ??= fieldContext?.id
  disabled ??= fieldContext?.disabled ?? fieldsetContext?.disabled
  required ??= fieldContext?.required ?? fieldsetContext?.required
  readOnly ??= fieldContext?.readOnly ?? fieldsetContext?.readOnly
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
  const ariaProps = useMemo(() => {
    const hasErrorMessage =
      !!fieldContext?.errorMessageId &&
      !!getDocument()?.getElementById(fieldContext.errorMessageId)
    const hasHelperMessage =
      !!fieldContext?.helperMessageId &&
      !!getDocument()?.getElementById(fieldContext.helperMessageId)
    const errorMessageId =
      invalid && hasErrorMessage ? fieldContext.errorMessageId : undefined
    const helperMessageId =
      (!fieldContext?.replace || !invalid) && hasHelperMessage
        ? fieldContext.helperMessageId
        : undefined

    return {
      "aria-describedby": cx(errorMessageId, helperMessageId, ariaDescribedby),
      "aria-disabled": ariaAttr(
        notSupportReadOnly ? readOnly || disabled : disabled,
      ),
      "aria-invalid": ariaAttr(invalid),
      "aria-readonly": notSupportReadOnly ? undefined : ariaAttr(readOnly),
      "aria-required": ariaAttr(required),
    }
  }, [
    fieldContext,
    getDocument,
    invalid,
    ariaDescribedby,
    notSupportReadOnly,
    readOnly,
    disabled,
    required,
  ])
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
