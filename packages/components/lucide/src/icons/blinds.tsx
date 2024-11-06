import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Blinds as LucideBlindsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BlindsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BlindsIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBlindsIcon} {...props} />
))

/**
 * @deprecated Use `BlindsIcon` instead.
 */
export const Blinds = BlindsIcon
