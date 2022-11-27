import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
} from '@yamada-ui/system'
import { createContext, cx, findChildren, getValidChildren, handlerAll } from '@yamada-ui/utils'
import { useState, useId, ReactNode, FocusEventHandler } from 'react'

export type FormControlOptions = {
  isRequired?: boolean
  isDisabled?: boolean
  isInvalid?: boolean
  isReadOnly?: boolean
}

type FormControlAdditionalOptions = FormLabelOptions & {
  isReplace?: boolean
  label?: ReactNode
  helperMessage?: ReactNode
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

const [FormControlProvider, useFormControl] = createContext<FormControlContext>({
  strict: false,
  name: 'FormControlContext',
})

type FormControlStylesContext = Record<string, CSSUIObject>

const [FormControlStylesProvider, useFormControlStyles] = createContext<FormControlStylesContext>({
  name: 'FormControlStyleContext',
  errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `,
})

export { useFormControl, useFormControlStyles }

export const FormControl = forwardRef<FormControlProps, 'div'>(({ id, ...props }, ref) => {
  const styles = useMultiComponentStyle('FormControl', props)
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
    ...rest
  } = omitThemeProps(props)

  if (!id) id = useId()

  const [isFocused, setFocused] = useState<boolean>(false)

  const validChildren = getValidChildren(children)

  const [customFormLabel] = findChildren(validChildren, FormLabel)
  const [customFormHelperMessage] = findChildren(validChildren, FormHelperMessage)
  const [customFormErrorMessage] = findChildren(validChildren, FormErrorMessage)

  const isCustomFormLabel = !!customFormLabel
  const isCustomFormHelperMessage = !!customFormHelperMessage
  const isCustomFormErrorMessage = !!customFormErrorMessage

  const css: CSSUIObject = {
    ...styles.container,
  }

  return (
    <FormControlProvider
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
          {!isCustomFormLabel && label ? <FormLabel>{label}</FormLabel> : null}
          {validChildren}
          {!isCustomFormHelperMessage && helperMessage ? (
            <FormHelperMessage>{helperMessage}</FormHelperMessage>
          ) : null}
          {!isCustomFormErrorMessage && errorMessage ? (
            <FormErrorMessage>{errorMessage}</FormErrorMessage>
          ) : null}
        </ui.div>
      </FormControlStylesProvider>
    </FormControlProvider>
  )
})

export type UseFormControlProps<T extends HTMLElement> = FormControlOptions & {
  id?: string
  onFocus?: FocusEventHandler<T>
  onBlur?: FocusEventHandler<T>
  disabled?: boolean
  readOnly?: boolean
  required?: boolean
}

export const useFormControlProps = <T extends HTMLElement>({
  id,
  disabled,
  readOnly,
  required,
  isRequired,
  isInvalid,
  isReadOnly,
  isDisabled,
  onFocus,
  onBlur,
  ...rest
}: UseFormControlProps<T>) => {
  const control = useFormControl()

  return {
    id: id ?? control?.id,
    disabled: disabled ?? isDisabled ?? control?.isDisabled,
    readOnly: readOnly ?? isReadOnly ?? control?.isReadOnly,
    required: required ?? isRequired ?? control?.isRequired,
    'data-focus': control?.isFocused,
    'data-disabled': disabled ?? isDisabled ?? control?.isDisabled,
    'data-readonly': readOnly ?? isReadOnly ?? control?.isReadOnly,
    'data-invalid': isInvalid ?? control?.isInvalid,
    onFocus: handlerAll(control?.onFocus, onFocus),
    onBlur: handlerAll(control?.onBlur, onBlur),
    ...rest,
  }
}

type FormLabelOptions = {
  requiredIndicator?: ReactNode
  optionalIndicator?: ReactNode
}

export type FormLabelProps = HTMLUIProps<'label'> & FormLabelOptions

export const FormLabel = forwardRef<FormLabelProps, 'label'>(
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
    const { id, isRequired, isFocused, isDisabled, isInvalid, isReadOnly } = useFormControl()
    const styles = useFormControlStyles()

    const css: CSSUIObject = { ...styles.label }

    return (
      <ui.label
        ref={ref}
        className={cx('ui-form-label', className)}
        data-focus={isFocused}
        data-disabled={isDisabled}
        data-readonly={isReadOnly}
        data-invalid={isInvalid}
        htmlFor={htmlFor ?? id}
        __css={css}
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
    const { isInvalid, isReplace } = useFormControl()
    const styles = useFormControlStyles()

    if (isReplace && isInvalid) return null

    const css: CSSUIObject = { ...styles.requiredIndicator }

    return (
      <ui.span
        ref={ref}
        className={cx('ui-form-required-indicator', className)}
        __css={css}
        {...rest}
      >
        *
      </ui.span>
    )
  },
)

export type HelpTextProps = HTMLUIProps<'div'>

export const FormHelperMessage = forwardRef<HelpTextProps, 'div'>(({ className, ...rest }, ref) => {
  const { isInvalid, isReplace } = useFormControl()
  const styles = useFormControlStyles()

  if (isReplace && isInvalid) return null

  const css: CSSUIObject = { ...styles.helperMessage }

  return (
    <ui.div ref={ref} className={cx('ui-form-helper-message', className)} __css={css} {...rest} />
  )
})

export type FormErrorMessageProps = HTMLUIProps<'div'>

export const FormErrorMessage = forwardRef<FormErrorMessageProps, 'div'>(
  ({ className, ...rest }, ref) => {
    const { isInvalid } = useFormControl()
    const styles = useFormControlStyles()

    if (!isInvalid) return null

    const css: CSSUIObject = { ...styles.errorMessage }

    return (
      <ui.div ref={ref} className={cx('ui-form-error-message', className)} __css={css} {...rest} />
    )
  },
)
