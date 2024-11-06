import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CircleCheck as LucideCircleCheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CircleCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleCheckIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCircleCheckIcon} {...props} />
  ),
)

/**
 * @deprecated Use `CircleCheckIcon` instead.
 */
export const CircleCheck = CircleCheckIcon
