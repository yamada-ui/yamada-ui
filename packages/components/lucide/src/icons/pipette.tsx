import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Pipette as PipetteIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Pipette` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Pipette = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PipetteIcon} {...props} />
))
