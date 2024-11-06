import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ChevronDown as LucideChevronDownIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ChevronDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChevronDownIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideChevronDownIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ChevronDownIcon` instead.
 */
export const ChevronDown = ChevronDownIcon
