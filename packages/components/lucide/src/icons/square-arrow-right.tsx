import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { SquareArrowRight as OriginalSquareArrowRight } from "lucide-react"

/**
 * `SquareArrowRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareArrowRightIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalSquareArrowRight}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `SquareArrowRight` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `SquareArrowRightIcon` instead.
 */
export const SquareArrowRight = SquareArrowRightIcon
