import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CircleChevronDown as LucideCircleChevronDownIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CircleChevronDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleChevronDownIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCircleChevronDownIcon} {...props} />
  ),
)

/**
 * @deprecated Use `CircleChevronDownIcon` instead.
 */
export const CircleChevronDown = CircleChevronDownIcon
