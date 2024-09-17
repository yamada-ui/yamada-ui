import { forwardRef } from "@yamada-ui/core"
import { Hospital as HospitalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

/**
 * `Hospital` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Hospital = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={HospitalIcon} {...props} />
))
