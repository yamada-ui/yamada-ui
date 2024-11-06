import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BellOff as LucideBellOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BellOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BellOffIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBellOffIcon} {...props} />
))

/**
 * @deprecated Use `BellOffIcon` instead.
 */
export const BellOff = BellOffIcon
