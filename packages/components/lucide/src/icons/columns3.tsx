import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Columns3 as LucideColumns3Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Columns3Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Columns3Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideColumns3Icon} {...props} />
))

/**
 * @deprecated Use `Columns3Icon` instead.
 */
export const Columns3 = Columns3Icon
