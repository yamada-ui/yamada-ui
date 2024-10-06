import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Ambulance as AmbulanceIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Ambulance` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Ambulance = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={AmbulanceIcon} {...props} />
))
