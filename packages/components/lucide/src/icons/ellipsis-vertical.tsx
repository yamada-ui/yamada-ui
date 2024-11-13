import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { EllipsisVertical as OriginalEllipsisVertical } from "lucide-react"

/**
 * `EllipsisVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const EllipsisVerticalIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalEllipsisVertical}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `EllipsisVertical` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `EllipsisVerticalIcon` instead.
 */
export const EllipsisVertical = EllipsisVerticalIcon
