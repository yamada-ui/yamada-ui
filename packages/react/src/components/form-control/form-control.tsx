import type { ReactNode } from "react"
import type { HTMLUIProps, ThemeProps } from "../../core"
import type { FormControlStyle } from "./form-control.style"
import { isValidElement, useId, useMemo, useState } from "react"
import { createSlotComponent, ui } from "../../core"
import { dataAttr, findChild, getValidChildren } from "../../utils"
import { formControlStyle } from "./form-control.style"

export interface FormControlContext
  extends FormControlProps,
    Pick<FormControlRootProps, "replace"> {
  focused: boolean
  onBlur: () => void
  onFocus: () => void
  id?: string
  labelId?: string
}

export interface FormControlProps {
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

export interface FormControlRootProps
  extends HTMLUIProps,
    ThemeProps<FormControlStyle>,
    Pick<LabelProps, "optionalIndicator" | "requiredIndicator">,
    FormControlProps {
  /**
   * The form control error message to use.
   */
  errorMessage?: ReactNode
  /**
   * The form control helper message to use.
   */
  helperMessage?: ReactNode
  /**
   * The form control label to use.
   */
  label?: ReactNode
  /**
   * The form control legend to use.
   */
  legend?: ReactNode
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
  /**
   * Props the legend component.
   */
  legendProps?: LegendProps
}

export const {
  ComponentContext: FormControlContext,
  PropsContext: FormControlPropsContext,
  useComponentContext: useFormControlContext,
  usePropsContext: useFormControlPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<
  FormControlRootProps,
  FormControlStyle,
  FormControlContext
>("form-control", formControlStyle)

/**
 * `FormControl` is a component used to group form elements with label, helper message, error message, etc.
 *
 * @see Docs https://yamada-ui.com/components/forms/form-control
 */
export const FormControlRoot = withProvider<"div", FormControlRootProps>(
  ({
    id,
    children,
    disabled,
    errorMessage,
    helperMessage,
    invalid,
    label,
    legend,
    optionalIndicator,
    readOnly,
    replace = true,
    required,
    requiredIndicator,
    errorMessageProps,
    helperMessageProps,
    labelProps,
    legendProps,
    ...rest
  }) => {
    const uuid = useId()
    const labelId = useId()
    const [focused, setFocused] = useState<boolean>(false)
    const validChildren = getValidChildren(children)
    const customLabel = findChild(validChildren, Label)
    const customLegend = findChild(validChildren, Legend)
    const customHelperMessage = findChild(validChildren, HelperMessage)
    const customErrorMessage = findChild(validChildren, ErrorMessage)

    id ??= uuid

    const context = useMemo(
      () => ({
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
      }),
      [id, labelId, focused, disabled, invalid, readOnly, replace, required],
    )

    return (
      <FormControlContext value={context}>
        <ui.div
          data-disabled={dataAttr(disabled)}
          data-focus={dataAttr(focused)}
          data-invalid={dataAttr(invalid)}
          data-readonly={dataAttr(readOnly)}
          {...rest}
        >
          {customLabel ||
            (label ? (
              <Label
                optionalIndicator={optionalIndicator}
                requiredIndicator={requiredIndicator}
                {...labelProps}
              >
                {label}
              </Label>
            ) : null)}

          {customLegend ||
            (legend ? (
              <Legend
                optionalIndicator={optionalIndicator}
                requiredIndicator={requiredIndicator}
                {...legendProps}
              >
                {legend}
              </Legend>
            ) : null)}

          {children}

          {customHelperMessage ||
            (helperMessage ? (
              <HelperMessage {...helperMessageProps}>
                {helperMessage}
              </HelperMessage>
            ) : null)}

          {customErrorMessage ||
            (errorMessage ? (
              <ErrorMessage {...errorMessageProps}>{errorMessage}</ErrorMessage>
            ) : null)}
        </ui.div>
      </FormControlContext>
    )
  },
  "root",
)()

export interface LabelProps extends HTMLUIProps<"label"> {
  optionalIndicator?: ReactNode
  required?: boolean
  requiredIndicator?: ReactNode
}

export const Label = withContext<"label", LabelProps>(
  ({
    id,
    htmlFor,
    children,
    optionalIndicator = null,
    required,
    requiredIndicator = null,
    ...rest
  }) => {
    const context = useFormControlContext()

    id ??= context.labelId
    required ??= context.required

    return (
      <ui.label
        id={id}
        htmlFor={htmlFor ?? context.id}
        data-disabled={dataAttr(context.disabled)}
        data-focus={dataAttr(context.focused)}
        data-invalid={dataAttr(context.invalid)}
        data-readonly={dataAttr(context.readOnly)}
        {...rest}
      >
        {children}

        {required ? (
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
  "label",
)()

export interface LegendProps
  extends HTMLUIProps<"legend">,
    Pick<LabelProps, "optionalIndicator" | "required" | "requiredIndicator"> {}

export const Legend = withContext<"legend", LegendProps>(
  ({
    id,
    children,
    optionalIndicator = null,
    required,
    requiredIndicator = null,
    ...rest
  }) => {
    const context = useFormControlContext()

    id ??= context.labelId
    required ??= context.required

    return (
      <ui.legend
        data-disabled={dataAttr(context.disabled)}
        data-focus={dataAttr(context.focused)}
        data-invalid={dataAttr(context.invalid)}
        data-readonly={dataAttr(context.readOnly)}
        {...rest}
      >
        {children}

        {required ? (
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
  { name: "legend", slot: "label" },
)()

interface RequiredIndicatorProps extends HTMLUIProps<"span"> {}

const RequiredIndicator = withContext<"span", RequiredIndicatorProps>(
  ({ children, ...rest }) => {
    if (!isValidElement(children)) {
      return (
        <ui.span aria-hidden role="presentation" {...rest}>
          {children ?? <>*</>}
        </ui.span>
      )
    } else {
      return children
    }
  },
  "requiredIndicator",
)()

export interface HelperMessageProps extends HTMLUIProps<"span"> {}

export const HelperMessage = withContext<"span", HelperMessageProps>(
  (props) => {
    const { id, invalid, replace } = useFormControlContext()

    if (replace && invalid) return null

    return <ui.span aria-describedby={id} {...props} />
  },
  "helperMessage",
)()

export interface ErrorMessageProps extends HTMLUIProps<"span"> {}

export const ErrorMessage = withContext<"span", ErrorMessageProps>((props) => {
  const { invalid } = useFormControlContext()

  if (!invalid) return null

  return <ui.span aria-live="polite" {...props} />
}, "errorMessage")()
