import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Umbrella as UmbrellaIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Umbrella` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Umbrella = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={UmbrellaIcon} {...props} />
))
