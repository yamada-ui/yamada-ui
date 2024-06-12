import { forwardRef } from "@yamada-ui/core"
import { Drum as DrumIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type DrumProps = LucideIconProps

/**
 * `Drum` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Drum = forwardRef<DrumProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={DrumIcon} {...props} />
))
