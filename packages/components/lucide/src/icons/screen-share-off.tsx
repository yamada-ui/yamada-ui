import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ScreenShareOff as LucideScreenShareOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ScreenShareOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ScreenShareOffIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideScreenShareOffIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ScreenShareOffIcon` instead.
 */
export const ScreenShareOff = ScreenShareOffIcon
