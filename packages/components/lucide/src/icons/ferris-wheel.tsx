import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FerrisWheel as LucideFerrisWheelIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FerrisWheelIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FerrisWheelIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideFerrisWheelIcon} {...props} />
  ),
)

/**
 * @deprecated Use `FerrisWheelIcon` instead.
 */
export const FerrisWheel = FerrisWheelIcon
