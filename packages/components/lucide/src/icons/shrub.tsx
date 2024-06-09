import { forwardRef } from "@yamada-ui/core"
import { Shrub as ShrubIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ShrubProps = LucideIconProps

/**
 * `Shrub` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Shrub = forwardRef<ShrubProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ShrubIcon} {...props} />
))
