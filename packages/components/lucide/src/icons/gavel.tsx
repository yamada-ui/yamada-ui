import { forwardRef } from "@yamada-ui/core"
import { Gavel as GavelIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type GavelProps = LucideIconProps

/**
 * `Gavel` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Gavel = forwardRef<GavelProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={GavelIcon} {...props} />
))
