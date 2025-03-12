import type { ButtonProps } from "../../components/button"
import type { ColorModeToken, CSS, HTMLUIProps, ThemeProps } from "../../core"
import type { ReactNodeOrFunction } from "../../utils"
import type { FieldProps } from "../field"
import type { FileButtonStyle } from "./file-button.style"
import type { UseFileButtonProps, UseFileButtonReturn } from "./use-file-button"
import { Button } from "../../components/button"
import { createSlotComponent, mergeVars, ui } from "../../core"
import { isFunction } from "../../utils"
import { fileButtonStyle } from "./file-button.style"
import { useFileButton } from "./use-file-button"

interface FileButtonContext extends UseFileButtonReturn {}

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
  errorBorderColor?: ColorModeToken<CSS.Property.BorderColor, "colors">
}

export const {
  component,
  ComponentContext: FileButtonContext,
  PropsContext: FileButtonPropsContext,
  useComponentContext: useFileButtonContext,
  usePropsContext: useFileButtonPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<FileButtonProps, FileButtonStyle, FileButtonContext>(
  "file-button",
  fileButtonStyle,
)

/**
 * `FileButton` is a button component used for users to select files.
 *
 * @see Docs https://yamada-ui.com/components/forms/file-button
 */
export const FileButton = withProvider<"div", FileButtonProps>(
  ({ children, ...rest }) => {
    const context = useFileButton(rest)
    return (
      <FileButtonContext value={context}>
        <ui.div>
          <FileButtonInput />
          <CustomButton>{children}</CustomButton>
        </ui.div>
      </FileButtonContext>
    )
  },
  "root",
)(undefined, ({ as, css, errorBorderColor, vars: varsProp, ...rest }) => {
  return {
    as: as || Button,
    css: as ? undefined : css,
    vars: mergeVars(varsProp, {
      name: "errorBorderColor",
      token: "colors",
      value: errorBorderColor,
    }),
    ...rest,
  }
})

interface FileButtonInputProps extends HTMLUIProps<"input"> {}
const FileButtonInput = withContext<"input", FileButtonInputProps>(
  "input",
  "input",
)(undefined, (props) => {
  const { getInputProps } = useFileButtonContext()

  return { ...getInputProps(props) }
})

interface CustomButtonProps extends Omit<HTMLUIProps<"button">, "children"> {
  children: ReactNodeOrFunction<Props>
}

const CustomButton = withContext<"button", CustomButtonProps>(
  ({ as, css, children, ...rest }) => {
    const { getButtonProps, getCustomButtonProps } = useFileButtonContext()
    return isFunction(children) ? (
      children(getCustomButtonProps(rest))
    ) : (
      <ui.button as={as} css={css} {...getButtonProps()}>
        {children}
      </ui.button>
    )
  },
  "button",
)()
