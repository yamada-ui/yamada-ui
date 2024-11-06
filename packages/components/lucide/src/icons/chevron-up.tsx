import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ChevronUp as LucideChevronUpIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ChevronUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChevronUpIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideChevronUpIcon} {...props} />,
)

/**
 * @deprecated Use `ChevronUpIcon` instead.
 */
export const ChevronUp = ChevronUpIcon
