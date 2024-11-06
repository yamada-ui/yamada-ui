import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Pi as LucidePiIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PiIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PiIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucidePiIcon} {...props} />
))

/**
 * @deprecated Use `PiIcon` instead.
 */
export const Pi = PiIcon
