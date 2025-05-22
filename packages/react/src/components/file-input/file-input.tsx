import type { ReactNode } from "react"
import type { FC, HTMLStyledProps, ThemeProps } from "../../core"
import type { FieldProps } from "../field"
import type { UseInputBorderProps } from "../input"
import type { FileInputStyle } from "./file-input.style"
import type { UseFileInputProps } from "./use-file-input"
import { cloneElement, isValidElement, useMemo } from "react"
import { createSlotComponent, styled } from "../../core"
import { useInputBorder, useInputPropsContext } from "../input"
import { Portal } from "../portal"
import { fileInputStyle } from "./file-input.style"
import { useFileInput } from "./use-file-input"

const defaultFormat: (value: File, index: number) => string = ({ name }) => name

export interface FileInputProps
  extends Omit<
      HTMLStyledProps<"input">,
      "children" | "defaultValue" | "onChange" | "value"
    >,
    ThemeProps<FileInputStyle>,
    UseInputBorderProps,
    FieldProps,
    Omit<UseFileInputProps, "children"> {
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
  withProvider,
} = createSlotComponent<FileInputProps, FileInputStyle>(
  "file-input",
  fileInputStyle,
)

/**
 * `FileInput` is a component used for users to select files.
 *
 * @see https://yamada-ui.com/components/file-input
 */
export const FileInput = withProvider<"input", FileInputProps>(
  ({
    children,
    component,
    errorBorderColor,
    focusBorderColor,
    format = defaultFormat,
    placeholder,
    separator = ",",
    ...props
  }) => {
    const varProps = useInputBorder({ errorBorderColor, focusBorderColor })
    const { values, getFieldProps, getInputProps } = useFileInput(props)

    const cloneChildren = useMemo(() => {
      if (!values?.length)
        return (
          <styled.span overflow="hidden" whiteSpace="nowrap">
            {placeholder}
          </styled.span>
        )

      if (children) return children(values)

      return values.map((value, index) => {
        const last = values.length === index + 1

        if (component) {
          const node = component({ index, value })

          if (isValidElement(node)) {
            return cloneElement(node, { key: index })
          } else {
            return node
          }
        } else {
          return (
            <FileInputTag key={index}>
              {format(value, index)}
              {!last ? separator : null}
            </FileInputTag>
          )
        }
      })
    }, [children, format, placeholder, separator, component, values])

    return (
      <>
        <Portal>
          <styled.input {...getInputProps()} />
        </Portal>

        <styled.div {...varProps} {...getFieldProps()}>
          {cloneChildren}
        </styled.div>
      </>
    )
  },
  "root",
)(() => {
  return useInputPropsContext()
})

interface FileInputTagProps extends HTMLStyledProps {}

const FileInputTag = withContext<"span", FileInputTagProps>("span", "tag")()
