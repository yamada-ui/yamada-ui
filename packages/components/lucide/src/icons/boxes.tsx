import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Boxes as LucideBoxesIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BoxesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BoxesIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBoxesIcon} {...props} />
))

/**
 * @deprecated Use `BoxesIcon` instead.
 */
export const Boxes = BoxesIcon
