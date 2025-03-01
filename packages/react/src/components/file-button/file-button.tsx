import type { ButtonProps } from "../../components/button"
import type { CSSProps, ThemeProps } from "../../core"
import type { ReactNodeOrFunction } from "../../utils"
import type { FieldProps } from "../field"
import type { FileButtonStyle } from "./file-button.style"
import type { UseFileButtonProps } from "./use-file-button"
import { Button } from "../../components/button"
import { createComponent, mergeVars, ui } from "../../core"
import { isFunction } from "../../utils"
import { fileButtonStyle } from "./file-button.style"
import { useFileButton } from "./use-file-button"

export interface Props extends FieldProps {
  onClick: () => void
}
export interface FileButtonProps
  extends Omit<ButtonProps, "children" | "onChange" | "ref">,
    UseFileButtonProps,
    ThemeProps<FileButtonStyle> {
  children?: ReactNodeOrFunction<Props>
  /**
   * The border color when the button is invalid.
   */
  errorBorderColor?: CSSProps["borderColor"]
}

export const {
  PropsContext: FileButtonPropsContext,
  usePropsContext: useFileButtonPropsContext,
  withContext,
} = createComponent<FileButtonProps, FileButtonStyle>(
  "file-button",
  fileButtonStyle,
)

/**
 * `FileButton` is a button component used for users to select files.
 *
 * @see Docs https://yamada-ui.com/components/forms/file-button
 */
export const FileButton = withContext<"div", FileButtonProps>(
  ({ as, children, errorBorderColor, vars: varsProp, ...rest }) => {
    const { getButtonProps, getCustomButtonProps, getInputProps } =
      useFileButton(rest)
    const vars = mergeVars(varsProp, {
      name: "errorBorderColor",
      token: "colors",
      value: errorBorderColor,
    })
    return (
      <ui.div>
        <ui.input {...getInputProps()} />

        {isFunction(children) ? (
          children(getCustomButtonProps())
        ) : (
          <ui.button as={as || Button} vars={vars} {...getButtonProps()}>
            {children}
          </ui.button>
        )}
      </ui.div>
    )
  },
)()
