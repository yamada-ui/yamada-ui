import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { IceCreamCone as IceCreamConeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `IceCreamCone` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const IceCreamCone = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={IceCreamConeIcon} {...props} />
))
