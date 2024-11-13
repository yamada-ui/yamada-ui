import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { SquarePercent as OriginalSquarePercent } from "lucide-react"

/**
 * `SquarePercentIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquarePercentIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalSquarePercent}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `SquarePercent` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `SquarePercentIcon` instead.
 */
export const SquarePercent = SquarePercentIcon
