import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Shrub as LucideShrubIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ShrubIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShrubIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideShrubIcon} {...props} />
))

/**
 * @deprecated Use `ShrubIcon` instead.
 */
export const Shrub = ShrubIcon
