import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CloudMoonRain as LucideCloudMoonRainIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CloudMoonRainIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CloudMoonRainIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCloudMoonRainIcon} {...props} />
  ),
)

/**
 * @deprecated Use `CloudMoonRainIcon` instead.
 */
export const CloudMoonRain = CloudMoonRainIcon
