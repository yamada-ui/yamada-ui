import { forwardRef } from "@yamada-ui/core"
import type { IconProps as UIIconProps } from "@yamada-ui/icon"
import { Icon as UIIcon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"

export type LucideIconProps = UIIconProps

export const LucideIcon = forwardRef<LucideIconProps, "svg">(
  ({ className, ...rest }, ref) => {
    return (
      <UIIcon ref={ref} className={cx("ui-lucide-icon", className)} {...rest} />
    )
  },
)
