import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ChevronsUpDown as LucideChevronsUpDownIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ChevronsUpDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChevronsUpDownIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideChevronsUpDownIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ChevronsUpDownIcon` instead.
 */
export const ChevronsUpDown = ChevronsUpDownIcon
