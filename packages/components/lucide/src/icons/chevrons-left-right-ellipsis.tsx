import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ChevronsLeftRightEllipsis as LucideChevronsLeftRightEllipsisIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ChevronsLeftRightEllipsisIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChevronsLeftRightEllipsisIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideChevronsLeftRightEllipsisIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ChevronsLeftRightEllipsisIcon` instead.
 */
export const ChevronsLeftRightEllipsis = ChevronsLeftRightEllipsisIcon
