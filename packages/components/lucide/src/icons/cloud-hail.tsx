import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CloudHail as LucideCloudHailIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CloudHailIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CloudHailIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideCloudHailIcon} {...props} />,
)

/**
 * @deprecated Use `CloudHailIcon` instead.
 */
export const CloudHail = CloudHailIcon
