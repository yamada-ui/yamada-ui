import { forwardRef } from "@yamada-ui/core"
import { CloudMoonRain as CloudMoonRainIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CloudMoonRainProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CloudMoonRain = forwardRef<CloudMoonRainProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={CloudMoonRainIcon} {...props} />,
)
