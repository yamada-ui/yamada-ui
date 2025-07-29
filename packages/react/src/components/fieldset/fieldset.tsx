"use client"

import type { ReactNode } from "react"
import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { FieldsetStyle } from "./fieldset.style"
import { useId, useMemo } from "react"
import { createSlotComponent, styled } from "../../core"
import { createContext, dataAttr, useSplitChildren } from "../../utils"
import { fieldsetStyle } from "./fieldset.style"

interface FieldsetContext
  extends Pick<FieldsetRootProps, "disabled" | "invalid"> {
  id?: string
}

const [FieldsetContext, useFieldsetContext] = createContext<FieldsetContext>({
  name: "FieldsetContext",
  strict: false,
})

export { FieldsetContext, useFieldsetContext }

export interface FieldsetRootProps
  extends HTMLStyledProps<"fieldset">,
    ThemeProps<FieldsetStyle> {
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
   * The fieldset legend to use.
   */
  legend?: ReactNode
  /**
   * Props the content component.
   */
  contentProps?: FieldsetContentProps
  /**
   * Props the error message component.
   */
  errorMessageProps?: FieldsetErrorMessageProps
  /**
   * Props the header component.
   */
  headerProps?: FieldsetHeaderProps
  /**
   * Props the helper message component.
   */
  helperMessageProps?: FieldsetHelperMessageProps
  /**
   * Props the legend component.
   */
  legendProps?: FieldsetLegendProps
}

const {
  PropsContext: FieldsetPropsContext,
  usePropsContext: useFieldsetPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<FieldsetRootProps, FieldsetStyle, FieldsetContext>(
  "fieldset",
  fieldsetStyle,
)

export { FieldsetPropsContext, useFieldsetPropsContext }

/**
 * `Fieldset` is a component used to group multiple controls.
 *
 * @see https://yamada-ui.com/components/fieldset
 */
export const FieldsetRoot = withProvider<"fieldset", FieldsetRootProps>(
  ({
    id,
    children,
    disabled,
    errorMessage,
    helperMessage,
    invalid,
    legend,
    contentProps,
    errorMessageProps,
    headerProps,
    helperMessageProps,
    legendProps,
    ...rest
  }) => {
    const uuid = useId()
    const [
      omittedChildren,
      customLegend,
      customHeader,
      customContent,
      customHelperMessage,
      customErrorMessage,
    ] = useSplitChildren(
      children,
      FieldsetLegend,
      FieldsetHeader,
      FieldsetContent,
      FieldsetHelperMessage,
      FieldsetErrorMessage,
    )

    id ??= uuid

    const context = useMemo(
      () => ({
        id,
        disabled,
        invalid,
      }),
      [id, disabled, invalid],
    )

    return (
      <FieldsetContext value={context}>
        <styled.fieldset {...rest}>
          {customHeader || (
            <FieldsetHeader {...headerProps}>
              {customLegend ||
                (legend ? (
                  <FieldsetLegend {...legendProps}>{legend}</FieldsetLegend>
                ) : null)}

              {customHelperMessage ||
                (helperMessage ? (
                  <FieldsetHelperMessage {...helperMessageProps}>
                    {helperMessage}
                  </FieldsetHelperMessage>
                ) : null)}
            </FieldsetHeader>
          )}

          {customContent || (
            <FieldsetContent {...contentProps}>
              {omittedChildren}
            </FieldsetContent>
          )}

          {customErrorMessage ||
            (errorMessage ? (
              <FieldsetErrorMessage {...errorMessageProps}>
                {errorMessage}
              </FieldsetErrorMessage>
            ) : null)}
        </styled.fieldset>
      </FieldsetContext>
    )
  },
  "root",
)()

export interface FieldsetLegendProps extends HTMLStyledProps<"legend"> {}

export const FieldsetLegend = withContext<"legend", FieldsetLegendProps>(
  "legend",
  "legend",
)(undefined, (props) => {
  const { id, disabled, invalid } = useFieldsetContext() ?? {}

  return {
    id,
    "data-disabled": dataAttr(disabled),
    "data-invalid": dataAttr(invalid),
    ...props,
  }
})

export interface FieldsetHeaderProps extends HTMLStyledProps {}

export const FieldsetHeader = withContext<"div", FieldsetHeaderProps>(
  "div",
  "header",
)()

export interface FieldsetContentProps extends HTMLStyledProps {}

export const FieldsetContent = withContext<"div", FieldsetContentProps>(
  "div",
  "content",
)()

export interface FieldsetHelperMessageProps extends HTMLStyledProps<"span"> {}

export const FieldsetHelperMessage = withContext<
  "span",
  FieldsetHelperMessageProps
>("span", "helperMessage")(undefined, (props) => {
  const { id } = useFieldsetContext() ?? {}

  return { "aria-describedby": id, ...props }
})

export interface FieldsetErrorMessageProps extends HTMLStyledProps<"span"> {}

export const FieldsetErrorMessage = withContext<
  "span",
  FieldsetErrorMessageProps
>((props) => {
  const { invalid } = useFieldsetContext() ?? {}

  if (!invalid) return null

  return <styled.span aria-live="polite" {...props} />
}, "errorMessage")()
