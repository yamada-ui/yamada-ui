import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ChevronsDown as LucideChevronsDownIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ChevronsDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChevronsDownIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideChevronsDownIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ChevronsDownIcon` instead.
 */
export const ChevronsDown = ChevronsDownIcon
