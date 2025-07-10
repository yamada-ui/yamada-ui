"use client"

import type { ButtonProps } from "../../components/button"
import type { ThemeProps } from "../../core"
import type { UseInputBorderProps } from "../input"
import type { FileButtonStyle } from "./file-button.style"
import type { UseFileButtonProps } from "./use-file-button"
import { Button } from "../../components/button"
import { createComponent, styled } from "../../core"
import { useInputBorder } from "../input"
import { Portal } from "../portal"
import { fileButtonStyle } from "./file-button.style"
import { useFileButton } from "./use-file-button"

export interface FileButtonProps
  extends Omit<ButtonProps, "defaultValue" | "onChange" | "ref" | "value">,
    UseFileButtonProps,
    Pick<UseInputBorderProps, "errorBorderColor">,
    ThemeProps<FileButtonStyle> {}

const {
  PropsContext: FileButtonPropsContext,
  usePropsContext: useFileButtonPropsContext,
  withContext,
} = createComponent<FileButtonProps, FileButtonStyle>(
  "file-button",
  fileButtonStyle,
)

export { FileButtonPropsContext, useFileButtonPropsContext }

/**
 * `FileButton` is a button component used for users to select files.
 *
 * @see https://yamada-ui.com/components/file-button
 */
export const FileButton = withContext<"div", FileButtonProps>(
  ({ as: As = Button, children, errorBorderColor, ...rest }) => {
    const { getButtonProps, getInputProps } = useFileButton(rest)
    const varProps = useInputBorder({ errorBorderColor })

    return (
      <>
        <Portal>
          <styled.input {...getInputProps()} />
        </Portal>

        <As {...varProps} {...getButtonProps()}>
          {children}
        </As>
      </>
    )
  },
)()
