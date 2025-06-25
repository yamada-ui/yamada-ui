"use client"

import type { ReactNode } from "react"
import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { FieldStyle } from "./field.style"
import { isValidElement, useId, useMemo, useState } from "react"
import { createSlotComponent, styled } from "../../core"
import {
  createContext,
  dataAttr,
  findChild,
  getValidChildren,
  isEmpty,
  omitChildren,
} from "../../utils"
import { fieldStyle } from "./field.style"

export interface FieldContext
  extends FieldProps,
    Pick<FieldRootProps, "replace"> {
  focused: boolean
  onBlur: () => void
  onFocus: () => void
  id?: string
  errorMessageId?: string
  helperMessageId?: string
}

export const [FieldContext, useFieldContext] = createContext<FieldContext>({
  name: "FieldContext",
  strict: false,
})

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
  extends HTMLStyledProps,
    ThemeProps<FieldStyle>,
    Pick<FieldLabelProps, "optionalIndicator" | "requiredIndicator">,
    FieldProps {
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

export const {
  PropsContext: FieldPropsContext,
  usePropsContext: useFieldPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<FieldRootProps, FieldStyle>("field", fieldStyle)

/**
 * `Field` is a component used to group form elements with label, helper message, error message, etc.
 *
 * @see https://yamada-ui.com/components/field
 */
export const FieldRoot = withProvider<"div", FieldRootProps>(
  ({
    id,
    children,
    disabled,
    errorMessage,
    helperMessage,
    invalid,
    label,
    optionalIndicator,
    readOnly,
    replace = true,
    required,
    requiredIndicator,
    errorMessageProps,
    helperMessageProps,
    labelProps,
    ...rest
  }) => {
    const uuid = useId()
    const helperMessageId = useId()
    const errorMessageId = useId()
    const [focused, setFocused] = useState<boolean>(false)
    const validChildren = getValidChildren(children)
    const customLabel = findChild(validChildren, FieldLabel)
    const customHelperMessage = findChild(validChildren, FieldHelperMessage)
    const customErrorMessage = findChild(validChildren, FieldErrorMessage)
    const cloneChildren = !isEmpty(validChildren)
      ? omitChildren(
          validChildren,
          FieldLabel,
          FieldHelperMessage,
          FieldErrorMessage,
        )
      : children

    id ??= uuid

    const context = useMemo(
      () => ({
        id,
        disabled,
        errorMessageId,
        focused,
        helperMessageId,
        invalid,
        readOnly,
        replace,
        required,
        onBlur: () => setFocused(false),
        onFocus: () => setFocused(true),
      }),
      [
        id,
        disabled,
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

          {cloneChildren}

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
    const context = useFieldContext()

    required ??= context?.required

    return (
      <styled.label
        id={id}
        htmlFor={htmlFor ?? context?.id}
        data-disabled={dataAttr(context?.disabled)}
        data-focus={dataAttr(context?.focused)}
        data-invalid={dataAttr(context?.invalid)}
        data-readonly={dataAttr(context?.readOnly)}
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

    if (replace && invalid) return null

    return <styled.span id={helperMessageId} {...props} />
  },
  "helperMessage",
)()

export interface FieldErrorMessageProps extends HTMLStyledProps<"span"> {}

export const FieldErrorMessage = withContext<"span", FieldErrorMessageProps>(
  (props) => {
    const { errorMessageId, invalid } = useFieldContext() ?? {}

    if (!invalid) return null

    return <styled.span id={errorMessageId} aria-live="polite" {...props} />
  },
  "errorMessage",
)()
