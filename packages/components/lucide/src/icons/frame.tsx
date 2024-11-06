import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Frame as LucideFrameIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FrameIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FrameIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideFrameIcon} {...props} />
))

/**
 * @deprecated Use `FrameIcon` instead.
 */
export const Frame = FrameIcon
