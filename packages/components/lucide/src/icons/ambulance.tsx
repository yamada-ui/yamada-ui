import { forwardRef } from "@yamada-ui/core"
import { Ambulance as AmbulanceIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type AmbulanceProps = LucideIconProps

/**
 * `Ambulance` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Ambulance = forwardRef<AmbulanceProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={AmbulanceIcon} {...props} />
))
