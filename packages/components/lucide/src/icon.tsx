import type { IconProps as UIIconProps } from "@yamada-ui/icon"
import type { IconNode } from "lucide-react"
import { forwardRef } from "@yamada-ui/core"
import { Icon as UIIcon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { Icon as OriginalIcon } from "lucide-react"

interface IconOptions {
  /**
   * The icon of the [Lucide lab](https://github.com/lucide-icons/lucide-lab).
   */
  icon: IconNode
}

export interface LucideIconProps extends UIIconProps, IconOptions {}

/**
 * `LucideIcon` is a component for using [Lucide lab](https://github.com/lucide-icons/lucide-lab) icons.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LucideIcon = forwardRef<LucideIconProps, "svg">(
  ({ className, icon, ...rest }, ref) => {
    return (
      <UIIcon
        ref={ref}
        as={OriginalIcon}
        className={cx("ui-lucide-icon", className)}
        iconNode={icon}
        {...rest}
      />
    )
  },
)

LucideIcon.displayName = "LucideIcon"
LucideIcon.__ui__ = "LucideIcon"

/**
 * @deprecated Use `LucideIconProps` instead.
 */
export type IconProps = LucideIconProps

/**
 * `Icon` is a component for using [Lucide lab](https://github.com/lucide-icons/lucide-lab) icons.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `LucideIcon` instead.
 */
export const Icon = LucideIcon
