import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CircleSlash as LucideCircleSlashIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CircleSlashIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleSlashIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCircleSlashIcon} {...props} />
  ),
)

/**
 * @deprecated Use `CircleSlashIcon` instead.
 */
export const CircleSlash = CircleSlashIcon
