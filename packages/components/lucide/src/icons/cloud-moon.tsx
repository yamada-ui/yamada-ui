import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CloudMoon as LucideCloudMoonIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CloudMoonIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CloudMoonIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideCloudMoonIcon} {...props} />,
)

/**
 * @deprecated Use `CloudMoonIcon` instead.
 */
export const CloudMoon = CloudMoonIcon
