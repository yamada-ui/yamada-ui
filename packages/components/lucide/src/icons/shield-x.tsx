import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { ShieldX as OriginalShieldX } from "lucide-react"

/**
 * `ShieldXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShieldXIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalShieldX}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `ShieldX` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `ShieldXIcon` instead.
 */
export const ShieldX = ShieldXIcon
