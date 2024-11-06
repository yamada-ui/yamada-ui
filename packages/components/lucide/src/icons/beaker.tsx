import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Beaker as LucideBeakerIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BeakerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BeakerIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBeakerIcon} {...props} />
))

/**
 * @deprecated Use `BeakerIcon` instead.
 */
export const Beaker = BeakerIcon
