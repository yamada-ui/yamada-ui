import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Leaf as LucideLeafIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `LeafIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LeafIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideLeafIcon} {...props} />
))

/**
 * @deprecated Use `LeafIcon` instead.
 */
export const Leaf = LeafIcon
