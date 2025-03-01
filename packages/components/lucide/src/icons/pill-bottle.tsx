import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { PillBottle as OriginalPillBottle } from "lucide-react"

/**
 * `PillBottleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PillBottleIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalPillBottle}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `PillBottle` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `PillBottleIcon` instead.
 */
export const PillBottle = PillBottleIcon
