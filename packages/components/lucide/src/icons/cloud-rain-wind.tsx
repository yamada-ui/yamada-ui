import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { CloudRainWind as OriginalCloudRainWind } from "lucide-react"

/**
 * `CloudRainWindIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CloudRainWindIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalCloudRainWind} {...props} />
))

/**
 * `CloudRainWind` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `CloudRainWindIcon` instead.
 */
export const CloudRainWind = CloudRainWindIcon
