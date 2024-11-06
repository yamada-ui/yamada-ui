import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Scale as LucideScaleIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ScaleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ScaleIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideScaleIcon} {...props} />
))

/**
 * @deprecated Use `ScaleIcon` instead.
 */
export const Scale = ScaleIcon
