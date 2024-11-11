import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { PanelLeftClose as OriginalPanelLeftClose } from "lucide-react"

/**
 * `PanelLeftCloseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelLeftCloseIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalPanelLeftClose} {...props} />
))

/**
 * `PanelLeftClose` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `PanelLeftCloseIcon` instead.
 */
export const PanelLeftClose = PanelLeftCloseIcon
