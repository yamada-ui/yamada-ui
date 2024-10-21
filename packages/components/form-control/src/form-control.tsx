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
  isDisabled?: boolean
  /**
   * If `true`, the form control will be invalid.
   *
   * @default false
   */
  isInvalid?: boolean
  /**
   * If `true`, the form control will be readonly.
   *
   * @default false
   */
  isReadOnly?: boolean
  /**
   * If `true`, the form control will be required.
   *
   * @default false
   */
  isRequired?: boolean
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
   */
  isReplace?: boolean
  /**
   * The form control label to use.
   */
  label?: ReactNode
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
  isDisabled: boolean
  isFocused: boolean
  isInvalid: boolean
  isReadOnly: boolean
  isReplace: boolean
  isRequired: boolean
  onBlur: () => void
  onFocus: () => void
  id?: string
  errorMessageId?: string
  helperMessageId?: string
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
    const {
      className,
      children,
      errorMessage,
      helperMessage,
      isDisabled = false,
      isInvalid = false,
      isReadOnly = false,
      isReplace = true,
      isRequired = false,
      label,
      optionalIndicator,
      requiredIndicator,
      errorMessageProps,
      helperMessageProps,
      labelProps,
      ...rest
    } = omitThemeProps(mergedProps)

    const uuid = useId()
    const labelId = useId()
    const helperMessageId = useId()
    const errorMessageId = useId()

    id ??= uuid

    const [isFocused, setFocused] = useState<boolean>(false)

    const validChildren = getValidChildren(children)

    const customLabel = findChild(validChildren, Label)
    const customHelperMessage = findChild(validChildren, HelperMessage)
    const customErrorMessage = findChild(validChildren, ErrorMessage)

    const isCustomLabel = !!customLabel
    const isCustomHelperMessage = !!customHelperMessage
    const isCustomErrorMessage = !!customErrorMessage

    const css: CSSUIObject = { ...styles.container }

    return (
      <FormControlContextProvider
        value={{
          id,
          errorMessageId,
          helperMessageId,
          isDisabled,
          isFocused,
          isInvalid,
          isReadOnly,
          isReplace,
          isRequired,
          labelId,
          onBlur: () => setFocused(false),
          onFocus: () => setFocused(true),
        }}
      >
        <FormControlStylesProvider value={styles}>
          <ui.div
            ref={ref}
            className={cx("ui-form__control", className)}
            data-disabled={dataAttr(isDisabled)}
            data-focus={dataAttr(isFocused)}
            data-invalid={dataAttr(isInvalid)}
            data-readonly={dataAttr(isReadOnly)}
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
  disabled,
  isDisabled: isDisabledProp,
  isInvalid: isInvalidProp,
  isReadOnly: isReadOnlyProp,
  isRequired: isRequiredProp,
  readOnly,
  required,
  ...rest
}: UseFormControlOptions & Y) => {
  const control = useFormControlContext()

  const id = idProp ?? control?.id
  const labelId = control?.labelId
  const helperMessageId = control?.helperMessageId
  const errorMessageId = control?.errorMessageId
  const isDisabled = disabled ?? isDisabledProp ?? control?.isDisabled
  const isReadOnly = readOnly ?? isReadOnlyProp ?? control?.isReadOnly
  const isRequired = required ?? isRequiredProp ?? control?.isRequired
  const isInvalid = isInvalidProp ?? control?.isInvalid

  return {
    id,
    errorMessageId,
    helperMessageId,
    isDisabled,
    isInvalid,
    isReadOnly,
    isRequired,
    labelId,
    ...rest,
  }
}

export interface UseFormControlProps<Y extends HTMLElement>
  extends FormControlOptions {
  id?: string
  disabled?: boolean
  errorMessage?: string
  helperMessage?: string
  readOnly?: boolean
  required?: boolean
  onBlur?: FocusEventHandler<Y>
  onFocus?: FocusEventHandler<Y>
}

export const useFormControlProps = <Y extends HTMLElement, M extends Dict>({
  id,
  disabled,
  errorMessage,
  helperMessage,
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

  disabled ??= isDisabled ?? control?.isDisabled
  required ??= isRequired ?? control?.isRequired
  readOnly ??= isReadOnly ?? control?.isReadOnly
  isInvalid ??= control?.isInvalid
  errorMessage ??= control?.errorMessageId
  helperMessage ??= control?.helperMessageId

  return {
    id: id ?? control?.id,
    "aria-describedby": isInvalid
      ? errorMessage
      : helperMessage
        ? helperMessage
        : undefined,
    "aria-disabled": ariaAttr(disabled),
    "aria-invalid": ariaAttr(isInvalid),
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
  "aria-describedby",
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
  isRequired?: boolean
  optionalIndicator?: ReactNode
  requiredIndicator?: ReactNode
}

export interface LabelProps extends HTMLUIProps<"label">, LabelOptions {}

export const Label = forwardRef<LabelProps, "label">(
  (
    {
      id: idProp,
      htmlFor,
      className,
      children,
      isRequired: isRequiredProp,
      optionalIndicator = null,
      requiredIndicator = null,
      ...rest
    },
    ref,
  ) => {
    const {
      id: formControlId,
      isDisabled,
      isFocused,
      isInvalid,
      isReadOnly,
      isRequired,
      labelId,
    } = useFormControlContext() ?? {}
    const styles = useFormControlStyles() ?? {}

    idProp ??= labelId
    isRequiredProp ??= isRequired

    const css: CSSUIObject = {
      display: "block",
      pointerEvents: isReadOnly ? "none" : undefined,
      ...styles.label,
    }

    return (
      <ui.label
        id={idProp}
        ref={ref}
        htmlFor={htmlFor ?? formControlId}
        className={cx("ui-form__label", className)}
        style={{ cursor: isDisabled ? "not-allowed" : undefined }}
        data-disabled={dataAttr(isDisabled)}
        data-focus={dataAttr(isFocused)}
        data-invalid={dataAttr(isInvalid)}
        data-readonly={dataAttr(isReadOnly)}
        __css={css}
        {...rest}
      >
        {children}
        {isRequiredProp ? (
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
    const { helperMessageId, isInvalid, isReplace } =
      useFormControlContext() ?? {}
    const styles = useFormControlStyles() ?? {}

    if (isReplace && isInvalid) return null

    const css: CSSUIObject = { ...styles.helperMessage }

    return (
      <ui.span
        id={helperMessageId}
        ref={ref}
        className={cx("ui-form__helper-message", className)}
        aria-live="polite"
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
    const { errorMessageId, isInvalid } = useFormControlContext() ?? {}
    const styles = useFormControlStyles() ?? {}

    if (!isInvalid) return null

    const css: CSSUIObject = { ...styles.errorMessage }

    return (
      <ui.span
        id={errorMessageId}
        ref={ref}
        className={cx("ui-form__error-message", className)}
        aria-live="assertive"
        __css={css}
        {...rest}
      />
    )
  },
)

ErrorMessage.displayName = "ErrorMessage"
ErrorMessage.__ui__ = "ErrorMessage"
