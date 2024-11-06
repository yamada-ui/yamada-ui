import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Eclipse as LucideEclipseIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `EclipseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const EclipseIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideEclipseIcon} {...props} />
))

/**
 * @deprecated Use `EclipseIcon` instead.
 */
export const Eclipse = EclipseIcon
