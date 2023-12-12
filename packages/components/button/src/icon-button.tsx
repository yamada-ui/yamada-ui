import { forwardRef } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import type { ReactElement } from "react"
import type { ButtonProps } from "./button"
import { Button } from "./button"

type IconButtonOptions = {
  /**
   * The icon to be used in the button.
   */
  icon?: ReactElement
  /**
   * If `true`, the button will be perfectly round. Else, it'll be slightly round.
   *
   * @default false
   */
  isRounded?: boolean
}

export type IconButtonProps = Omit<
  ButtonProps,
  "leftIcon" | "rightIcon" | "loadingIcon" | "loadingText" | "loadingPlacement"
> &
  IconButtonOptions

/**
 * `IconButton` is a component that displays an icon within a button.
 *
 * @see Docs https://yamada-ui.com/components/forms/icon-button
 */
export const IconButton = forwardRef<IconButtonProps, "button">(
  ({ icon, isRounded, children, className, ...rest }, ref) => {
    return (
      <Button
        className={cx("ui-icon-button", className)}
        ref={ref}
        p={0}
        {...(isRounded ? { rounded: "full" } : {})}
        {...rest}
      >
        {icon || children}
      </Button>
    )
  },
)
