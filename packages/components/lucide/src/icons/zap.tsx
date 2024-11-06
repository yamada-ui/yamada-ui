import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Zap as LucideZapIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ZapIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ZapIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideZapIcon} {...props} />
))

/**
 * @deprecated Use `ZapIcon` instead.
 */
export const Zap = ZapIcon
