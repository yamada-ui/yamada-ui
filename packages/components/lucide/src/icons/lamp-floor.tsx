import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { LampFloor as LucideLampFloorIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `LampFloorIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LampFloorIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideLampFloorIcon} {...props} />,
)

/**
 * @deprecated Use `LampFloorIcon` instead.
 */
export const LampFloor = LampFloorIcon
