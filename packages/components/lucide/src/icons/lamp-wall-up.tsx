import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { LampWallUp as LucideLampWallUpIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `LampWallUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LampWallUpIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideLampWallUpIcon} {...props} />,
)

/**
 * @deprecated Use `LampWallUpIcon` instead.
 */
export const LampWallUp = LampWallUpIcon
