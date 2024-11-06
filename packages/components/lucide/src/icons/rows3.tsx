import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Rows3 as LucideRows3Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Rows3Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Rows3Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideRows3Icon} {...props} />
))

/**
 * @deprecated Use `Rows3Icon` instead.
 */
export const Rows3 = Rows3Icon
