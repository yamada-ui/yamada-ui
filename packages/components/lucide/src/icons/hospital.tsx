import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Hospital as LucideHospitalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `HospitalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HospitalIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideHospitalIcon} {...props} />
))

/**
 * @deprecated Use `HospitalIcon` instead.
 */
export const Hospital = HospitalIcon
