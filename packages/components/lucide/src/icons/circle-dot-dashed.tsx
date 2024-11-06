import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CircleDotDashed as LucideCircleDotDashedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CircleDotDashedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleDotDashedIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCircleDotDashedIcon} {...props} />
  ),
)

/**
 * @deprecated Use `CircleDotDashedIcon` instead.
 */
export const CircleDotDashed = CircleDotDashedIcon
