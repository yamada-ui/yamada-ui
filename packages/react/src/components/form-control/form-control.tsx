import type { FocusEventHandler, ReactNode } from "react"
import type { CSSUIObject, FC, HTMLUIProps, ThemeProps } from "../../core"
import type { Dict } from "../../utils"
import { isValidElement, useId, useState } from "react"
import { omitThemeProps, ui, useComponentMultiStyle } from "../../core"
import {
  ariaAttr,
  createContext,
  cx,
  dataAttr,
  findChild,
  getValidChildren,
  handlerAll,
} from "../../utils"

export interface FormControlOptions {
  /**
   * If `true`, the form control will be disabled.
   *
   * @default false
   */
  disabled?: boolean
  /**
   * If `true`, the form control will be invalid.
   *
   * @default false
   */
  invalid?: boolean
  /**
   * If `true`, the form control will be disabled.
   *
   * @default false
   *
   * @deprecated Use `disabled` instead.
   */
  isDisabled?: boolean
  /**
   * If `true`, the form control will be invalid.
   *
   * @default false
   *
   * @deprecated Use `invalid` instead.
   */
  isInvalid?: boolean
  /**
   * If `true`, the form control will be readonly.
   *
   * @default false
   *
   * @deprecated Use `readOnly` instead.
   */
  isReadOnly?: boolean
  /**
   * If `true`, the form control will be required.
   *
   * @default false
   *
   * @deprecated Use `required` instead.
   */
  isRequired?: boolean
  /**
   * If `true`, the form control will be readonly.
   *
   * @default false
   */
  readOnly?: boolean
  /**
   * If `true`, the form control will be required.
   *
   * @default false
   */
  required?: boolean
}

interface FormControlAdditionalOptions extends LabelOptions {
  /**
   * The form control error message to use.
   */
  errorMessage?: ReactNode
  /**
   * The form control helper message to use.
   */
  helperMessage?: ReactNode
  /**
   * If `true`, switch between helper message and error message using isInvalid.
   *
   * @default true
   *
   * @deprecated Use `replace` instead.
   */
  isReplace?: boolean
  /**
   * The form control label to use.
   */
  label?: ReactNode
  /**
   * If `true`, switch between helper message and error message using isInvalid.
   *
   * @default true
   */
  replace?: boolean
  /**
   * Props the error message component.
   */
  errorMessageProps?: ErrorMessageProps
  /**
   * Props the label component.
   */
  helperMessageProps?: HelperMessageProps
  /**
   * Props the label component.
   */
  labelProps?: LabelProps
}

export interface FormControlProps
  extends HTMLUIProps,
    ThemeProps<"FormControl">,
    FormControlOptions,
    FormControlAdditionalOptions {}

interface FormControlContext {
  disabled: boolean
  focused: boolean
  invalid: boolean
  readOnly: boolean
  replace: boolean
  required: boolean
  onBlur: () => void
  onFocus: () => void
  id?: string
  labelId?: string
}

export const [FormControlContext, useFormControlContext] = createContext<
  FormControlContext | undefined
>({
  name: "FormControlContext",
  strict: false,
})

interface FormControlStylesContext {
  [key: string]: CSSUIObject | undefined
}

export const [FormControlStylesProvider, useFormControlStyles] = createContext<
  FormControlStylesContext | undefined
>({
  name: "FormControlStyleContext",
  strict: false,
})

/**
 * `FormControl` is a component used to group form elements with label, helper message, error message, etc.
 *
 * @see Docs https://yamada-ui.com/components/forms/form-control
 */
export const FormControl: FC<FormControlProps> = ({ id, ...props }) => {
  const [styles, mergedProps] = useComponentMultiStyle("FormControl", props)
  const uuid = useId()
  const labelId = useId()
  const {
    className,
    children,
    isDisabled = false,
    disabled = isDisabled,
    errorMessage,
    helperMessage,
    isInvalid = false,
    invalid = isInvalid,
    isReadOnly = false,
    isReplace = true,
    isRequired = false,
    label,
    optionalIndicator,
    readOnly = isReadOnly,
    replace = isReplace,
    required = isRequired,
    requiredIndicator,
    errorMessageProps,
    helperMessageProps,
    labelProps,
    ...rest
  } = omitThemeProps(mergedProps)
  const [focused, setFocused] = useState<boolean>(false)
  const validChildren = getValidChildren(children)
  const customLabel = findChild(validChildren, Label)
  const customHelperMessage = findChild(validChildren, HelperMessage)
  const customErrorMessage = findChild(validChildren, ErrorMessage)
  const isCustomLabel = !!customLabel
  const isCustomHelperMessage = !!customHelperMessage
  const isCustomErrorMessage = !!customErrorMessage

  id ??= uuid

  return (
    <FormControlContext
      value={{
        id,
        disabled,
        focused,
        invalid,
        labelId,
        readOnly,
        replace,
        required,
        onBlur: () => setFocused(false),
        onFocus: () => setFocused(true),
      }}
    >
      <FormControlStylesProvider value={styles}>
        <ui.div
          className={cx("ui-form__control", className)}
          data-disabled={dataAttr(disabled)}
          data-focus={dataAttr(focused)}
          data-invalid={dataAttr(invalid)}
          data-readonly={dataAttr(readOnly)}
          __css={styles.container}
          {...rest}
        >
          {!isCustomLabel && label ? (
            <Label
              optionalIndicator={optionalIndicator}
              requiredIndicator={requiredIndicator}
              {...labelProps}
            >
              {label}
            </Label>
          ) : null}
          {children}
          {!isCustomHelperMessage && helperMessage ? (
            <HelperMessage {...helperMessageProps}>
              {helperMessage}
            </HelperMessage>
          ) : null}
          {!isCustomErrorMessage && errorMessage ? (
            <ErrorMessage {...errorMessageProps}>{errorMessage}</ErrorMessage>
          ) : null}
        </ui.div>
      </FormControlStylesProvider>
    </FormControlContext>
  )
}

FormControl.__ui__ = "FormControl"

interface UseFormControlOptions extends FormControlOptions {
  id?: string
  disabled?: boolean
  readOnly?: boolean
  required?: boolean
}

export const useFormControl = <Y extends Dict = Dict>({
  id: idProp,
  disabled: disabledProp,
  invalid: invalidProp,
  isDisabled: isDisabledProp,
  isInvalid: isInvalidProp,
  isReadOnly: isReadOnlyProp,
  isRequired: isRequiredProp,
  readOnly: readOnlyProp,
  required: requiredProp,
  ...rest
}: UseFormControlOptions & Y) => {
  const control = useFormControlContext()

  const id = idProp ?? control?.id
  const labelId = control?.labelId
  const disabled = disabledProp ?? isDisabledProp ?? control?.disabled
  const readOnly = readOnlyProp ?? isReadOnlyProp ?? control?.readOnly
  const required = requiredProp ?? isRequiredProp ?? control?.required
  const invalid = invalidProp ?? isInvalidProp ?? control?.invalid

  return {
    id,
    disabled,
    invalid,
    /**
     * @deprecated Use `disabled` instead.
     */
    isDisabled: disabled,
    /**
     * @deprecated Use `invalid` instead.
     */
    isInvalid: invalid,
    /**
     * @deprecated Use `readOnly` instead.
     */
    isReadOnly: readOnly,
    /**
     * @deprecated Use `required` instead.
     */
    isRequired: required,
    labelId,
    readOnly,
    required,
    ...rest,
  }
}

export interface UseFormControlProps<Y extends HTMLElement>
  extends FormControlOptions {
  id?: string
  disabled?: boolean
  readOnly?: boolean
  required?: boolean
  onBlur?: FocusEventHandler<Y>
  onFocus?: FocusEventHandler<Y>
}

export const useFormControlProps = <Y extends HTMLElement, M extends Dict>({
  id,
  disabled,
  invalid,
  isDisabled,
  isInvalid,
  isReadOnly,
  isRequired,
  readOnly,
  required,
  onBlur,
  onFocus,
  ...rest
}: M & UseFormControlProps<Y>) => {
  const control = useFormControlContext()

  disabled ??= isDisabled ?? control?.disabled
  required ??= isRequired ?? control?.required
  readOnly ??= isReadOnly ?? control?.readOnly
  invalid ??= isInvalid ?? control?.invalid

  return {
    id: id ?? control?.id,
    "aria-disabled": ariaAttr(disabled),
    "aria-invalid": ariaAttr(invalid),
    "aria-readonly": ariaAttr(readOnly),
    "aria-required": ariaAttr(required),
    "data-readonly": dataAttr(readOnly),
    disabled,
    readOnly,
    required,
    onBlur: handlerAll(control?.onBlur, onBlur),
    onFocus: handlerAll(control?.onFocus, onFocus),
    ...(disabled || readOnly
      ? {
          _active: {},
          _focus: {},
          _focusVisible: {},
          _hover: {},
          _invalid: {},
        }
      : {}),
    ...rest,
  }
}

export type FormControlProperty = (typeof formControlProperties)[number]

export const formControlProperties = [
  "disabled",
  "required",
  "readOnly",
  "aria-disabled",
  "aria-readonly",
  "aria-required",
  "aria-invalid",
  "data-readonly",
  "onFocus",
  "onBlur",
  "_hover",
  "_active",
  "_focus",
  "_invalid",
  "_focusVisible",
] as const

export const getFormControlProperties = ({
  omit = [],
  pick = [],
}: {
  omit?: FormControlProperty[]
  pick?: FormControlProperty[]
} = {}) => {
  let result = [...formControlProperties]

  if (pick.length) {
    result = result.filter((property) => pick.includes(property))
  }

  if (omit.length) {
    result = result.filter((property) => !omit.includes(property))
  }

  return result
}

interface LabelOptions {
  /**
   * @deprecated Use `required` instead.
   */
  isRequired?: boolean
  optionalIndicator?: ReactNode
  required?: boolean
  requiredIndicator?: ReactNode
}

export interface LabelProps extends HTMLUIProps<"label">, LabelOptions {}

export const Label: FC<LabelProps> = ({
  id,
  htmlFor,
  className,
  children,
  isRequired,
  optionalIndicator = null,
  required: requiredProp = isRequired,
  requiredIndicator = null,
  ...rest
}) => {
  const {
    id: formControlId,
    disabled,
    focused,
    invalid,
    labelId,
    readOnly,
    required,
  } = useFormControlContext() ?? {}
  const styles = useFormControlStyles() ?? {}

  id ??= labelId
  requiredProp ??= required

  return (
    <ui.label
      id={id}
      htmlFor={htmlFor ?? formControlId}
      className={cx("ui-form__label", className)}
      style={{ cursor: disabled ? "not-allowed" : undefined }}
      data-disabled={dataAttr(disabled)}
      data-focus={dataAttr(focused)}
      data-invalid={dataAttr(invalid)}
      data-readonly={dataAttr(readOnly)}
      __css={{
        pointerEvents: readOnly ? "none" : undefined,
        ...styles.label,
      }}
      {...rest}
    >
      {children}
      {requiredProp ? (
        requiredIndicator ? (
          <RequiredIndicator>{requiredIndicator}</RequiredIndicator>
        ) : (
          <RequiredIndicator />
        )
      ) : (
        optionalIndicator
      )}
    </ui.label>
  )
}

Label.__ui__ = "Label"

export interface RequiredIndicatorProps extends HTMLUIProps<"span"> {}

export const RequiredIndicator: FC<RequiredIndicatorProps> = ({
  className,
  children,
  ...rest
}) => {
  const styles = useFormControlStyles() ?? {}

  return !isValidElement(children) ? (
    <ui.span
      className={cx("ui-form__required-indicator", className)}
      aria-hidden
      role="presentation"
      __css={styles.requiredIndicator}
      {...rest}
    >
      {children ?? <>*</>}
    </ui.span>
  ) : (
    children
  )
}

RequiredIndicator.__ui__ = "RequiredIndicator"

export interface HelperMessageProps extends HTMLUIProps<"span"> {}

export const HelperMessage: FC<HelperMessageProps> = ({
  className,
  ...rest
}) => {
  const { id, invalid, replace } = useFormControlContext() ?? {}
  const styles = useFormControlStyles() ?? {}

  if (replace && invalid) return null

  return (
    <ui.span
      className={cx("ui-form__helper-message", className)}
      aria-describedby={id}
      __css={styles.helperMessage}
      {...rest}
    />
  )
}

HelperMessage.__ui__ = "HelperMessage"

export interface ErrorMessageProps extends HTMLUIProps<"span"> {}

export const ErrorMessage: FC<ErrorMessageProps> = ({ className, ...rest }) => {
  const { invalid } = useFormControlContext() ?? {}
  const styles = useFormControlStyles() ?? {}

  if (!invalid) return null

  return (
    <ui.span
      className={cx("ui-form__error-message", className)}
      aria-live="polite"
      __css={styles.errorMessage}
      {...rest}
    />
  )
}

ErrorMessage.__ui__ = "ErrorMessage"
