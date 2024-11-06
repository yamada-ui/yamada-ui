import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Clock6 as LucideClock6Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Clock6Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Clock6Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideClock6Icon} {...props} />
))

/**
 * @deprecated Use `Clock6Icon` instead.
 */
export const Clock6 = Clock6Icon
