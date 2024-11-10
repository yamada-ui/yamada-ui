import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { LayoutPanelTop as OriginalLayoutPanelTop } from "lucide-react"

/**
 * `LayoutPanelTopIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LayoutPanelTopIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalLayoutPanelTop} {...props} />
))

/**
 * `LayoutPanelTop` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `LayoutPanelTopIcon` instead.
 */
export const LayoutPanelTop = LayoutPanelTopIcon
