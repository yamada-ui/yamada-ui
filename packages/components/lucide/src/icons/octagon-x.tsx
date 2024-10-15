import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { OctagonX as OctagonXIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `OctagonX` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const OctagonX = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={OctagonXIcon} {...props} />
))
