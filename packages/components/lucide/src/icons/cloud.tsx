import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Cloud as LucideCloudIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CloudIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CloudIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideCloudIcon} {...props} />
))

/**
 * @deprecated Use `CloudIcon` instead.
 */
export const Cloud = CloudIcon
