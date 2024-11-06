import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { VibrateOff as LucideVibrateOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `VibrateOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const VibrateOffIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideVibrateOffIcon} {...props} />,
)

/**
 * @deprecated Use `VibrateOffIcon` instead.
 */
export const VibrateOff = VibrateOffIcon
