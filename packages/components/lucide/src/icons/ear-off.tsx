import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { EarOff as LucideEarOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `EarOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const EarOffIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideEarOffIcon} {...props} />
))

/**
 * @deprecated Use `EarOffIcon` instead.
 */
export const EarOff = EarOffIcon
