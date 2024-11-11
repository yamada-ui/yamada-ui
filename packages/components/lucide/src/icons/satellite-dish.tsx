import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { SatelliteDish as OriginalSatelliteDish } from "lucide-react"

/**
 * `SatelliteDishIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SatelliteDishIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalSatelliteDish} {...props} />
))

/**
 * `SatelliteDish` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `SatelliteDishIcon` instead.
 */
export const SatelliteDish = SatelliteDishIcon
