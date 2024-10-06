import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CornerLeftUp as CornerLeftUpIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CornerLeftUp` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CornerLeftUp = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CornerLeftUpIcon} {...props} />
))
