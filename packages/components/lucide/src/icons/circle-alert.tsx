import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CircleAlert as LucideCircleAlertIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CircleAlertIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleAlertIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCircleAlertIcon} {...props} />
  ),
)

/**
 * @deprecated Use `CircleAlertIcon` instead.
 */
export const CircleAlert = CircleAlertIcon
