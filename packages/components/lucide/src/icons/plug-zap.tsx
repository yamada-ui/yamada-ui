import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PlugZap as LucidePlugZapIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PlugZapIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PlugZapIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucidePlugZapIcon} {...props} />
))

/**
 * @deprecated Use `PlugZapIcon` instead.
 */
export const PlugZap = PlugZapIcon
