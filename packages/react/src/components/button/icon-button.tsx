import type { ReactNode } from "react"
import type { ThemeProps } from "../../core"
import type { ButtonProps } from "./button"
import type { IconButtonStyle } from "./icon-button.style"
import { createComponent } from "../../core"
import { Button } from "./button"
import { iconButtonStyle } from "./icon-button.style"

export interface IconButtonProps
  extends Omit<
      ButtonProps,
      | "endIcon"
      | "iconProps"
      | "loadingIcon"
      | "loadingMessage"
      | "loadingPlacement"
      | "loadingProps"
      | "startIcon"
    >,
    ThemeProps<IconButtonStyle> {
  /**
   * The icon to be used in the button.
   */
  icon?: ReactNode
}

export const {
  PropsContext: IconButtonPropsContext,
  usePropsContext: useIconButtonPropsContext,
  withContext,
} = createComponent<IconButtonProps, IconButtonStyle>(
  "icon-button",
  iconButtonStyle,
)

/**
 * `IconButton` is a component that displays an icon within a button.
 *
 * @see Docs https://yamada-ui.com/components/icon-button
 */
export const IconButton = withContext(Button)(
  undefined,
  ({ children, icon, ...rest }) => ({
    children: children || icon,
    ...rest,
  }),
)
