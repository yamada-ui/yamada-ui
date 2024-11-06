import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Clock9 as LucideClock9Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Clock9Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Clock9Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideClock9Icon} {...props} />
))

/**
 * @deprecated Use `Clock9Icon` instead.
 */
export const Clock9 = Clock9Icon
