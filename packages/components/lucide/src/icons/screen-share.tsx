import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ScreenShare as ScreenShareIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ScreenShare` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ScreenShare = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ScreenShareIcon} {...props} />
))
