"use client"

import type { ReactNode } from "react"
import type { ThemeProps, WithoutThemeProps } from "../../core"
import type { ButtonProps } from "./button"
import type { IconButtonStyle } from "./icon-button.style"
import { createComponent } from "../../core"
import { Button } from "./button"
import { iconButtonStyle } from "./icon-button.style"

export interface IconButtonProps
  extends Omit<
      WithoutThemeProps<ButtonProps, IconButtonStyle>,
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

const {
  PropsContext: IconButtonPropsContext,
  usePropsContext: useIconButtonPropsContext,
  withContext,
} = createComponent<IconButtonProps, IconButtonStyle>(
  "icon-button",
  iconButtonStyle,
)

export { IconButtonPropsContext, useIconButtonPropsContext }

/**
 * `IconButton` is a component that displays an icon within a button.
 *
 * @see https://yamada-ui.com/docs/components/icon-button
 */
export const IconButton = withContext<"button", IconButtonProps>(Button)(
  undefined,
  ({ children, icon, ...rest }) => ({
    children: icon || children,
    ...rest,
  }),
)
