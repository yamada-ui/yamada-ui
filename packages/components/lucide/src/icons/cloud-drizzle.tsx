import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CloudDrizzle as LucideCloudDrizzleIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CloudDrizzleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CloudDrizzleIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCloudDrizzleIcon} {...props} />
  ),
)

/**
 * @deprecated Use `CloudDrizzleIcon` instead.
 */
export const CloudDrizzle = CloudDrizzleIcon
