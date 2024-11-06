import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CloudRainWind as LucideCloudRainWindIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CloudRainWindIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CloudRainWindIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCloudRainWindIcon} {...props} />
  ),
)

/**
 * @deprecated Use `CloudRainWindIcon` instead.
 */
export const CloudRainWind = CloudRainWindIcon
