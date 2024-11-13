import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { TriangleAlert as OriginalTriangleAlert } from "lucide-react"

/**
 * `TriangleAlertIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TriangleAlertIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalTriangleAlert}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `TriangleAlert` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `TriangleAlertIcon` instead.
 */
export const TriangleAlert = TriangleAlertIcon
