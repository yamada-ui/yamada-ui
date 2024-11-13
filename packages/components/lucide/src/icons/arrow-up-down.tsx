import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { ArrowUpDown as OriginalArrowUpDown } from "lucide-react"

/**
 * `ArrowUpDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowUpDownIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalArrowUpDown}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `ArrowUpDown` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `ArrowUpDownIcon` instead.
 */
export const ArrowUpDown = ArrowUpDownIcon
