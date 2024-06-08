import { forwardRef } from "@yamada-ui/core"
import { ScreenShare as ScreenShareIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ScreenShareProps = LucideIconProps

/**
 * `ScreenShare` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ScreenShare = forwardRef<ScreenShareProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ScreenShareIcon} {...props} />
))
