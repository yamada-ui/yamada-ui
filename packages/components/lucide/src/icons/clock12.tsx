import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Clock12 as LucideClock12Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Clock12Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Clock12Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideClock12Icon} {...props} />
))

/**
 * @deprecated Use `Clock12Icon` instead.
 */
export const Clock12 = Clock12Icon
