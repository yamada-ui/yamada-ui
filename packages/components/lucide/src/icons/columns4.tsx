import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Columns4 as LucideColumns4Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Columns4Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Columns4Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideColumns4Icon} {...props} />
))

/**
 * @deprecated Use `Columns4Icon` instead.
 */
export const Columns4 = Columns4Icon
