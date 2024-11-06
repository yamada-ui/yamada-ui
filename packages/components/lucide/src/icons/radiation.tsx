import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Radiation as LucideRadiationIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `RadiationIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RadiationIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideRadiationIcon} {...props} />,
)

/**
 * @deprecated Use `RadiationIcon` instead.
 */
export const Radiation = RadiationIcon
