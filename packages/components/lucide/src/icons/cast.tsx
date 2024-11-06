import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Cast as LucideCastIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CastIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CastIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideCastIcon} {...props} />
))

/**
 * @deprecated Use `CastIcon` instead.
 */
export const Cast = CastIcon
