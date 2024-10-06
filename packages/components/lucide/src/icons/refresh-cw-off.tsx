import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { RefreshCwOff as RefreshCwOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `RefreshCwOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RefreshCwOff = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={RefreshCwOffIcon} {...props} />
))
