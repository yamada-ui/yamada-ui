import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CloudSunRain as LucideCloudSunRainIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CloudSunRainIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CloudSunRainIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCloudSunRainIcon} {...props} />
  ),
)

/**
 * @deprecated Use `CloudSunRainIcon` instead.
 */
export const CloudSunRain = CloudSunRainIcon
