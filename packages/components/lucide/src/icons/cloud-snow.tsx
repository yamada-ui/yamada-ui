import { forwardRef } from "@yamada-ui/core"
import { CloudSnow as CloudSnowIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CloudSnowProps = LucideIconProps

/**
 * `CloudSnow` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CloudSnow = forwardRef<CloudSnowProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CloudSnowIcon} {...props} />
))
