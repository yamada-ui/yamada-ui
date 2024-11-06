import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Maximize as LucideMaximizeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MaximizeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MaximizeIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideMaximizeIcon} {...props} />
))

/**
 * @deprecated Use `MaximizeIcon` instead.
 */
export const Maximize = MaximizeIcon
