import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Forward as LucideForwardIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ForwardIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ForwardIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideForwardIcon} {...props} />
))

/**
 * @deprecated Use `ForwardIcon` instead.
 */
export const Forward = ForwardIcon
