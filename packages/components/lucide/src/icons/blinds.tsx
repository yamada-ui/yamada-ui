import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Blinds as BlindsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Blinds` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Blinds = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BlindsIcon} {...props} />
))
