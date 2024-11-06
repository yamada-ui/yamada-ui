import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Ambulance as LucideAmbulanceIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AmbulanceIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AmbulanceIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideAmbulanceIcon} {...props} />,
)

/**
 * @deprecated Use `AmbulanceIcon` instead.
 */
export const Ambulance = AmbulanceIcon
