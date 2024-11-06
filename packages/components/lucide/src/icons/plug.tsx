import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Plug as LucidePlugIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PlugIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PlugIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucidePlugIcon} {...props} />
))

/**
 * @deprecated Use `PlugIcon` instead.
 */
export const Plug = PlugIcon
