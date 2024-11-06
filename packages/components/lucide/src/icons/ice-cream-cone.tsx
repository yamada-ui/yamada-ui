import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { IceCreamCone as LucideIceCreamConeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `IceCreamConeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const IceCreamConeIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideIceCreamConeIcon} {...props} />
  ),
)

/**
 * @deprecated Use `IceCreamConeIcon` instead.
 */
export const IceCreamCone = IceCreamConeIcon
