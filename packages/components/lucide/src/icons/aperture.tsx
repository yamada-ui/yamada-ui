import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Aperture as LucideApertureIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ApertureIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ApertureIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideApertureIcon} {...props} />
))

/**
 * @deprecated Use `ApertureIcon` instead.
 */
export const Aperture = ApertureIcon
