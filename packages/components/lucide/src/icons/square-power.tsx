import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SquarePower as LucideSquarePowerIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SquarePowerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquarePowerIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideSquarePowerIcon} {...props} />
  ),
)

/**
 * @deprecated Use `SquarePowerIcon` instead.
 */
export const SquarePower = SquarePowerIcon
