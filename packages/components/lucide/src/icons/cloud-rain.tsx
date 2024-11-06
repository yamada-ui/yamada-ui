import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CloudRain as LucideCloudRainIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CloudRainIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CloudRainIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideCloudRainIcon} {...props} />,
)

/**
 * @deprecated Use `CloudRainIcon` instead.
 */
export const CloudRain = CloudRainIcon
