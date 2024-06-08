import { forwardRef } from "@yamada-ui/core"
import { SatelliteDish as SatelliteDishIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SatelliteDishProps = LucideIconProps

/**
 * `SatelliteDish` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SatelliteDish = forwardRef<SatelliteDishProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={SatelliteDishIcon} {...props} />,
)
