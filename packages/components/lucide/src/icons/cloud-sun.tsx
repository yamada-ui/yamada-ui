import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CloudSun as LucideCloudSunIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CloudSunIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CloudSunIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideCloudSunIcon} {...props} />
))

/**
 * @deprecated Use `CloudSunIcon` instead.
 */
export const CloudSun = CloudSunIcon
