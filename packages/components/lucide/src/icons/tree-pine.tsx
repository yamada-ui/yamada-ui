import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { TreePine as LucideTreePineIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TreePineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TreePineIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideTreePineIcon} {...props} />
))

/**
 * @deprecated Use `TreePineIcon` instead.
 */
export const TreePine = TreePineIcon
