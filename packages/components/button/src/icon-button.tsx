import { forwardRef } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import type { ReactElement } from "react"
import type { ButtonProps } from "./button"
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
      | "leftIcon"
      | "rightIcon"
      | "loadingIcon"
      | "loadingText"
      | "loadingPlacement"
    >,
    IconButtonOptions {}

/**
 * `IconButton` is a component that displays an icon within a button.
 *
 * @see Docs https://yamada-ui.com/components/forms/icon-button
 */
export const IconButton = forwardRef<IconButtonProps, "button">(
  ({ icon, children, className, ...rest }, ref) => {
    return (
      <Button
        className={cx("ui-icon-button", className)}
        ref={ref}
        p={0}
        {...rest}
      >
        {icon || children}
      </Button>
    )
  },
)
