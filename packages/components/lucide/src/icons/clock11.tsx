import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Clock11 as LucideClock11Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Clock11Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Clock11Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideClock11Icon} {...props} />
))

/**
 * @deprecated Use `Clock11Icon` instead.
 */
export const Clock11 = Clock11Icon
