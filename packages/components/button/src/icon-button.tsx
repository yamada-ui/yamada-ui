import type { ReactElement } from "react"
import type { ButtonProps } from "./button"
import { forwardRef } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { Button } from "./button"

interface IconButtonOptions {
  /**
   * The icon to be used in the button.
   */
  icon?: ReactElement
}

export interface IconButtonProps
  extends Omit<
      ButtonProps,
      | "endIcon"
      | "leftIcon"
      | "loadingIcon"
      | "loadingPlacement"
      | "loadingText"
      | "rightIcon"
      | "startIcon"
    >,
    IconButtonOptions {}

/**
 * `IconButton` is a component that displays an icon within a button.
 *
 * @see Docs https://yamada-ui.com/components/forms/icon-button
 */
export const IconButton = forwardRef<IconButtonProps, "button">(
  ({ className, children, icon, ...rest }, ref) => {
    return (
      <Button
        ref={ref}
        className={cx("ui-icon-button", className)}
        p={0}
        {...rest}
      >
        {icon || children}
      </Button>
    )
  },
)

IconButton.displayName = "IconButton"
IconButton.__ui__ = "IconButton"
