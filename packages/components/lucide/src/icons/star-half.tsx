import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { StarHalf as OriginalStarHalf } from "lucide-react"

/**
 * `StarHalfIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const StarHalfIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalStarHalf}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `StarHalf` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `StarHalfIcon` instead.
 */
export const StarHalf = StarHalfIcon
