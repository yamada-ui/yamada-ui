import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ScreenShareOff as ScreenShareOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ScreenShareOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ScreenShareOff = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ScreenShareOffIcon} {...props} />,
)
