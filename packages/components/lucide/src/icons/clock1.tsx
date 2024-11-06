import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Clock1 as LucideClock1Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Clock1Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Clock1Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideClock1Icon} {...props} />
))

/**
 * @deprecated Use `Clock1Icon` instead.
 */
export const Clock1 = Clock1Icon
