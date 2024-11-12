import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { PanelLeftOpen as OriginalPanelLeftOpen } from "lucide-react"

/**
 * `PanelLeftOpenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelLeftOpenIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalPanelLeftOpen} {...props} />
))

/**
 * `PanelLeftOpen` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `PanelLeftOpenIcon` instead.
 */
export const PanelLeftOpen = PanelLeftOpenIcon
