import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CloudOff as LucideCloudOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CloudOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CloudOffIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideCloudOffIcon} {...props} />
))

/**
 * @deprecated Use `CloudOffIcon` instead.
 */
export const CloudOff = CloudOffIcon
