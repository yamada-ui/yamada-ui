import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ChevronsLeftRight as LucideChevronsLeftRightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ChevronsLeftRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChevronsLeftRightIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideChevronsLeftRightIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ChevronsLeftRightIcon` instead.
 */
export const ChevronsLeftRight = ChevronsLeftRightIcon
