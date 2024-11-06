import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { OctagonX as LucideOctagonXIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `OctagonXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const OctagonXIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideOctagonXIcon} {...props} />
))

/**
 * @deprecated Use `OctagonXIcon` instead.
 */
export const OctagonX = OctagonXIcon
