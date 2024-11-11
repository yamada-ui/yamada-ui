import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { PanelsTopLeft as OriginalPanelsTopLeft } from "lucide-react"

/**
 * `PanelsTopLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelsTopLeftIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalPanelsTopLeft} {...props} />
))

/**
 * `PanelsTopLeft` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `PanelsTopLeftIcon` instead.
 */
export const PanelsTopLeft = PanelsTopLeftIcon
