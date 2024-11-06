import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { TreeDeciduous as LucideTreeDeciduousIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TreeDeciduousIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TreeDeciduousIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideTreeDeciduousIcon} {...props} />
  ),
)

/**
 * @deprecated Use `TreeDeciduousIcon` instead.
 */
export const TreeDeciduous = TreeDeciduousIcon
