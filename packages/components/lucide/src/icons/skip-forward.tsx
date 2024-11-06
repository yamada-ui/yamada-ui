import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SkipForward as LucideSkipForwardIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SkipForwardIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SkipForwardIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideSkipForwardIcon} {...props} />
  ),
)

/**
 * @deprecated Use `SkipForwardIcon` instead.
 */
export const SkipForward = SkipForwardIcon
