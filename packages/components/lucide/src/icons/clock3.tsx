import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Clock3 as LucideClock3Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Clock3Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Clock3Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideClock3Icon} {...props} />
))

/**
 * @deprecated Use `Clock3Icon` instead.
 */
export const Clock3 = Clock3Icon
