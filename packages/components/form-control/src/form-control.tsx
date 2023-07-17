import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
} from '@yamada-ui/core'
import {
  createContext,
  cx,
  findChildren,
  getValidChildren,
  handlerAll,
  dataAttr,
  ariaAttr,
  Dict,
} from '@yamada-ui/utils'
import { useState, useId, ReactNode, FocusEventHandler } from 'react'

export type FormControlOptions = {
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

type FormControlAdditionalOptions = LabelOptions & {
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
}

export type FormControlProps = HTMLUIProps<'div'> &
  ThemeProps<'FormControl'> &
  FormControlOptions &
  FormControlAdditionalOptions

type FormControlContext = {
  id?: string
  isFocused: boolean
  isRequired: boolean
  isDisabled: boolean
  isInvalid: boolean
  isReadOnly: boolean
  isReplace: boolean
  onFocus: () => void
  onBlur: () => void
}

const [FormControlContextProvider, useFormControlContext] = createContext<
  FormControlContext | undefined
>({
  strict: false,
  name: 'FormControlContext',
})

type FormControlStylesContext = Record<string, CSSUIObject>

const [FormControlStylesProvider, useFormControlStyles] = createContext<
  FormControlStylesContext | undefined
>({
  strict: false,
  name: 'FormControlStyleContext',
})

export const FormControl = forwardRef<FormControlProps, 'div'>(
  ({ id, ...props }, ref) => {
    const [styles, mergedProps] = useMultiComponentStyle('FormControl', props)
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
      ...rest
    } = omitThemeProps(mergedProps)

    id = id ?? useId()

    const [isFocused, setFocused] = useState<boolean>(false)

    const validChildren = getValidChildren(children)

    const [customLabel] = findChildren(validChildren, Label)
    const [customHelperMessage] = findChildren(validChildren, HelperMessage)
    const [customErrorMessage] = findChildren(validChildren, ErrorMessage)

    const isCustomLabel = !!customLabel
    const isCustomHelperMessage = !!customHelperMessage
    const isCustomErrorMessage = !!customErrorMessage

    const css: CSSUIObject = {
      ...styles.container,
    }

    return (
      <FormControlContextProvider
        value={{
          id,
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
            className={cx('ui-form-control', className)}
            role='group'
            __css={css}
            {...rest}
          >
            {!isCustomLabel && label ? (
              <Label
                requiredIndicator={requiredIndicator}
                optionalIndicator={optionalIndicator}
              >
                {label}
              </Label>
            ) : null}
            {children}
            {!isCustomHelperMessage && helperMessage ? (
              <HelperMessage>{helperMessage}</HelperMessage>
            ) : null}
            {!isCustomErrorMessage && errorMessage ? (
              <ErrorMessage>{errorMessage}</ErrorMessage>
            ) : null}
          </ui.div>
        </FormControlStylesProvider>
      </FormControlContextProvider>
    )
  },
)

export const useFormControl = (
  props: FormControlOptions & {
    id?: string
    disabled?: boolean
    readOnly?: boolean
    required?: boolean
  },
) => {
  const control = useFormControlContext()

  const id = props.id ?? control?.id
  const isDisabled = props.disabled ?? props.isDisabled ?? control?.isDisabled
  const isReadOnly = props.readOnly ?? props.isReadOnly ?? control?.isReadOnly
  const isRequired = props.required ?? props.isRequired ?? control?.isRequired
  const isInvalid = props.isInvalid ?? control?.isInvalid

  return {
    id,
    isDisabled,
    isReadOnly,
    isRequired,
    isInvalid,
  }
}

export type UseFormControlProps<Y extends HTMLElement> = FormControlOptions & {
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

  disabled = disabled ?? isDisabled ?? control?.isDisabled
  required = required ?? isRequired ?? control?.isRequired
  readOnly = readOnly ?? isReadOnly ?? control?.isReadOnly

  isInvalid = isInvalid ?? control?.isInvalid

  return {
    id: id ?? control?.id,
    disabled,
    required,
    readOnly,
    'aria-disabled': ariaAttr(disabled),
    'aria-readonly': ariaAttr(readOnly),
    'aria-required': ariaAttr(required),
    'aria-invalid': ariaAttr(isInvalid),
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

export const formControlProperties: any[] = [
  'disabled',
  'required',
  'readOnly',
  'aria-disabled',
  'aria-readonly',
  'aria-required',
  'aria-invalid',
  'onFocus',
  'onBlur',
  '_hover',
  '_active',
  '_focus',
  '_invalid',
  '_focusVisible',
]

type LabelOptions = {
  requiredIndicator?: ReactNode
  optionalIndicator?: ReactNode
}

export type LabelProps = HTMLUIProps<'label'> & LabelOptions

export const Label = forwardRef<LabelProps, 'label'>(
  (
    {
      className,
      htmlFor,
      requiredIndicator = <RequiredIndicator />,
      optionalIndicator = null,
      children,
      ...rest
    },
    ref,
  ) => {
    const { id, isRequired, isFocused, isDisabled, isInvalid, isReadOnly } =
      useFormControlContext() ?? {}
    const styles = useFormControlStyles() ?? {}

    const css: CSSUIObject = {
      display: 'block',
      pointerEvents: isReadOnly ? 'none' : undefined,
      ...styles.label,
    }

    return (
      <ui.label
        ref={ref}
        className={cx('ui-form-label', className)}
        data-focus={dataAttr(isFocused)}
        data-disabled={dataAttr(isDisabled)}
        data-readonly={dataAttr(isReadOnly)}
        data-invalid={dataAttr(isInvalid)}
        htmlFor={htmlFor ?? id}
        __css={css}
        style={{ cursor: isDisabled ? 'not-allowed' : undefined }}
        {...rest}
      >
        {children}
        {isRequired ? requiredIndicator : optionalIndicator}
      </ui.label>
    )
  },
)

type RequiredIndicatorProps = HTMLUIProps<'span'>

const RequiredIndicator = forwardRef<RequiredIndicatorProps, 'span'>(
  ({ className, ...rest }, ref) => {
    const { isInvalid, isReplace } = useFormControlContext() ?? {}
    const styles = useFormControlStyles() ?? {}

    if (isReplace && isInvalid) return null

    const css: CSSUIObject = { ...styles.requiredIndicator }

    return (
      <ui.span
        ref={ref}
        className={cx('ui-form-required-indicator', className)}
        role='presentation'
        aria-hidden={true}
        __css={css}
        {...rest}
      >
        *
      </ui.span>
    )
  },
)

export type HelperMessageProps = HTMLUIProps<'div'>

export const HelperMessage = forwardRef<HelperMessageProps, 'div'>(
  ({ className, ...rest }, ref) => {
    const { isInvalid, isReplace } = useFormControlContext() ?? {}
    const styles = useFormControlStyles() ?? {}

    if (isReplace && isInvalid) return null

    const css: CSSUIObject = { ...styles.helperMessage }

    return (
      <ui.div
        ref={ref}
        className={cx('ui-form-helper-message', className)}
        __css={css}
        {...rest}
      />
    )
  },
)

export type ErrorMessageProps = HTMLUIProps<'div'>

export const ErrorMessage = forwardRef<ErrorMessageProps, 'div'>(
  ({ className, ...rest }, ref) => {
    const { isInvalid } = useFormControlContext() ?? {}
    const styles = useFormControlStyles() ?? {}

    if (!isInvalid) return null

    const css: CSSUIObject = { ...styles.errorMessage }

    return (
      <ui.div
        ref={ref}
        className={cx('ui-form-error-message', className)}
        aria-live='polite'
        __css={css}
        {...rest}
      />
    )
  },
)
