import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Guitar as LucideGuitarIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `GuitarIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GuitarIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideGuitarIcon} {...props} />
))

/**
 * @deprecated Use `GuitarIcon` instead.
 */
export const Guitar = GuitarIcon
