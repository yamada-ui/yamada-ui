import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CloudMoonRain as CloudMoonRainIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CloudMoonRain` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CloudMoonRain = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={CloudMoonRainIcon} {...props} />,
)
