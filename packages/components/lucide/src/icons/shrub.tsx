import { forwardRef } from "@yamada-ui/core"
import { Shrub as ShrubIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

/**
 * `Shrub` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Shrub = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ShrubIcon} {...props} />
))
