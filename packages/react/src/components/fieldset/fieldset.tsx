import type { ReactNode } from "react"
import type { HTMLUIProps, ThemeProps } from "../../core"
import type { FieldsetStyle } from "./fieldset.style"
import { useId, useMemo } from "react"
import { createSlotComponent, ui } from "../../core"
import {
  createContext,
  dataAttr,
  findChild,
  getValidChildren,
  isEmpty,
  omitChildren,
} from "../../utils"
import { fieldsetStyle } from "./fieldset.style"

export interface FieldsetContext
  extends Pick<FieldsetRootProps, "disabled" | "invalid"> {
  id?: string
}

export const [FieldsetContext, useFieldsetContext] =
  createContext<FieldsetContext>({
    name: "FieldsetContext",
    strict: false,
  })

export interface FieldsetRootProps
  extends HTMLUIProps<"fieldset">,
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

export const {
  PropsContext: FieldsetPropsContext,
  usePropsContext: useFieldsetPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<FieldsetRootProps, FieldsetStyle, FieldsetContext>(
  "fieldset",
  fieldsetStyle,
)

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
    const validChildren = getValidChildren(children)
    const customLegend = findChild(validChildren, FieldsetLegend)
    const customHeader = findChild(validChildren, FieldsetHeader)
    const customContent = findChild(validChildren, FieldsetContent)
    const customHelperMessage = findChild(validChildren, FieldsetHelperMessage)
    const customErrorMessage = findChild(validChildren, FieldsetErrorMessage)
    const cloneChildren = !isEmpty(validChildren)
      ? omitChildren(
          validChildren,
          FieldsetLegend,
          FieldsetHeader,
          FieldsetContent,
          FieldsetHelperMessage,
          FieldsetErrorMessage,
        )
      : children

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
        <ui.fieldset {...rest}>
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
            <FieldsetContent {...contentProps}>{cloneChildren}</FieldsetContent>
          )}

          {customErrorMessage ||
            (errorMessage ? (
              <FieldsetErrorMessage {...errorMessageProps}>
                {errorMessage}
              </FieldsetErrorMessage>
            ) : null)}
        </ui.fieldset>
      </FieldsetContext>
    )
  },
  "root",
)()

export interface FieldsetLegendProps extends HTMLUIProps<"legend"> {}

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

export interface FieldsetHeaderProps extends HTMLUIProps {}

export const FieldsetHeader = withContext<"div", FieldsetHeaderProps>(
  "div",
  "header",
)()

export interface FieldsetContentProps extends HTMLUIProps {}

export const FieldsetContent = withContext<"div", FieldsetContentProps>(
  "div",
  "content",
)()

export interface FieldsetHelperMessageProps extends HTMLUIProps<"span"> {}

export const FieldsetHelperMessage = withContext<
  "span",
  FieldsetHelperMessageProps
>("span", "helperMessage")(undefined, (props) => {
  const { id } = useFieldsetContext() ?? {}

  return { "aria-describedby": id, ...props }
})

export interface FieldsetErrorMessageProps extends HTMLUIProps<"span"> {}

export const FieldsetErrorMessage = withContext<
  "span",
  FieldsetErrorMessageProps
>((props) => {
  const { invalid } = useFieldsetContext() ?? {}

  if (!invalid) return null

  return <ui.span aria-live="polite" {...props} />
}, "errorMessage")()
