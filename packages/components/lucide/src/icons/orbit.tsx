import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Orbit as LucideOrbitIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `OrbitIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const OrbitIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideOrbitIcon} {...props} />
))

/**
 * @deprecated Use `OrbitIcon` instead.
 */
export const Orbit = OrbitIcon
