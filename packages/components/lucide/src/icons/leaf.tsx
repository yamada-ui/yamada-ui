import { forwardRef } from "@yamada-ui/core"
import { Leaf as LeafIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type LeafProps = LucideIconProps

/**
 * `Leaf` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Leaf = forwardRef<LeafProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LeafIcon} {...props} />
))
