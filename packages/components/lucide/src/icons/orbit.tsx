import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Orbit as OrbitIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Orbit` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Orbit = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={OrbitIcon} {...props} />
))
