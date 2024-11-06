import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Drum as LucideDrumIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `DrumIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DrumIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideDrumIcon} {...props} />
))

/**
 * @deprecated Use `DrumIcon` instead.
 */
export const Drum = DrumIcon
