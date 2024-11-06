import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PinOff as LucidePinOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PinOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PinOffIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucidePinOffIcon} {...props} />
))

/**
 * @deprecated Use `PinOffIcon` instead.
 */
export const PinOff = PinOffIcon
