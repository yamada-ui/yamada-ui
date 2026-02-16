"use client"

import type { ReactNode } from "react"
import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { ButtonProps } from "../button"
import type { FormStyle } from "./form.style"
import { useId, useMemo } from "react"
import { createSlotComponent, styled } from "../../core"
import { createContext, cx, useSplitChildren } from "../../utils"
import { Button } from "../button"
import { formStyle } from "./form.style"

interface FormContext extends Pick<
  FormRootProps,
  | "disabled"
  | "errorMessage"
  | "helperMessage"
  | "invalid"
  | "optionalIndicator"
  | "readOnly"
  | "replace"
  | "required"
  | "requiredIndicator"
  | "size"
  | "variant"
> {
  id: string
  descriptionId: string
  titleId: string
}

const [FormContext, useFormContext] = createContext<FormContext>({
  name: "FormContext",
  strict: false,
})

export { FormContext, useFormContext }

export interface FormRootProps
  extends Omit<HTMLStyledProps<"form">, "title">, ThemeProps<FormStyle> {
  /**
   * The form description to use.
   */
  description?: ReactNode
  /**
   * An object managing the disabled state of each field.
   */
  disabled?: boolean | { [key: string]: boolean | undefined }
  /**
   * An object managing the error message of each field.
   */
  errorMessage?: { [key: string]: string | undefined }
  /**
   * An object managing the helper message of each field.
   */
  helperMessage?: { [key: string]: string | undefined }
  /**
   * An object managing the invalid state of each field.
   */
  invalid?: boolean | { [key: string]: boolean | undefined }
  /**
   * The optional indicator to use for each field.
   */
  optionalIndicator?: ReactNode
  /**
   * An object managing the read only state of each field.
   */
  readOnly?: boolean | { [key: string]: boolean | undefined }
  /**
   * An object managing the replace state of each field.
   */
  replace?: boolean | { [key: string]: boolean | undefined }
  /**
   * An object managing the required state of each field.
   */
  required?: boolean | { [key: string]: boolean | undefined }
  /**
   * The required indicator to use for each field.
   */
  requiredIndicator?: ReactNode
  /**
   * The submit button to use.
   */
  submitButton?: ReactNode
  /**
   * The form title to use.
   */
  title?: ReactNode
  /**
   * Props the body component.
   */
  bodyProps?: FormBodyProps
  /**
   * Props the description component.
   */
  descriptionProps?: FormDescriptionProps
  /**
   * Props the footer component.
   */
  footerProps?: FormFooterProps
  /**
   * Props the header component.
   */
  headerProps?: FormHeaderProps
  /**
   * Props the submit button component.
   */
  submitButtonProps?: FormSubmitButtonProps
  /**
   * Props the title component.
   */
  titleProps?: FormTitleProps
}

const {
  PropsContext: FormPropsContext,
  usePropsContext: useFormPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<FormRootProps, FormStyle, FormContext>(
  "form",
  formStyle,
)

export { FormPropsContext, useFormPropsContext }

/**
 * `Form` is a component used to group multiple form elements.
 *
 * @see https://yamada-ui.com/docs/components/form
 */
export const FormRoot = withProvider<"form", FormRootProps, "size" | "variant">(
  ({
    id,
    size,
    variant,
    "aria-labelledby": ariaLabelledBy,
    children,
    description,
    disabled,
    errorMessage,
    helperMessage,
    invalid,
    noValidate = true,
    optionalIndicator,
    readOnly,
    replace,
    required,
    requiredIndicator,
    submitButton,
    title,
    bodyProps,
    descriptionProps,
    footerProps,
    headerProps,
    submitButtonProps,
    titleProps,
    ...rest
  }) => {
    const uuid = useId()
    const titleId = useId()
    const descriptionId = useId()
    const [
      omittedChildren,
      customHeader,
      customBody,
      customFooter,
      customTitle,
      customDescription,
      customSubmitButton,
    ] = useSplitChildren(
      children,
      FormHeader,
      FormBody,
      FormFooter,
      FormTitle,
      FormDescription,
      FormSubmitButton,
    )

    id ??= uuid

    const context = useMemo(
      () => ({
        id,
        size,
        variant,
        descriptionId,
        disabled,
        errorMessage,
        helperMessage,
        invalid,
        optionalIndicator,
        readOnly,
        replace,
        required,
        requiredIndicator,
        titleId,
      }),
      [
        id,
        titleId,
        descriptionId,
        disabled,
        size,
        variant,
        errorMessage,
        helperMessage,
        invalid,
        readOnly,
        replace,
        required,
        optionalIndicator,
        requiredIndicator,
      ],
    )

    return (
      <FormContext value={context}>
        <styled.form
          id={id}
          aria-labelledby={cx(titleId, descriptionId, ariaLabelledBy)}
          noValidate={noValidate}
          {...rest}
        >
          {customHeader ||
            (customTitle || title || customDescription || description ? (
              <FormHeader {...headerProps}>
                {customTitle ||
                  (title ? (
                    <FormTitle {...titleProps}>{title}</FormTitle>
                  ) : null)}

                {customDescription ||
                  (description ? (
                    <FormDescription {...descriptionProps}>
                      {description}
                    </FormDescription>
                  ) : null)}
              </FormHeader>
            ) : null)}

          {customBody || <FormBody {...bodyProps}>{omittedChildren}</FormBody>}

          {customFooter ||
            (customSubmitButton || submitButton ? (
              <FormFooter {...footerProps}>
                {customSubmitButton ||
                  (submitButton ? (
                    <FormSubmitButton {...submitButtonProps}>
                      {submitButton}
                    </FormSubmitButton>
                  ) : null)}
              </FormFooter>
            ) : null)}
        </styled.form>
      </FormContext>
    )
  },
  "root",
  { transferProps: ["size", "variant"] },
)()

export interface FormHeaderProps extends HTMLStyledProps {}

export const FormHeader = withContext<"div", FormHeaderProps>("div", "header")()

export interface FormTitleProps extends HTMLStyledProps<"h3"> {}

export const FormTitle = withContext<"h3", FormTitleProps>("h3", "title")(
  undefined,
  (props) => {
    const { titleId } = useFormContext() ?? {}

    return { id: titleId, ...props }
  },
)

export interface FormDescriptionProps extends HTMLStyledProps<"p"> {}

export const FormDescription = withContext<"p", FormDescriptionProps>(
  "p",
  "description",
)(undefined, (props) => {
  const { descriptionId, titleId } = useFormContext() ?? {}

  return { id: descriptionId, "aria-describedby": titleId, ...props }
})

export interface FormBodyProps extends HTMLStyledProps {}

export const FormBody = withContext<"div", FormBodyProps>("div", "body")()

export interface FormGroupProps extends HTMLStyledProps {}

export const FormGroup = withContext<"div", FormGroupProps>("div", "group")()

export interface FormFooterProps extends HTMLStyledProps {}

export const FormFooter = withContext<"div", FormFooterProps>("div", "footer")()

export interface FormSubmitButtonProps extends ButtonProps {}

export const FormSubmitButton = withContext<"button", FormSubmitButtonProps>(
  Button,
  "submitButton",
)({ type: "submit" }, (props) => {
  const { id } = useFormContext() ?? {}

  return { form: id, ...props }
})
