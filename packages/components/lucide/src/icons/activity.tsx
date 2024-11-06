import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Activity as LucideActivityIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ActivityIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ActivityIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideActivityIcon} {...props} />
))

/**
 * @deprecated Use `ActivityIcon` instead.
 */
export const Activity = ActivityIcon
