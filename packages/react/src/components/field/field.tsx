"use client"

import type { ReactNode } from "react"
import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { FieldStyle } from "./field.style"
import { isValidElement, useId, useMemo, useState } from "react"
import { createSlotComponent, styled } from "../../core"
import {
  createContext,
  dataAttr,
  isObject,
  useSplitChildren,
} from "../../utils"
import { useFieldsetContext } from "../fieldset"
import { useFormContext } from "../form"
import { fieldStyle } from "./field.style"

export interface FieldContext
  extends FieldProps, Pick<FieldRootProps, "replace"> {
  id: string
  errorMessageId: string
  focused: boolean
  helperMessageId: string
  labelId: string
  onBlur: () => void
  onFocus: () => void
}

const [FieldContext, useFieldContext] = createContext<FieldContext>({
  name: "FieldContext",
  strict: false,
})

export { FieldContext, useFieldContext }

export interface FieldProps {
  /**
   * If `true`, the field will be disabled.
   *
   * @default false
   */
  disabled?: boolean
  /**
   * If `true`, the field will be invalid.
   *
   * @default false
   */
  invalid?: boolean
  /**
   * If `true`, the field will be readonly.
   *
   * @default false
   */
  readOnly?: boolean
  /**
   * If `true`, the field will be required.
   *
   * @default false
   */
  required?: boolean
}

export interface FieldRootProps
  extends
    HTMLStyledProps,
    ThemeProps<FieldStyle>,
    Pick<FieldLabelProps, "optionalIndicator" | "requiredIndicator">,
    FieldProps {
  /**
   * The name of the field.
   */
  name?: string
  /**
   * The field error message to use.
   */
  errorMessage?: ReactNode
  /**
   * The field helper message to use.
   */
  helperMessage?: ReactNode
  /**
   * The field label to use.
   */
  label?: ReactNode
  /**
   * If `true`, switch between helper message and error message using invalid.
   *
   * @default true
   */
  replace?: boolean
  /**
   * Props the error message component.
   */
  errorMessageProps?: FieldErrorMessageProps
  /**
   * Props the helper message component.
   */
  helperMessageProps?: FieldHelperMessageProps
  /**
   * Props the label component.
   */
  labelProps?: FieldLabelProps
}

const {
  PropsContext: FieldPropsContext,
  usePropsContext: useFieldPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<FieldRootProps, FieldStyle>("field", fieldStyle)

export { FieldPropsContext, useFieldPropsContext }

/**
 * `Field` is a component used to group form elements with label, helper message, error message, etc.
 *
 * @see https://yamada-ui.com/docs/components/field
 */
export const FieldRoot = withProvider<"div", FieldRootProps>(
  ({
    id,
    name,
    children,
    disabled,
    errorMessage,
    helperMessage,
    invalid,
    label,
    optionalIndicator,
    readOnly,
    replace,
    required,
    requiredIndicator,
    errorMessageProps,
    helperMessageProps,
    labelProps,
    ...rest
  }) => {
    const uuid = useId()
    const labelId = useId()
    const helperMessageId = useId()
    const errorMessageId = useId()
    const formContext = useFormContext()
    const fieldsetContext = useFieldsetContext()
    const [focused, setFocused] = useState<boolean>(false)
    const [
      omittedChildren,
      customLabel,
      customHelperMessage,
      customErrorMessage,
    ] = useSplitChildren(
      children,
      FieldLabel,
      FieldHelperMessage,
      FieldErrorMessage,
    )

    id ??= uuid
    optionalIndicator ??= formContext?.optionalIndicator
    requiredIndicator ??= formContext?.requiredIndicator

    disabled ??= fieldsetContext?.disabled
    invalid ??= fieldsetContext?.invalid
    readOnly ??= fieldsetContext?.readOnly
    required ??= fieldsetContext?.required

    if (name) {
      disabled ??= isObject(formContext?.disabled)
        ? formContext.disabled[name]
        : formContext?.disabled
      invalid ??= isObject(formContext?.invalid)
        ? formContext.invalid[name]
        : formContext?.invalid
      readOnly ??= isObject(formContext?.readOnly)
        ? formContext.readOnly[name]
        : formContext?.readOnly
      required ??= isObject(formContext?.required)
        ? formContext.required[name]
        : formContext?.required
      replace ??= isObject(formContext?.replace)
        ? (formContext.replace[name] ?? true)
        : (formContext?.replace ?? true)
      errorMessage ??= formContext?.errorMessage?.[name]
      helperMessage ??= formContext?.helperMessage?.[name]
    }

    const context = useMemo(
      () => ({
        id,
        disabled,
        errorMessageId,
        focused,
        helperMessageId,
        invalid,
        labelId,
        readOnly,
        replace,
        required,
        onBlur: () => setFocused(false),
        onFocus: () => setFocused(true),
      }),
      [
        id,
        disabled,
        labelId,
        focused,
        invalid,
        helperMessageId,
        errorMessageId,
        readOnly,
        replace,
        required,
      ],
    )

    return (
      <FieldContext value={context}>
        <styled.div
          data-disabled={dataAttr(disabled)}
          data-focus={dataAttr(focused)}
          data-invalid={dataAttr(invalid)}
          data-readonly={dataAttr(readOnly)}
          role="group"
          {...rest}
        >
          {customLabel ||
            (label ? (
              <FieldLabel
                optionalIndicator={optionalIndicator}
                requiredIndicator={requiredIndicator}
                {...labelProps}
              >
                {label}
              </FieldLabel>
            ) : null)}

          {omittedChildren}

          {customHelperMessage ||
            (helperMessage ? (
              <FieldHelperMessage {...helperMessageProps}>
                {helperMessage}
              </FieldHelperMessage>
            ) : null)}

          {customErrorMessage ||
            (errorMessage ? (
              <FieldErrorMessage {...errorMessageProps}>
                {errorMessage}
              </FieldErrorMessage>
            ) : null)}
        </styled.div>
      </FieldContext>
    )
  },
  "root",
)()

export interface FieldLabelProps extends HTMLStyledProps<"label"> {
  /**
   * The optional indicator to use.
   */
  optionalIndicator?: ReactNode
  /**
   * If `true`, the field will be required.
   *
   * @default false
   */
  required?: boolean
  /**
   * The required indicator to use.
   */
  requiredIndicator?: ReactNode
}

export const FieldLabel = withContext<"label", FieldLabelProps>(
  ({
    id,
    htmlFor,
    children,
    optionalIndicator = null,
    required,
    requiredIndicator = null,
    ...rest
  }) => {
    const fieldContext = useFieldContext()

    id ??= fieldContext?.labelId
    htmlFor ??= fieldContext?.id
    required ??= fieldContext?.required

    return (
      <styled.label
        id={id}
        htmlFor={htmlFor}
        data-disabled={dataAttr(fieldContext?.disabled)}
        data-focus={dataAttr(fieldContext?.focused)}
        data-invalid={dataAttr(fieldContext?.invalid)}
        data-readonly={dataAttr(fieldContext?.readOnly)}
        {...rest}
      >
        {children}

        {required ? (
          requiredIndicator ? (
            <FieldRequiredIndicator>{requiredIndicator}</FieldRequiredIndicator>
          ) : (
            <FieldRequiredIndicator />
          )
        ) : (
          optionalIndicator
        )}
      </styled.label>
    )
  },
  "label",
)()

interface FieldRequiredIndicatorProps extends HTMLStyledProps<"span"> {}

const FieldRequiredIndicator = withContext<"span", FieldRequiredIndicatorProps>(
  ({ children, ...rest }) => {
    if (!isValidElement(children)) {
      return (
        <styled.span aria-hidden role="presentation" {...rest}>
          {children ?? <>*</>}
        </styled.span>
      )
    } else {
      return children
    }
  },
  "requiredIndicator",
)()

export interface FieldHelperMessageProps extends HTMLStyledProps<"span"> {}

export const FieldHelperMessage = withContext<"span", FieldHelperMessageProps>(
  (props) => {
    const { helperMessageId, invalid, replace } = useFieldContext() ?? {}

    return (
      <styled.span
        id={helperMessageId}
        hidden={replace && invalid ? true : false}
        {...props}
      />
    )
  },
  "helperMessage",
)()

export interface FieldErrorMessageProps extends HTMLStyledProps<"span"> {}

export const FieldErrorMessage = withContext<"span", FieldErrorMessageProps>(
  (props) => {
    const { errorMessageId, invalid } = useFieldContext() ?? {}

    return (
      <styled.span
        id={errorMessageId}
        aria-live={invalid ? "polite" : undefined}
        hidden={!invalid}
        {...props}
      />
    )
  },
  "errorMessage",
)()
