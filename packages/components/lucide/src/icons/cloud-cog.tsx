import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CloudCog as LucideCloudCogIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CloudCogIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CloudCogIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideCloudCogIcon} {...props} />
))

/**
 * @deprecated Use `CloudCogIcon` instead.
 */
export const CloudCog = CloudCogIcon
