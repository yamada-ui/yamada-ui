import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CloudSnow as LucideCloudSnowIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CloudSnowIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CloudSnowIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideCloudSnowIcon} {...props} />,
)

/**
 * @deprecated Use `CloudSnowIcon` instead.
 */
export const CloudSnow = CloudSnowIcon
