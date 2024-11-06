import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Octagon as LucideOctagonIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `OctagonIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const OctagonIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideOctagonIcon} {...props} />
))

/**
 * @deprecated Use `OctagonIcon` instead.
 */
export const Octagon = OctagonIcon
