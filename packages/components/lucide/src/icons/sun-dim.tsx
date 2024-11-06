import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SunDim as LucideSunDimIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SunDimIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SunDimIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideSunDimIcon} {...props} />
))

/**
 * @deprecated Use `SunDimIcon` instead.
 */
export const SunDim = SunDimIcon
