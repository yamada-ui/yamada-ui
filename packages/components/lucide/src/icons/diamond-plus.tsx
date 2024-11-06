import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { DiamondPlus as LucideDiamondPlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `DiamondPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DiamondPlusIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideDiamondPlusIcon} {...props} />
  ),
)

/**
 * @deprecated Use `DiamondPlusIcon` instead.
 */
export const DiamondPlus = DiamondPlusIcon
