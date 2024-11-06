import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Cloudy as LucideCloudyIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CloudyIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CloudyIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideCloudyIcon} {...props} />
))

/**
 * @deprecated Use `CloudyIcon` instead.
 */
export const Cloudy = CloudyIcon
