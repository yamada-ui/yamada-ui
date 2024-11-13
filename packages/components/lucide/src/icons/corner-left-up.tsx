import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { CornerLeftUp as OriginalCornerLeftUp } from "lucide-react"

/**
 * `CornerLeftUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CornerLeftUpIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalCornerLeftUp}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `CornerLeftUp` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `CornerLeftUpIcon` instead.
 */
export const CornerLeftUp = CornerLeftUpIcon
