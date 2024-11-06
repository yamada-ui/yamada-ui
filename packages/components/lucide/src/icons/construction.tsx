import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Construction as LucideConstructionIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ConstructionIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ConstructionIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideConstructionIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ConstructionIcon` instead.
 */
export const Construction = ConstructionIcon
