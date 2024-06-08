import { forwardRef } from "@yamada-ui/core"
import { Orbit as OrbitIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type OrbitProps = LucideIconProps

/**
 * `Orbit` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Orbit = forwardRef<OrbitProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={OrbitIcon} {...props} />
))
