import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useComponentMultiStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import type { Dict } from "@yamada-ui/utils"
import {
  createContext,
  cx,
  findChildren,
  getValidChildren,
  handlerAll,
  dataAttr,
  ariaAttr,
} from "@yamada-ui/utils"
import type { ReactNode, FocusEventHandler } from "react"
import { useState, useId, isValidElement } from "react"

export interface FormControlOptions {
  /**
   * If `true`, the form control will be required.
   *
   * @default false
   */
  isRequired?: boolean
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
}

interface FormControlAdditionalOptions extends LabelOptions {
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
   * The form control helper message to use.
   */
  helperMessage?: ReactNode
  /**
   * The form control error message to use.
   */
  errorMessage?: ReactNode
  /**
   * Props the label component.
   */
  labelProps?: LabelProps
  /**
   * Props the label component.
   */
  helperMessageProps?: HelperMessageProps
  /**
   * Props the error message component.
   */
  errorMessageProps?: ErrorMessageProps
}

export interface FormControlProps
  extends HTMLUIProps,
    ThemeProps<"FormControl">,
    FormControlOptions,
    FormControlAdditionalOptions {}

interface FormControlContext {
  id?: string
  labelId?: string
  isFocused: boolean
  isRequired: boolean
  isDisabled: boolean
  isInvalid: boolean
  isReadOnly: boolean
  isReplace: boolean
  onFocus: () => void
  onBlur: () => void
}

export const [FormControlContextProvider, useFormControlContext] =
  createContext<FormControlContext | undefined>({
    strict: false,
    name: "FormControlContext",
  })

interface FormControlStylesContext {
  [key: string]: CSSUIObject
}

export const [FormControlStylesProvider, useFormControlStyles] = createContext<
  FormControlStylesContext | undefined
>({
  strict: false,
  name: "FormControlStyleContext",
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
      isRequired = false,
      isDisabled = false,
      isInvalid = false,
      isReadOnly = false,
      isReplace = true,
      label,
      helperMessage,
      errorMessage,
      children,
      requiredIndicator,
      optionalIndicator,
      labelProps,
      helperMessageProps,
      errorMessageProps,
      ...rest
    } = omitThemeProps(mergedProps)

    id ??= useId()
    const labelId = useId()

    const [isFocused, setFocused] = useState<boolean>(false)

    const validChildren = getValidChildren(children)

    const [customLabel] = findChildren(validChildren, Label)
    const [customHelperMessage] = findChildren(validChildren, HelperMessage)
    const [customErrorMessage] = findChildren(validChildren, ErrorMessage)

    const isCustomLabel = !!customLabel
    const isCustomHelperMessage = !!customHelperMessage
    const isCustomErrorMessage = !!customErrorMessage

    const css: CSSUIObject = { ...styles.container }

    return (
      <FormControlContextProvider
        value={{
          id,
          labelId,
          isFocused,
          isRequired,
          isDisabled,
          isInvalid,
          isReadOnly,
          isReplace,
          onFocus: () => setFocused(true),
          onBlur: () => setFocused(false),
        }}
      >
        <FormControlStylesProvider value={styles}>
          <ui.div
            ref={ref}
            className={cx("ui-form__control", className)}
            data-focus={dataAttr(isFocused)}
            data-disabled={dataAttr(isDisabled)}
            data-invalid={dataAttr(isInvalid)}
            data-readonly={dataAttr(isReadOnly)}
            __css={css}
            {...rest}
          >
            {!isCustomLabel && label ? (
              <Label
                requiredIndicator={requiredIndicator}
                optionalIndicator={optionalIndicator}
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
  readOnly,
  required,
  isDisabled: isDisabledProp,
  isReadOnly: isReadOnlyProp,
  isRequired: isRequiredProp,
  isInvalid: isInvalidProp,
  ...rest
}: UseFormControlOptions & Y) => {
  const control = useFormControlContext()

  const id = idProp ?? control?.id
  const labelId = control?.labelId
  const isDisabled = disabled ?? isDisabledProp ?? control?.isDisabled
  const isReadOnly = readOnly ?? isReadOnlyProp ?? control?.isReadOnly
  const isRequired = required ?? isRequiredProp ?? control?.isRequired
  const isInvalid = isInvalidProp ?? control?.isInvalid

  return {
    id,
    labelId,
    isDisabled,
    isReadOnly,
    isRequired,
    isInvalid,
    ...rest,
  }
}

export interface UseFormControlProps<Y extends HTMLElement>
  extends FormControlOptions {
  id?: string
  onFocus?: FocusEventHandler<Y>
  onBlur?: FocusEventHandler<Y>
  disabled?: boolean
  readOnly?: boolean
  required?: boolean
}

export const useFormControlProps = <Y extends HTMLElement, M extends Dict>({
  id,
  disabled,
  readOnly,
  required,
  isDisabled,
  isReadOnly,
  isRequired,
  isInvalid,
  onFocus,
  onBlur,
  ...rest
}: UseFormControlProps<Y> & M) => {
  const control = useFormControlContext()

  disabled ??= isDisabled ?? control?.isDisabled
  required ??= isRequired ?? control?.isRequired
  readOnly ??= isReadOnly ?? control?.isReadOnly
  isInvalid ??= control?.isInvalid

  return {
    id: id ?? control?.id,
    disabled,
    required,
    readOnly,
    "aria-disabled": ariaAttr(disabled),
    "aria-readonly": ariaAttr(readOnly),
    "aria-required": ariaAttr(required),
    "aria-invalid": ariaAttr(isInvalid),
    "data-readonly": dataAttr(readOnly),
    onFocus: handlerAll(control?.onFocus, onFocus),
    onBlur: handlerAll(control?.onBlur, onBlur),
    ...(disabled || readOnly
      ? {
          _hover: {},
          _active: {},
          _focus: {},
          _invalid: {},
          _focusVisible: {},
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
  requiredIndicator?: ReactNode
  optionalIndicator?: ReactNode
  isRequired?: boolean
}

export interface LabelProps extends HTMLUIProps<"label">, LabelOptions {}

export const Label = forwardRef<LabelProps, "label">(
  (
    {
      id: idProp,
      className,
      htmlFor,
      isRequired: isRequiredProp,
      requiredIndicator = null,
      optionalIndicator = null,
      children,
      ...rest
    },
    ref,
  ) => {
    const {
      id: formControlId,
      labelId,
      isRequired,
      isFocused,
      isDisabled,
      isInvalid,
      isReadOnly,
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
        ref={ref}
        id={idProp}
        className={cx("ui-form__label", className)}
        data-focus={dataAttr(isFocused)}
        data-disabled={dataAttr(isDisabled)}
        data-readonly={dataAttr(isReadOnly)}
        data-invalid={dataAttr(isInvalid)}
        htmlFor={htmlFor ?? formControlId}
        __css={css}
        style={{ cursor: isDisabled ? "not-allowed" : undefined }}
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
        role="presentation"
        aria-hidden={true}
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
    const { id, isInvalid, isReplace } = useFormControlContext() ?? {}
    const styles = useFormControlStyles() ?? {}

    if (isReplace && isInvalid) return null

    const css: CSSUIObject = { ...styles.helperMessage }

    return (
      <ui.span
        ref={ref}
        className={cx("ui-form__helper-message", className)}
        __css={css}
        aria-describedby={id}
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
    const { isInvalid } = useFormControlContext() ?? {}
    const styles = useFormControlStyles() ?? {}

    if (!isInvalid) return null

    const css: CSSUIObject = { ...styles.errorMessage }

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
