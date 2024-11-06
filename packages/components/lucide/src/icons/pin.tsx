import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Pin as LucidePinIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PinIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PinIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucidePinIcon} {...props} />
))

/**
 * @deprecated Use `PinIcon` instead.
 */
export const Pin = PinIcon
