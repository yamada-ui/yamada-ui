import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { UtilityPole as LucideUtilityPoleIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `UtilityPoleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UtilityPoleIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideUtilityPoleIcon} {...props} />
  ),
)

/**
 * @deprecated Use `UtilityPoleIcon` instead.
 */
export const UtilityPole = UtilityPoleIcon
