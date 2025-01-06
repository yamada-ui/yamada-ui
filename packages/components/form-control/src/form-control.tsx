import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import type { Dict } from "@yamada-ui/utils"
import type { FocusEventHandler, ReactNode } from "react"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "@yamada-ui/core"
import {
  ariaAttr,
  createContext,
  cx,
  dataAttr,
  findChild,
  getValidChildren,
  handlerAll,
} from "@yamada-ui/utils"
import { isValidElement, useId, useState } from "react"

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

export const [FormControlContextProvider, useFormControlContext] =
  createContext<FormControlContext | undefined>({
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
export const FormControl = forwardRef<FormControlProps, "div">(
  ({ id, ...props }, ref) => {
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
    const css: CSSUIObject = { ...styles.container }

    id ??= uuid

    return (
      <FormControlContextProvider
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
            ref={ref}
            className={cx("ui-form__control", className)}
            data-disabled={dataAttr(disabled)}
            data-focus={dataAttr(focused)}
            data-invalid={dataAttr(invalid)}
            data-readonly={dataAttr(readOnly)}
            __css={css}
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
      </FormControlContextProvider>
    )
  },
)

FormControl.displayName = "FormControl"
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

export const Label = forwardRef<LabelProps, "label">(
  (
    {
      id,
      htmlFor,
      className,
      children,
      isRequired,
      optionalIndicator = null,
      required: requiredProp = isRequired,
      requiredIndicator = null,
      ...rest
    },
    ref,
  ) => {
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
    const css: CSSUIObject = {
      display: "block",
      pointerEvents: readOnly ? "none" : undefined,
      ...styles.label,
    }

    id ??= labelId
    requiredProp ??= required

    return (
      <ui.label
        id={id}
        ref={ref}
        htmlFor={htmlFor ?? formControlId}
        className={cx("ui-form__label", className)}
        style={{ cursor: disabled ? "not-allowed" : undefined }}
        data-disabled={dataAttr(disabled)}
        data-focus={dataAttr(focused)}
        data-invalid={dataAttr(invalid)}
        data-readonly={dataAttr(readOnly)}
        __css={css}
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
  },
)

Label.displayName = "Label"
Label.__ui__ = "Label"

export interface RequiredIndicatorProps extends HTMLUIProps<"span"> {}

export const RequiredIndicator = forwardRef<RequiredIndicatorProps, "span">(
  ({ className, children, ...rest }, ref) => {
    const styles = useFormControlStyles() ?? {}
    const css: CSSUIObject = { ...styles.requiredIndicator }

    return !isValidElement(children) ? (
      <ui.span
        ref={ref}
        className={cx("ui-form__required-indicator", className)}
        aria-hidden
        role="presentation"
        __css={css}
        {...rest}
      >
        {children ?? <>*</>}
      </ui.span>
    ) : (
      children
    )
  },
)

RequiredIndicator.displayName = "RequiredIndicator"
RequiredIndicator.__ui__ = "RequiredIndicator"

export interface HelperMessageProps extends HTMLUIProps<"span"> {}

export const HelperMessage = forwardRef<HelperMessageProps, "span">(
  ({ className, ...rest }, ref) => {
    const { id, invalid, replace } = useFormControlContext() ?? {}
    const styles = useFormControlStyles() ?? {}
    const css: CSSUIObject = { ...styles.helperMessage }

    if (replace && invalid) return null

    return (
      <ui.span
        ref={ref}
        className={cx("ui-form__helper-message", className)}
        aria-describedby={id}
        __css={css}
        {...rest}
      />
    )
  },
)

HelperMessage.displayName = "HelperMessage"
HelperMessage.__ui__ = "HelperMessage"

export interface ErrorMessageProps extends HTMLUIProps<"span"> {}

export const ErrorMessage = forwardRef<ErrorMessageProps, "span">(
  ({ className, ...rest }, ref) => {
    const { invalid } = useFormControlContext() ?? {}
    const styles = useFormControlStyles() ?? {}
    const css: CSSUIObject = { ...styles.errorMessage }

    if (!invalid) return null

    return (
      <ui.span
        ref={ref}
        className={cx("ui-form__error-message", className)}
        aria-live="polite"
        __css={css}
        {...rest}
      />
    )
  },
)

ErrorMessage.displayName = "ErrorMessage"
ErrorMessage.__ui__ = "ErrorMessage"
