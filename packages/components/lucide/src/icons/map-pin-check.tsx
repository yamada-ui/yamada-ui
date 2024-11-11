import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { MapPinCheck as OriginalMapPinCheck } from "lucide-react"

/**
 * `MapPinCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MapPinCheckIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalMapPinCheck} {...props} />
))

/**
 * `MapPinCheck` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `MapPinCheckIcon` instead.
 */
export const MapPinCheck = MapPinCheckIcon
