import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { PanelsRightBottom as OriginalPanelsRightBottom } from "lucide-react"

/**
 * `PanelsRightBottomIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelsRightBottomIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalPanelsRightBottom} {...props} />,
)

/**
 * `PanelsRightBottom` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `PanelsRightBottomIcon` instead.
 */
export const PanelsRightBottom = PanelsRightBottomIcon
