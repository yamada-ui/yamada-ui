import type { CSSProperties, ReactElement, ReactNode } from "react"
import type { FC, HTMLUIProps, ThemeProps } from "../../core"
import type { FieldProps } from "../field"
import type { UseInputBorderProps } from "../input"
import type { FileInputStyle } from "./file-input.style"
import type { UseFileInputProps } from "./use-file-input"
import { cloneElement, useMemo } from "react"
import { createComponent, ui } from "../../core"
import { useFieldProps } from "../field"
import { useInputBorder } from "../input"
import { fileInputStyle } from "./file-input.style"
import { useFileInput } from "./use-file-input"

const defaultFormat: (value: File, index: number) => string = ({ name }) => name

export interface FileInputProps
  extends Omit<
      HTMLUIProps<"input">,
      "children" | "defaultValue" | "onChange" | "value"
    >,
    ThemeProps<FileInputStyle>,
    UseInputBorderProps,
    FieldProps,
    UseFileInputProps {
  children?: (files: File[] | undefined) => ReactNode
  /**
   * The component that displays uploaded files.
   */
  component?: FC<{ index: number; value: File }>
  /**
   * A callback that formats the name of the uploaded file.
   */
  format?: (value: File, index: number) => string
  /**
   * The string to separate uploaded files.
   *
   * @default ','
   */
  separator?: string
}

export const {
  PropsContext: FileInputPropsContext,
  usePropsContext: useFileInputPropsContext,
  withContext,
} = createComponent<FileInputProps, FileInputStyle>(
  "file-input",
  fileInputStyle,
)

/**
 * `FileInput` is a component used for users to select files.
 *
 * @see Docs https://yamada-ui.com/components/file-input
 */
export const FileInput = withContext(
  ({
    children,
    component,
    format = defaultFormat,
    lineClamp = 1,
    placeholder,
    separator = ",",
    ...props
  }) => {
    const {
      props: {
        disabled,
        errorBorderColor,
        focusBorderColor,
        readOnly,
        vars: varsProp,
      },
      ariaProps,
      dataProps,
      eventProps,
    } = useFieldProps(props)
    const vars = useInputBorder(varsProp, {
      errorBorderColor,
      focusBorderColor,
    })
    const { values, getFieldProps, getInputProps } = useFileInput({
      ...props,
      disabled,
      readOnly,
    })

    const cloneChildren = useMemo(() => {
      if (!values?.length)
        return <ui.span lineClamp={lineClamp}>{placeholder}</ui.span>

      if (children) return children(values)

      if (component) {
        return (
          <ui.span lineClamp={lineClamp}>
            {values.map((value, index) => {
              const el = component({ index, value })

              const style: CSSProperties = {
                marginBlockEnd: "0.125rem",
                marginBlockStart: "0.125rem",
                marginInlineEnd: "0.25rem",
              }

              return el
                ? cloneElement<any>(el as ReactElement, { key: index, style })
                : null
            })}
          </ui.span>
        )
      } else {
        return (
          <ui.span lineClamp={lineClamp}>
            {values.map((value, index) => {
              const last = values.length === index + 1

              return (
                <ui.span key={index} display="inline-block" me="0.25rem">
                  {format(value, index)}
                  {!last ? separator : null}
                </ui.span>
              )
            })}
          </ui.span>
        )
      }
    }, [children, format, lineClamp, placeholder, separator, component, values])

    const formControlProps = {
      ...ariaProps,
      ...dataProps,
      ...eventProps,
    }

    return (
      <>
        <ui.input {...formControlProps} {...getInputProps()} />

        <ui.div
          cursor={!(disabled || readOnly) ? "pointer" : undefined}
          py={values?.length && component ? "0.125rem" : undefined}
          vars={vars}
          {...formControlProps}
          {...getFieldProps()}
        >
          {cloneChildren}
        </ui.div>
      </>
    )
  },
)()
