import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ScreenShare as LucideScreenShareIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ScreenShareIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ScreenShareIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideScreenShareIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ScreenShareIcon` instead.
 */
export const ScreenShare = ScreenShareIcon
