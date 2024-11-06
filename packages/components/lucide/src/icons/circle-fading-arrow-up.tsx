import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CircleFadingArrowUp as LucideCircleFadingArrowUpIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CircleFadingArrowUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleFadingArrowUpIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCircleFadingArrowUpIcon} {...props} />
  ),
)

/**
 * @deprecated Use `CircleFadingArrowUpIcon` instead.
 */
export const CircleFadingArrowUp = CircleFadingArrowUpIcon
