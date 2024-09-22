import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useComponentMultiStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import { cx, findChildren, getValidChildren, dataAttr } from "@yamada-ui/utils"
import { VisuallyHidden } from "@yamada-ui/visually-hidden"
import type { ReactNode } from "react"
import { useId, useState } from "react"
import type { ErrorMessageProps, HelperMessageProps } from "./form-control"
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
   * If `true`, the fieldset will be required.
   *
   * @default false
   */
  isRequired?: boolean
  /**
   * If `true`, the fieldset will be disabled.
   *
   * @default false
   */
  isDisabled?: boolean
  /**
   * If `true`, the fieldset will be invalid.
   *
   * @default false
   */
  isInvalid?: boolean
  /**
   * If `true`, the fieldset will be readonly.
   *
   * @default false
   */
  isReadOnly?: boolean
  /**
   * If `true`, switch between helper message and error message using isInvalid.
   *
   * @default true
   */
  isReplace?: boolean
  /**
   * The fieldset legend to use.
   */
  legend?: ReactNode
  /**
   * The fieldset helper message to use.
   */
  helperMessage?: ReactNode
  /**
   * The fieldset error message to use.
   */
  errorMessage?: ReactNode
  /**
   * Props the label component.
   */
  legendProps?: LegendProps
  /**
   * Props the helper message component.
   */
  helperMessageProps?: HelperMessageProps
  /**
   * Props the error message component.
   */
  errorMessageProps?: ErrorMessageProps
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
    const {
      className,
      isRequired = false,
      isDisabled = false,
      isInvalid = false,
      isReadOnly = false,
      isReplace = true,
      legend,
      helperMessage,
      errorMessage,
      children,
      requiredIndicator,
      optionalIndicator,
      legendProps,
      helperMessageProps,
      errorMessageProps,
      ...rest
    } = omitThemeProps(mergedProps)

    id ??= useId()

    const [isFocused, setFocused] = useState<boolean>(false)

    const validChildren = getValidChildren(children)

    const [customLegend] = findChildren(validChildren, Legend)
    const [customHelperMessage] = findChildren(validChildren, HelperMessage)
    const [customErrorMessage] = findChildren(validChildren, ErrorMessage)

    const isCustomLegend = !!customLegend
    const isCustomHelperMessage = !!customHelperMessage
    const isCustomErrorMessage = !!customErrorMessage

    const css: CSSUIObject = { ...styles.container }

    return (
      <FormControlContextProvider
        value={{
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
          <ui.fieldset
            ref={ref}
            className={cx("ui-fieldset", className)}
            disabled={isDisabled}
            data-focus={dataAttr(isFocused)}
            data-disabled={dataAttr(isDisabled)}
            data-invalid={dataAttr(isInvalid)}
            data-readonly={dataAttr(isReadOnly)}
            __css={css}
            {...rest}
          >
            {!isCustomLegend && legend ? (
              <Legend
                requiredIndicator={requiredIndicator}
                optionalIndicator={optionalIndicator}
                {...legendProps}
              >
                {legend}
                {(!isReplace || !isInvalid) && helperMessage ? (
                  <VisuallyHidden>{helperMessage}</VisuallyHidden>
                ) : null}
                {isInvalid && errorMessage ? (
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
  requiredIndicator?: ReactNode
  optionalIndicator?: ReactNode
  isRequired?: boolean
}

export interface LegendProps extends HTMLUIProps<"legend">, LegendOptions {}

export const Legend = forwardRef<LegendProps, "legend">(
  (
    {
      className,
      isRequired: isRequiredProp,
      requiredIndicator = null,
      optionalIndicator = null,
      children,
      ...rest
    },
    ref,
  ) => {
    const { isRequired, isFocused, isDisabled, isInvalid, isReadOnly } =
      useFormControlContext() ?? {}
    const styles = useFormControlStyles() ?? {}

    isRequiredProp ??= isRequired

    const css: CSSUIObject = { ...styles.legend }

    return (
      <ui.legend
        ref={ref}
        className={cx("ui-fieldset__legend", className)}
        data-focus={dataAttr(isFocused)}
        data-disabled={dataAttr(isDisabled)}
        data-readonly={dataAttr(isReadOnly)}
        data-invalid={dataAttr(isInvalid)}
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
      </ui.legend>
    )
  },
)

Legend.displayName = "Legend"
Legend.__ui__ = "Legend"
