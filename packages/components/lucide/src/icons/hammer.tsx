import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Hammer as LucideHammerIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `HammerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HammerIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideHammerIcon} {...props} />
))

/**
 * @deprecated Use `HammerIcon` instead.
 */
export const Hammer = HammerIcon
