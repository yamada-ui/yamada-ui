import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import type { ReactNode } from "react"
import type { ErrorMessageProps, HelperMessageProps } from "./form-control"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "@yamada-ui/core"
import { cx, dataAttr, findChild, getValidChildren } from "@yamada-ui/utils"
import { VisuallyHidden } from "@yamada-ui/visually-hidden"
import { useId, useState } from "react"
import {
  ErrorMessage,
  FormControlContextProvider,
  FormControlStylesProvider,
  HelperMessage,
  RequiredIndicator,
  useFormControlContext,
  useFormControlStyles,
} from "./form-control"

interface FieldsetOptions {
  /**
   * If `true`, the fieldset will be disabled.
   *
   * @default false
   */
  disabled?: boolean
  /**
   * The fieldset error message to use.
   */
  errorMessage?: ReactNode
  /**
   * The fieldset helper message to use.
   */
  helperMessage?: ReactNode
  /**
   * If `true`, the fieldset will be invalid.
   *
   * @default false
   */
  invalid?: boolean
  /**
   * If `true`, the fieldset will be disabled.
   *
   * @default false
   *
   * @deprecated Use `disabled` instead.
   */
  isDisabled?: boolean
  /**
   * If `true`, the fieldset will be invalid.
   *
   * @default false
   *
   * @deprecated Use `invalid` instead.
   */
  isInvalid?: boolean
  /**
   * If `true`, the fieldset will be readonly.
   *
   * @default false
   *
   * @deprecated Use `readOnly` instead.
   */
  isReadOnly?: boolean
  /**
   * If `true`, switch between helper message and error message using isInvalid.
   *
   * @default true
   *
   * @deprecated Use `replace` instead.
   */
  isReplace?: boolean
  /**
   * If `true`, the fieldset will be required.
   *
   * @default false
   *
   * @deprecated Use `required` instead.
   */
  isRequired?: boolean
  /**
   * The fieldset legend to use.
   */
  legend?: ReactNode
  /**
   * If `true`, the fieldset will be readonly.
   *
   * @default false
   */
  readOnly?: boolean
  /**
   * If `true`, switch between helper message and error message using isInvalid.
   *
   * @default true
   */
  replace?: boolean
  /**
   * If `true`, the fieldset will be required.
   *
   * @default false
   */
  required?: boolean
  /**
   * Props the error message component.
   */
  errorMessageProps?: ErrorMessageProps
  /**
   * Props the helper message component.
   */
  helperMessageProps?: HelperMessageProps
  /**
   * Props the label component.
   */
  legendProps?: LegendProps
}

export interface FieldsetProps
  extends HTMLUIProps<"fieldset">,
    ThemeProps<"Fieldset">,
    LegendOptions,
    FieldsetOptions {}

/**
 * `Fieldset` is a component used to fieldset elements with legend, helper message, error message, etc.
 *
 * @see Docs https://yamada-ui.com/components/forms/fieldset
 */
export const Fieldset = forwardRef<FieldsetProps, "fieldset">(
  ({ id, ...props }, ref) => {
    const [styles, mergedProps] = useComponentMultiStyle("Fieldset", props)
    const uuid = useId()
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
      legend,
      optionalIndicator,
      readOnly = isReadOnly,
      replace = isReplace,
      required = isRequired,
      requiredIndicator,
      errorMessageProps,
      helperMessageProps,
      legendProps,
      ...rest
    } = omitThemeProps(mergedProps)
    const [focused, setFocused] = useState<boolean>(false)
    const validChildren = getValidChildren(children)
    const customLegend = findChild(validChildren, Legend)
    const customHelperMessage = findChild(validChildren, HelperMessage)
    const customErrorMessage = findChild(validChildren, ErrorMessage)
    const isCustomLegend = !!customLegend
    const isCustomHelperMessage = !!customHelperMessage
    const isCustomErrorMessage = !!customErrorMessage
    const css: CSSUIObject = { ...styles.container }

    id ??= uuid

    return (
      <FormControlContextProvider
        value={{
          disabled,
          focused,
          invalid,
          readOnly,
          replace,
          required,
          onBlur: () => setFocused(false),
          onFocus: () => setFocused(true),
        }}
      >
        <FormControlStylesProvider value={styles}>
          <ui.fieldset
            ref={ref}
            className={cx("ui-fieldset", className)}
            data-disabled={dataAttr(disabled)}
            data-focus={dataAttr(focused)}
            data-invalid={dataAttr(invalid)}
            data-readonly={dataAttr(readOnly)}
            disabled={disabled}
            __css={css}
            {...rest}
          >
            {!isCustomLegend && legend ? (
              <Legend
                optionalIndicator={optionalIndicator}
                requiredIndicator={requiredIndicator}
                {...legendProps}
              >
                {legend}
                {(!replace || !invalid) && helperMessage ? (
                  <VisuallyHidden>{helperMessage}</VisuallyHidden>
                ) : null}
                {invalid && errorMessage ? (
                  <VisuallyHidden>{errorMessage}</VisuallyHidden>
                ) : null}
              </Legend>
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
          </ui.fieldset>
        </FormControlStylesProvider>
      </FormControlContextProvider>
    )
  },
)

Fieldset.displayName = "Fieldset"
Fieldset.__ui__ = "Fieldset"

interface LegendOptions {
  /**
   * @deprecated Use `required` instead.
   */
  isRequired?: boolean
  optionalIndicator?: ReactNode
  required?: boolean
  requiredIndicator?: ReactNode
}

export interface LegendProps extends HTMLUIProps<"legend">, LegendOptions {}

export const Legend = forwardRef<LegendProps, "legend">(
  (
    {
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
    const { disabled, focused, invalid, readOnly, required } =
      useFormControlContext() ?? {}
    const styles = useFormControlStyles() ?? {}
    const css: CSSUIObject = { ...styles.legend }

    requiredProp ??= required

    return (
      <ui.legend
        ref={ref}
        className={cx("ui-fieldset__legend", className)}
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
      </ui.legend>
    )
  },
)

Legend.displayName = "Legend"
Legend.__ui__ = "Legend"
