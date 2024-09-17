import { forwardRef } from "@yamada-ui/core"
import type { IconProps } from "@yamada-ui/icon"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"

export interface LucideIconProps extends IconProps {}

export const LucideIcon = forwardRef<LucideIconProps, "svg">(
  ({ className, ...rest }, ref) => {
    return (
      <Icon ref={ref} className={cx("ui-lucide-icon", className)} {...rest} />
    )
  },
)
