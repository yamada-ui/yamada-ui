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
   * The fieldset error message to use.
   */
  errorMessage?: ReactNode
  /**
   * The fieldset helper message to use.
   */
  helperMessage?: ReactNode
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
   * If `true`, the fieldset will be required.
   *
   * @default false
   */
  isRequired?: boolean
  /**
   * The fieldset legend to use.
   */
  legend?: ReactNode
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
      legend,
      optionalIndicator,
      requiredIndicator,
      errorMessageProps,
      helperMessageProps,
      legendProps,
      ...rest
    } = omitThemeProps(mergedProps)

    const uuid = useId()

    id ??= uuid

    const [isFocused, setFocused] = useState<boolean>(false)

    const validChildren = getValidChildren(children)

    const customLegend = findChild(validChildren, Legend)
    const customHelperMessage = findChild(validChildren, HelperMessage)
    const customErrorMessage = findChild(validChildren, ErrorMessage)

    const isCustomLegend = !!customLegend
    const isCustomHelperMessage = !!customHelperMessage
    const isCustomErrorMessage = !!customErrorMessage

    const css: CSSUIObject = { ...styles.container }

    return (
      <FormControlContextProvider
        value={{
          isDisabled,
          isFocused,
          isInvalid,
          isReadOnly,
          isReplace,
          isRequired,
          onBlur: () => setFocused(false),
          onFocus: () => setFocused(true),
        }}
      >
        <FormControlStylesProvider value={styles}>
          <ui.fieldset
            ref={ref}
            className={cx("ui-fieldset", className)}
            disabled={isDisabled}
            data-disabled={dataAttr(isDisabled)}
            data-focus={dataAttr(isFocused)}
            data-invalid={dataAttr(isInvalid)}
            data-readonly={dataAttr(isReadOnly)}
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
  isRequired?: boolean
  optionalIndicator?: ReactNode
  requiredIndicator?: ReactNode
}

export interface LegendProps extends HTMLUIProps<"legend">, LegendOptions {}

export const Legend = forwardRef<LegendProps, "legend">(
  (
    {
      className,
      children,
      isRequired: isRequiredProp,
      optionalIndicator = null,
      requiredIndicator = null,
      ...rest
    },
    ref,
  ) => {
    const { isDisabled, isFocused, isInvalid, isReadOnly, isRequired } =
      useFormControlContext() ?? {}
    const styles = useFormControlStyles() ?? {}

    isRequiredProp ??= isRequired

    const css: CSSUIObject = { ...styles.legend }

    return (
      <ui.legend
        ref={ref}
        className={cx("ui-fieldset__legend", className)}
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
      </ui.legend>
    )
  },
)

Legend.displayName = "Legend"
Legend.__ui__ = "Legend"
