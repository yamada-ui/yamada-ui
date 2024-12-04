import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { RectangleHorizontal as OriginalRectangleHorizontal } from "lucide-react"

/**
 * `RectangleHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RectangleHorizontalIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalRectangleHorizontal}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `RectangleHorizontal` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `RectangleHorizontalIcon` instead.
 */
export const RectangleHorizontal = RectangleHorizontalIcon
