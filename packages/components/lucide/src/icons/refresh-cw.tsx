import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { RefreshCw as OriginalRefreshCw } from "lucide-react"

/**
 * `RefreshCwIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RefreshCwIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalRefreshCw}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `RefreshCw` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `RefreshCwIcon` instead.
 */
export const RefreshCw = RefreshCwIcon
