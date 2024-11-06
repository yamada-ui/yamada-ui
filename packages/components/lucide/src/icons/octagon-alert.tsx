import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { OctagonAlert as LucideOctagonAlertIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `OctagonAlertIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const OctagonAlertIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideOctagonAlertIcon} {...props} />
  ),
)

/**
 * @deprecated Use `OctagonAlertIcon` instead.
 */
export const OctagonAlert = OctagonAlertIcon
