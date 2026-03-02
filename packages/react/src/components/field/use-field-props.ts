"use client"

import type { FocusEventHandler } from "react"
import type { Dict } from "../../utils"
import type { FieldProps } from "./field"
import { useMemo, useState } from "react"
import { useEnvironment } from "../../core"
import {
  ariaAttr,
  cx,
  dataAttr,
  handlerAll,
  isObject,
  useSafeLayoutEffect,
} from "../../utils"
import { useFieldsetContext } from "../fieldset"
import { useFormContext } from "../form"
import { useFieldContext } from "./field"

export interface UseFieldProps<Y extends HTMLElement> extends FieldProps {
  id?: string
  name?: string
  notSupportReadOnly?: boolean
  onBlur?: FocusEventHandler<Y>
  onFocus?: FocusEventHandler<Y>
}

export const useFieldProps = <Y extends HTMLElement, M extends Dict>(
  {
    id,
    name,
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
  const formContext = useFormContext()
  const fieldsetContext = useFieldsetContext()
  const fieldContext = useFieldContext()
  const [errorMessageId, setErrorMessageId] = useState<string | undefined>(
    undefined,
  )
  const [helperMessageId, setHelperMessageId] = useState<string | undefined>(
    undefined,
  )

  id ??= fieldContext?.id
  disabled ??= fieldContext?.disabled ?? fieldsetContext?.disabled
  required ??= fieldContext?.required ?? fieldsetContext?.required
  readOnly ??= fieldContext?.readOnly ?? fieldsetContext?.readOnly
  invalid ??= fieldContext?.invalid ?? fieldsetContext?.invalid

  if (name) {
    disabled ??= isObject(formContext?.disabled)
      ? formContext.disabled[name]
      : formContext?.disabled
    required ??= isObject(formContext?.required)
      ? formContext.required[name]
      : formContext?.required
    readOnly ??= isObject(formContext?.readOnly)
      ? formContext.readOnly[name]
      : formContext?.readOnly
    invalid ??= isObject(formContext?.invalid)
      ? formContext.invalid[name]
      : formContext?.invalid
  }

  useSafeLayoutEffect(() => {
    const hasErrorMessage =
      !!fieldContext?.errorMessageId &&
      !!getDocument()?.getElementById(fieldContext.errorMessageId)
    const hasHelperMessage =
      !!fieldContext?.helperMessageId &&
      !!getDocument()?.getElementById(fieldContext.helperMessageId)

    setErrorMessageId(
      invalid && hasErrorMessage ? fieldContext.errorMessageId : undefined,
    )
    setHelperMessageId(
      (!fieldContext?.replace || !invalid) && hasHelperMessage
        ? fieldContext.helperMessageId
        : undefined,
    )
  }, [
    fieldContext?.errorMessageId,
    fieldContext?.helperMessageId,
    fieldContext?.replace,
    invalid,
  ])

  const props = useMemo(
    () => ({
      id,
      name,
      disabled,
      readOnly,
      required,
      ...rest,
    }),
    [id, name, disabled, readOnly, required, rest],
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
      "aria-describedby":
        ariaDescribedby ?? cx(errorMessageId, helperMessageId),
      "aria-disabled": ariaAttr(
        notSupportReadOnly ? readOnly || disabled : disabled,
      ),
      "aria-invalid": ariaAttr(invalid),
      "aria-readonly": notSupportReadOnly ? undefined : ariaAttr(readOnly),
      "aria-required": ariaAttr(required),
    }),
    [
      errorMessageId,
      helperMessageId,
      ariaDescribedby,
      notSupportReadOnly,
      readOnly,
      disabled,
      invalid,
      required,
    ],
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

export const resetFieldProps = {
  disabled: false,
  invalid: false,
  readOnly: false,
  required: false,
}
