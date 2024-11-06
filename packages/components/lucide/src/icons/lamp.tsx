import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Lamp as LucideLampIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `LampIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LampIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideLampIcon} {...props} />
))

/**
 * @deprecated Use `LampIcon` instead.
 */
export const Lamp = LampIcon
