import type { IconProps as UIIconProps } from "@yamada-ui/icon"
import type { IconNode } from "lucide-react"
import { forwardRef } from "@yamada-ui/core"
import { Icon as UIIcon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { Icon as LucideIcon } from "lucide-react"

interface IconOptions {
  /**
   * The icon of the [Lucide lab](https://github.com/lucide-icons/lucide-lab).
   */
  icon: IconNode
}

export interface IconProps extends UIIconProps, IconOptions {}

/**
 * `Icon` is a component for using [Lucide lab](https://github.com/lucide-icons/lucide-lab) icons.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Icon = forwardRef<IconProps, "svg">(
  ({ className, icon, ...rest }, ref) => {
    return (
      <UIIcon
        ref={ref}
        as={LucideIcon}
        className={cx("ui-lucide-icon", className)}
        iconNode={icon}
        {...rest}
      />
    )
  },
)
