import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FastForward as LucideFastForwardIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FastForwardIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FastForwardIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideFastForwardIcon} {...props} />
  ),
)

/**
 * @deprecated Use `FastForwardIcon` instead.
 */
export const FastForward = FastForwardIcon
