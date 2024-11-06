import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Clock5 as LucideClock5Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Clock5Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Clock5Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideClock5Icon} {...props} />
))

/**
 * @deprecated Use `Clock5Icon` instead.
 */
export const Clock5 = Clock5Icon
