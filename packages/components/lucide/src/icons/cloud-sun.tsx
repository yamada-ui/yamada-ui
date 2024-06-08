import { forwardRef } from "@yamada-ui/core"
import { CloudSun as CloudSunIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CloudSunProps = LucideIconProps

/**
 * `CloudSun` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CloudSun = forwardRef<CloudSunProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CloudSunIcon} {...props} />
))
