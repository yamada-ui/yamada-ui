import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Clock4 as LucideClock4Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Clock4Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Clock4Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideClock4Icon} {...props} />
))

/**
 * @deprecated Use `Clock4Icon` instead.
 */
export const Clock4 = Clock4Icon
