import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CircleFadingPlus as LucideCircleFadingPlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CircleFadingPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleFadingPlusIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCircleFadingPlusIcon} {...props} />
  ),
)

/**
 * @deprecated Use `CircleFadingPlusIcon` instead.
 */
export const CircleFadingPlus = CircleFadingPlusIcon
