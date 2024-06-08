import { forwardRef } from "@yamada-ui/core"
import { Pipette as PipetteIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PipetteProps = LucideIconProps

/**
 * `Pipette` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Pipette = forwardRef<PipetteProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PipetteIcon} {...props} />
))
