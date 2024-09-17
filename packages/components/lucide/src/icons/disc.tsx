import { forwardRef } from "@yamada-ui/core"
import { Disc as DiscIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

/**
 * `Disc` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Disc = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={DiscIcon} {...props} />
))
