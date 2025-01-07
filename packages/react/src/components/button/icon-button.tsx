import type { ReactNode } from "react"
import type { ButtonProps } from "./button"
import { createComponent } from "../../core"
import { Button } from "./button"

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
  > {
  /**
   * The icon to be used in the button.
   */
  icon?: ReactNode
}

export const {
  PropsContext: IconButtonPropsContext,
  usePropsContext: useIconButtonPropsContext,
  withContext,
} = createComponent<IconButtonProps>("icon-button")

/**
 * `IconButton` is a component that displays an icon within a button.
 *
 * @see Docs https://yamada-ui.com/components/forms/icon-button
 */
export const IconButton = withContext(Button)(
  undefined,
  ({ children, icon, ...rest }) => ({
    children: children || icon,
    p: "0",
    ...rest,
  }),
)
