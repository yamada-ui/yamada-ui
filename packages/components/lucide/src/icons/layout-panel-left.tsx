import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { LayoutPanelLeft as OriginalLayoutPanelLeft } from "lucide-react"

/**
 * `LayoutPanelLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LayoutPanelLeftIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalLayoutPanelLeft} {...props} />,
)

/**
 * `LayoutPanelLeft` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `LayoutPanelLeftIcon` instead.
 */
export const LayoutPanelLeft = LayoutPanelLeftIcon
