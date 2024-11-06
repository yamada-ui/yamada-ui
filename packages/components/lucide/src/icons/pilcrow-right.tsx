import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PilcrowRight as LucidePilcrowRightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PilcrowRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PilcrowRightIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucidePilcrowRightIcon} {...props} />
  ),
)

/**
 * @deprecated Use `PilcrowRightIcon` instead.
 */
export const PilcrowRight = PilcrowRightIcon
