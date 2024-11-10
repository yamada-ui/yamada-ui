import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { MapPinPlusInside as OriginalMapPinPlusInside } from "lucide-react"

/**
 * `MapPinPlusInsideIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MapPinPlusInsideIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalMapPinPlusInside} {...props} />,
)

/**
 * `MapPinPlusInside` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `MapPinPlusInsideIcon` instead.
 */
export const MapPinPlusInside = MapPinPlusInsideIcon
