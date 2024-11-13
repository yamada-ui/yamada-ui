import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { CircleArrowUp as OriginalCircleArrowUp } from "lucide-react"

/**
 * `CircleArrowUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleArrowUpIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalCircleArrowUp}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `CircleArrowUp` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `CircleArrowUpIcon` instead.
 */
export const CircleArrowUp = CircleArrowUpIcon
