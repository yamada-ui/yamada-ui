import { forwardRef } from "@yamada-ui/core"
import { CloudRainWind as CloudRainWindIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CloudRainWindProps = LucideIconProps

/**
 * `CloudRainWind` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CloudRainWind = forwardRef<CloudRainWindProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={CloudRainWindIcon} {...props} />,
)
