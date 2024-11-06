import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ChevronRight as LucideChevronRightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ChevronRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChevronRightIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideChevronRightIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ChevronRightIcon` instead.
 */
export const ChevronRight = ChevronRightIcon
