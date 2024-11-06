import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Clock7 as LucideClock7Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Clock7Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Clock7Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideClock7Icon} {...props} />
))

/**
 * @deprecated Use `Clock7Icon` instead.
 */
export const Clock7 = Clock7Icon
