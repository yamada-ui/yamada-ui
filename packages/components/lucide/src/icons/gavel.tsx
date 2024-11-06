import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Gavel as LucideGavelIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `GavelIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GavelIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideGavelIcon} {...props} />
))

/**
 * @deprecated Use `GavelIcon` instead.
 */
export const Gavel = GavelIcon
