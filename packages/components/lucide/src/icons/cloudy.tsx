import { forwardRef } from "@yamada-ui/core"
import { Cloudy as CloudyIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CloudyProps = LucideIconProps

/**
 * `Cloudy` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Cloudy = forwardRef<CloudyProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CloudyIcon} {...props} />
))
