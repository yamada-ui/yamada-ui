import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Disc3 as LucideDisc3Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Disc3Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Disc3Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideDisc3Icon} {...props} />
))

/**
 * @deprecated Use `Disc3Icon` instead.
 */
export const Disc3 = Disc3Icon
