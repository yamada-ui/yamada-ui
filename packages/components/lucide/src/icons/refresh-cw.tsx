import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { RefreshCw as OriginalRefreshCw } from "lucide-react"

/**
 * `RefreshCwIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RefreshCwIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalRefreshCw} {...props} />
))

/**
 * `RefreshCw` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `RefreshCwIcon` instead.
 */
export const RefreshCw = RefreshCwIcon
