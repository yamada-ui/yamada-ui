import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ChevronsLeft as LucideChevronsLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ChevronsLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChevronsLeftIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideChevronsLeftIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ChevronsLeftIcon` instead.
 */
export const ChevronsLeft = ChevronsLeftIcon
