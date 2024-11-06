import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Disc as LucideDiscIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `DiscIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DiscIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideDiscIcon} {...props} />
))

/**
 * @deprecated Use `DiscIcon` instead.
 */
export const Disc = DiscIcon
