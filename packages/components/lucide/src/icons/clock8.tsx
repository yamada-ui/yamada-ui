import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Clock8 as LucideClock8Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Clock8Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Clock8Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideClock8Icon} {...props} />
))

/**
 * @deprecated Use `Clock8Icon` instead.
 */
export const Clock8 = Clock8Icon
