import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ZapOff as LucideZapOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ZapOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ZapOffIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideZapOffIcon} {...props} />
))

/**
 * @deprecated Use `ZapOffIcon` instead.
 */
export const ZapOff = ZapOffIcon
