"use client"

import type { ReactNode } from "react"
import type { ButtonProps } from "."
import type { ThemeProps, WithoutThemeProps } from "../../core"
import type { IconButtonStyle } from "./icon-button.style"
import { Button } from "."
import { createComponent } from "../../core"
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
 * @see https://yamada-ui.com/components/icon-button
 */
export const IconButton = withContext<"button", IconButtonProps>(Button)(
  undefined,
  ({ children, icon, ...rest }) => ({
    children: icon || children,
    ...rest,
  }),
)
