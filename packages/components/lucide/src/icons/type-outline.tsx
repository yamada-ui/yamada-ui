import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { TypeOutline as LucideTypeOutlineIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TypeOutlineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TypeOutlineIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideTypeOutlineIcon} {...props} />
  ),
)

/**
 * @deprecated Use `TypeOutlineIcon` instead.
 */
export const TypeOutline = TypeOutlineIcon
