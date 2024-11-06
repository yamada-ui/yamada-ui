import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Pipette as LucidePipetteIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PipetteIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PipetteIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucidePipetteIcon} {...props} />
))

/**
 * @deprecated Use `PipetteIcon` instead.
 */
export const Pipette = PipetteIcon
