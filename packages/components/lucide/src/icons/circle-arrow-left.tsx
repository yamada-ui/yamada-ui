import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CircleArrowLeft as LucideCircleArrowLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CircleArrowLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleArrowLeftIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCircleArrowLeftIcon} {...props} />
  ),
)

/**
 * @deprecated Use `CircleArrowLeftIcon` instead.
 */
export const CircleArrowLeft = CircleArrowLeftIcon
