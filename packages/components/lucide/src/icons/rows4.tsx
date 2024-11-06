import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Rows4 as LucideRows4Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Rows4Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Rows4Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideRows4Icon} {...props} />
))

/**
 * @deprecated Use `Rows4Icon` instead.
 */
export const Rows4 = Rows4Icon
