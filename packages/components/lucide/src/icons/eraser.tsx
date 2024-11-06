import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Eraser as LucideEraserIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `EraserIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const EraserIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideEraserIcon} {...props} />
))

/**
 * @deprecated Use `EraserIcon` instead.
 */
export const Eraser = EraserIcon
