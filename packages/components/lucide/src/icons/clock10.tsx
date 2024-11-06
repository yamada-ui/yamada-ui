import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Clock10 as LucideClock10Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Clock10Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Clock10Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideClock10Icon} {...props} />
))

/**
 * @deprecated Use `Clock10Icon` instead.
 */
export const Clock10 = Clock10Icon
